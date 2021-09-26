<template>
	<view class="whole">
	<view class="container">
		<uni-section title="这是任务详情页面" type="line"></uni-section>
		<view class="example">
			<uni-forms ref="form" :modelValue="baseFormData" :rules="rules">
				<uni-forms-item label="学号" required name="id">
					<uni-easyinput v-model="baseFormData.id" placeholder="请输入学号" />
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
			<button style="background-color: #00557f; color: white;" @click="getrecord">查询</button>
		</view>
		<!-- <view class="list-item" bindtap="">
		    <text class="list-name">学号</text>
			<uni-easyinput v-model="baseFormData.id" placeholder="请输入学号" />
			<button style="background-color: #e2e2e2; color: green;" @click="getCode">
					    获取
			</button>
		</view>
		<view class="list-item" bindtap="">
		    <text class="list-name">验证码</text>
			<uni-easyinput v-model="baseFormData.id" placeholder="请检查邮箱,输入验证码" />
			<button style="background-color: #e2e2e2; color: green;" @click="getCode">
					    查询
			</button>
		</view>
	</view> -->
		<view class="uni-container">
			<text>我的任务</text>
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="6" align="center">周数</uni-th>
					<uni-th width="6" align="center">星期</uni-th>
					<uni-th width="10" align="center">开始时间</uni-th>
					<uni-th width="15" align="center">预约者姓名</uni-th>
					<uni-th width="10" align="center">预约状态</uni-th>	
				</uni-tr>
				<uni-tr height="100" v-for="(item, index) in information2" :key="index">
					<uni-td align="center">{{ item.weedId }}</uni-td>
					<uni-td align="center">{{ item.dayId }}</uni-td>
					<uni-td align="center"> {{ item.timeId }}</uni-td>
					<uni-td align="center">{{ item.Name }}</uni-td>
					<uni-td align="center">{{ item.status }}</uni-td>
				</uni-tr>
			</uni-table>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,
				inputID:'',
				inputcode:'',
				week: 0,
				day: 0,
				time: 0,
				information: [],//我预约别人的消息
				information2: [],//我被预约的消息
			}
		},
		onLoad: function() {
		},
		methods: {
			onKeyInput: function(event) {
				this.inputID = event.target.value
			},
			onKeyInput2: function(event) {
				this.inputcode = event.target.value
			},
			getCode: function() {
				uni.request({
					url: getApp().globalData.url+'api/reserve/send-code',
					method: 'GET',
					data: {
						"SID":this.inputID,
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
			},
			getRecord: function() {
				uni.request({
					url: getApp().globalData.url+'api/reserve/find-my',
					method: 'GET',
					data: {
						"type":0,
						"SID":this.inputID,
						"code2":this.inputcode
					},
					success: res => {
						console.log(res.data.data.content)
						this.information = res.data.data.content
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				
				})
				uni.request({
					url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/find-my',
					method: 'GET',
					data: {
						"type":1,
						"SID":this.inputID,
						"code2":this.inputcode
					},
					success: res => {
						console.log(res.data.data.content)
						this.information2 = res.data.data.content
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				
				})
			},
		}
	}
</script>

<style>
	
	page {
		width: 100%;
		height: 100%;
		/* #ifdef H5 */
		background-image: url('~@/static/background.jpg');
		background-size: cover;
		/* #endif */
	}

	
	
	/* #ifdef MP-WEIXIN */
	.content {
		width: 100%;
	}
	/* #endif */
	.uni-container {
		height: 90%;
		margin-top: 1.5%;
		opacity: 0.8;
	}
	
	.text {
		font-weight: 600;
		color: #00b82e;
		margin-left: 40%;
		align-items:center;
	}
	
	.input {
		background-color: rgba(255,255,255,0.9);
		border-radius: 5%/10%;
		height: auto;
		width: 60%;
	}
	
	.uni-group {
		display: flex;
		align-items: center;
		width: auto;
	}
	.head {		
		width: 100%;
		height: 10%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 2.5%;
		border-radius: 1%/20%;
	}
	
	.uni-form-item {
		width: 100%;
		display: flex;
		margin-left: auto;
	}
	
	.uni-button {
		background-color: #2C405A;
	}
	
	.my_infor{
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 5%;
		margin-bottom: 2%;
		border-radius: 1%/20%;
	}
	@import '@/common/uni-nvue.scss';
	
	page {
		width: 100%;
		height: 100%;
		/* #ifdef H5 */
		background-image: url('~@/static/background.jpg');
		background-size: cover;
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
		height: 15px;
		margin-left: 15px;
		font-size: xx-small;
	}
	.list-item {
	  display: flex;
	  flex-direction: row;
	  height: 100rpx;
	  width: 100%;
	  background-color: #fff;
	  border-bottom: 1rpx solid #E5E5E5;
	}
	.list-name {
	  margin-left: 32rpx;
	  line-height: 100rpx;
	  font-family: PingFang SC;
	  font-size: 34rpx;
	  color: #000;
	}
	
</style>

