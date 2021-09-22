<template>
	<view>
		<uni-section title="注意,本页面仅限导生填写" type="line"></uni-section>
		<view class="example">
			<uni-forms ref="form" :modelValue="baseFormData":rules="rules">
				<uni-forms-item label="姓名" required name="name">
					<uni-easyinput v-model="baseFormData.name" placeholder="请输入姓名" />
				</uni-forms-item>
				
				<uni-forms-item label="学号" required name="id">
					<uni-easyinput v-model="baseFormData.id" placeholder="请输入学号" />
				</uni-forms-item>
				
				<uni-forms-item label="周次" required name="week">
					<uni-easyinput v-model="baseFormData.week" placeholder="请输入周次(1-16)" />
				</uni-forms-item>
				
				<uni-forms-item label="天次" required name="day">
					<uni-easyinput v-model="baseFormData.day" placeholder="请输入天次(1-7)" />
				</uni-forms-item>
				
				<uni-forms-item label="时间段" required name="time">
					<uni-easyinput v-model="baseFormData.time" placeholder="请输入时间(9-20),example:输入10,则预约时间为10~11点" />
				</uni-forms-item>
				
				<uni-forms-item label="密钥" required name="code">
					<uni-easyinput v-model="baseFormData.code" placeholder="请输入管理员密钥" />
				</uni-forms-item>
				
			</uni-forms>
			<button style="background-color: #DC7004; color: white;"@click="submit">提交</button>
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
					week:'',
					day:'',
					time:'',
					code:'',
					
				},
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
					week: {
						rules: [{
							required: true,
							errorMessage: '周次不能为空'
						}, {
							format: 'number',
							errorMessage: '只能输入数字'
						},{
							maximum:16,
							minimum:1,
							errorMessage: '输入的周次有误'
						}]
					},
					day: {
						rules: [{
							required: true,
							errorMessage: '天数不能为空'
						}, {
							format: 'number',
							errorMessage: '只能输入数字'
						},{
							maximum:7,
							minimum:1,
							errorMessage: '输入的天数有误'
						}]
					},
					time: {
						rules: [{
							required: true,
							errorMessage: '时间不能为空'
						}, {
							format: 'number',
							errorMessage: '只能输入数字'
						},{
							maximum:20,
							minimum:9,
							errorMessage: '输入的时间有误'
						}]
					}
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
		methods: {
			onClickItem(e) {
				console.log(e);
				this.current = e.currentIndex
			},
			submit() {
			            this.$refs.form.validate().then(first_res=>{
			                console.log('表单数据信息：'+first_res);
							uni.request({
							        url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/post-2',
							        method: 'POST',
							        data: {
							            "advisorName": first_res.name,
							            "advisorId": first_res.id,
							            "semesterId": 1,
							            "weekId": first_res.week,
							            "dayId": first_res.day,
							            "timeId": first_res.time,
							            "code": first_res.code,
										"type":1//0 for student,1 for teacher
							        },
							        success: res => {
							            console.log("getMachineNum success:" + JSON.stringify(res));
							            if (res.data.code == "400") {
											uni.showToast({
											   title: res.data.message,
											   mask: false,
											   duration: 1500
											});
							            } else {
							                uni.showToast({
							                   title: "录入导生信息成功",
							                   mask: false,
							                   duration: 1500
							                });
							            }
							                    
							        },
							        fail: (e) => {
							            console.log("getMachineNum fail:" + JSON.stringify(e));
							        },
							        complete: () => {}
							    });
							
			            }).catch(err =>{
			                console.log('表单错误信息：', err);
			            })
			        }
		}
	}
</script>

<style lang="scss">
	@import '@/common/uni-nvue.scss';

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
