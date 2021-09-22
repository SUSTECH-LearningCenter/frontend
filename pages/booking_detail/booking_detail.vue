<template>
	<view class="container">
		<uni-section title="这是预约详情页面" type="line"></uni-section>
		<view class="example">
			<uni-forms ref="form" :modelValue="baseFormData" :rules="rules">
				<uni-forms-item label="姓名" required name="name">
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				<uni-forms-item label="学号" required name="id">
					<uni-easyinput v-model="baseFormData.id" placeholder="请输入学号" />
				</uni-forms-item>

				<uni-forms-item label="手机号" required name="phone">
					<uni-easyinput v-model="baseFormData.phone" placeholder="请输入手机号" />
				</uni-forms-item>

				<uni-forms-item label="QQ号" required name="qq">
					<uni-easyinput v-model="baseFormData.qq" placeholder="请输入QQ" />
				</uni-forms-item>

				<uni-forms-item label="咨询内容" required name="content">
					<uni-easyinput v-model="baseFormData.content" placeholder="请输入希望交流的内容" />
				</uni-forms-item>
				<uni-forms-item>
				    <button style="background-color: #00557f; color: white;" @click="getCode">
					    获取邮箱验证码
				    </button>
				</uni-forms-item>
				<uni-forms-item label="验证码" required name="code">
					<uni-easyinput v-model="baseFormData.code" placeholder="请检查邮箱,输入验证码" />
				</uni-forms-item>
			</uni-forms>
			<button style="background-color: #00557f; color: white;" @click="submit">提交</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 基础表单数据 
				baseFormData: {
					name: '',
					id: '',
					phone: '',
					qq: '',
					content: '',
					code: '',
				},
				tutorID: '',
				// 校验规则
				rules: {
					name: {
						rules: [{
							required: true,
							errorMessage: '姓名不能为空'
						}]
					},
					id: {
						rules: [{
								required: true,
								errorMessage: '学号不能为空'
							},
							{
								format: 'number',
								errorMessage: '只能输入数字'
							},
						]
					},

				},

			}
		},
		computed: {
			// 处理表单排列切换
			alignment() {
				if (this.current === 0) return 'left'
				if (this.current === 1) return 'top'
				return 'left'
			}
		},
		onLoad() {},
		onReady() {
			// 设置自定义表单校验规则，必须在节点渲染完毕后执行
		},
		onLoad: function(option) {
			this.tutorID = parseInt(option.tutorID)
			console.log(this.tutorID)
		},
		methods: {
			submit() {
				this.$refs.form.validate().then(first_res => {
					console.log('表单数据信息：' + first_res);
					uni.request({
						url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/create?id='+this.tutorID,
						method: 'POST',
						data: {
							"code": first_res.code,
							"consultContent": first_res.content,
							"qqNumber": first_res.qq,
							"studentId": first_res.id,
							"studentName": first_res.name,
							"studentPhone": first_res.phone
						},
						success: res => {
							console.log("getMachineNum success:" + JSON.stringify(res));
							uni.showToast({
								title: "预约成功，请准时到场",
								mask: false,
								duration: 1500
							});

						},
						fail: (e) => {
							console.log("getMachineNum fail:" + JSON.stringify(e));
						},
						complete: () => {}
					});

				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			},
			getCode: function() {
				uni.request({
					url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/send-code',
					method: 'GET',
					data: {
						"SID": this.baseFormData.id,
					},
					success: res => {
						uni.showToast({
							title: "验证码已发送，请检查邮箱",
							mask: false,
							duration: 1500
						});
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}

				})
			}
		},
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

    page {
		width: 100%;
		height: 100%;
		/* #ifdef H5 */
		background-image: url('~@/static/background.jpg');
		/* #endif */
	}
	
	/* #ifdef H5 */
	.container {
		width: 70%;
		height: 100%;
		margin-left: 15%;
		margin-right: 15%;
	}
	/* #endif */

	/* #ifdef MP-WEIXIN */
	.container {
		width: 100%;
		height: 100%;
	}
	/* #endif */
	
	.example {
		padding: 15px;
		background-color: #fff;
	}

	.segmented-control {
		margin-bottom: 15px;
	}

	.button-group {
		margin-top: 15px;
		display: flex;
		justify-content: space-around;
	}

	.form-item {
		display: flex;
		align-items: center;
	}

	.button {
		display: flex;
		align-items: center;
		height: 35px;
		margin-left: 10px;
	}
</style>
