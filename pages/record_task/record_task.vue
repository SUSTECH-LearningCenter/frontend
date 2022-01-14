<template>
	<view class="content">
		<!-- <text class="text">请先登录!</text> -->
		<view class="head">
			<view class="uni-form-item">
				<input class="input" @input="onKeyInput" placeholder="请输入学号" />
				<button class="uni-button" size="mini" type="primary" @click="getCode">获取</button>
			</view>
			<view class="uni-form-item">
				<input class="input" @input="onKeyInput2" placeholder="请输入验证码" />
				<button class="uni-button"  size="mini" type="primary" @click="getRecord">查询</button>
			</view>
		</view>
		<view class="uni-container">
			<view style="display: flex;flex-direction: column;">
				<text style ="margin-top:5%;font-size: 20px;align-self: center;">我的任务记录</text>
			</view>
			
			<view class="item" v-for="(item, index) in information" :key="index">
				<view class="item-top">
					<text class="name">{{item.studentName}}</text>
					<text class="status">{{item.status}}</text>
				</view>
				<view class="item-main">
					<view class="item-sub">
						<text class="theme">开始时间</text>
						<text class="theme-content">第{{numberTotext_week[item.weedId]}}周  星期{{numberTotext_day[item.dayId]}}  {{item.timeId}}:00</text>
					</view>
					<view class="item-sub-consult">
						<text class="theme-consult">咨询内容</text>
						<text class="theme-content-consult">{{item.consultContent}}</text>
					</view>
				</view>
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
				numberTotext_week:["空","一","二","三","四","五","六","七","八","九","十","十一","十二","十三","十四","十五","十六","十七",],
				numberTotext_day:["空","一","二","三","四","五","六","天"],
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
					success: res => {},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: (complete) => {
						if(complete.data.code==200){
							uni.showToast({
								title:"验证码已发送",
								mask: false,
								duration: 1500
							});
						}else{
							uni.showToast({
								title:complete.data.message,
								mask: false,
								icon:"none",
								duration: 1500
							});
						}
						
					}
				})
			},
			getRecord: function() {
				uni.request({
					url: getApp().globalData.url+'api/reserve/find-my',
					method: 'GET',
					data: {
						"type":1,
						"SID":this.inputID,
						"code2":this.inputcode
					},
					success: res => {
						console.log(res.data.data)
						this.information = res.data.data.content
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

	
	/* #ifdef H5 */
	.content {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
	}
	/* #endif */
	
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
		align-self: flex-start;
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
		flex-direction: column;
		margin-top: 2.5%;
		border-radius: 1%/20%;
	}
	
	.uni-form-item {
		width: 70%;
		display: flex;
		margin-top: 10px;
		margin-left: 18%;
		display: flex;
		flex-direction: row;
	}
	
	.uni-button {
		background-color: #2C405A;
		align-self: flex-end;
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
	
	.item {
		width: 90%;
		/* height: 145px; */
		display: flex;
		margin-left: 5%;
		margin-top: 4%;
		flex-direction: column;
		border: double #bdbdbd;
	}
	.item-top{
		width: 90%;
		height: 40px;
		margin-left: 5%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		border-bottom: #cdcdcd solid;
	}
	.name{
		align-self: center;
		color: #262626;
		font-weight: 700;
		font-size: 20px;
	}
	.status{
		align-self: center;
	}
	.item-main{
		width: 90%;
		/* height: 105px; */
		margin-left: 5%;
		display: flex;
		flex-direction: column;
	}
	.item-sub{
		width: 100%;
		height: 35px;
		display: flex;
		flex-direction: row;
	}
	.theme{
		color: #747474;
		align-self: flex-end;
		width: 25%;
	}
	.theme-content{
		margin-left: 5%;
		align-self: flex-end;
		width: 65%
	}
	.item-sub-consult{
		width: 100%;
		/* height: 35px; */
		display: flex;
		flex-direction: row;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.theme-consult{
		color: #747474;
		align-self: flex-start;
		width: 25%;
	}
	.theme-content-consult{
		margin-left: 5%;
		align-self: flex-end;
		width: 65%
	}
	
</style>
