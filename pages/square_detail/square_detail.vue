<template>
	<view class="container">
		<scroll-view class="list"scroll-y="true" enable-flex="true">
			<view class="item"v-for="(item,index) in information">
				<!-- #ifdef MP-WEIXIN -->
				<view class="image-container">
					<image class="image" src="~@/static/background.jpg" mode="scaleToFill"></image>
				</view>
				<view class="info-container">
					<view class="name-good">
						<view class="name">{{item.advisorName}}</view>						
						<view class="prof">专业：{{item.more.prof}}</view>
					</view>
					<view class="good">擅长：{{item.more.prefer}}</view>
					<view class="detail">{{item.more.intro}}</view>
					<view class="other">
						<block  v-if="item.status=='registering'">
						    <text class="text" style="color: #2087B2;">可预约</text>
						</block>
						<block v-else>
							<text class="text" style="color: #DD524D;">不可预约</text>
						</block>
						<button class="book" @click="book(item.advisorId)">预约</button>
					</view>
				</view>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view class="image-container">
					<image class="image" src="../../static/background.jpg" mode="scaleToFill"></image>
				</view>
				<view class="info-container">
					<view class="name-good">
						<view class="name-button">
							<view class="name">{{item.advisorName}}</view>
							<button class="book" @click="book(item.advisorId)">预约</button>
						</view>						
						<view class="good">擅长：{{item.more.prefer}}</view>
					</view>
					<view class="prof">专业：{{item.more.prof}}</view>
					<view class="detail">{{item.more.intro}}</view>
				</view>
				<!-- #endif -->
			</view>
		</scroll-view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loading: false,

				week: 0,
				day: 0,
				time: 0,
				information: [],
				inputID: '',
				inputcode:'',
			}
		},
		onLoad: function(option) {
			this.week = parseInt(option.week)
			console.log(this.week)
			this.day = parseInt(option.day) + 1
			this.time = parseInt(option.time)
			uni.request({
				url: getApp().globalData.url+'api/main/get-by-square',
				method: 'GET',
				data: {
					"weekId": this.week,
					"dayId": this.day,
					"timeId": this.time + 9,
				},
				success: res => {
					var temp = res.data.content
					var m = {
						"avatar": "",
						"prof": "",
						"prefer": "",
						"intro": ""
					}
					for (var i = 0; i < temp.length; i++) {
						temp[i].more = m
					}
					this.information = temp
					this.update_data()
					console.log(this.information)
				},
				fail: (e) => {
					console.log("getMachineNum fail:" + JSON.stringify(e));
				},
				complete: () => {}

			});
		},
		methods: {
			update_data: function() {
				var length = this.information.length
				for (var i = 0; i < length; i++) {
					this.find_data(i)
				}
			},
			find_data: function(i) {
				uni.request({
					url: getApp().globalData.url+'api/main/tutor',
					method: 'GET',
					data: {
						"SID": this.information[i].advisorId,
					},
					success: res => {
						this.information[i].more = res.data
						console.log(this.information)
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}

				})
			},
			book: function(arg) {
				uni.navigateTo({
				    url: "../booking_detail/booking_detail?tutorID="+arg
				});
			},
			
		}
	}
</script>

<style>
	
	page {
		padding-top: 85px;
		width: 100%;
		height: 100%;
		/* #ifdef H5 */
		background-image: url('~@/static/background.jpg');
		/* #endif */
	}

	.container {
		width: 100%;
		height: 100%;
	}
	
	.list {
		width: 100%;
		height: 100%;
	}
	
	.item {
		width: 100%;
		height: 500rpx;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: #888888 solid;
	}
	.image-container {
		width: 30%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.image {
		margin-top: 5%;
		width: 60%;
		height: 20%;
		margin-left: 20%;
		border-radius: 50%;
	}
	
	.info-container {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.name-good {
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: row;
		border-bottom: #b3b3b3 solid;
	}
	.name {
		width: 30%;
		height: 100%;
		font-size: 30rpx;
		/* color: #636363; */
		color: #2C405A;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.prof {
		width: 70%;
		height: 100%;
		color: #8c8c8c;
		font-size: smaller;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.good {
		width: 100%;		
		height: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #8c8c8c;
		font-size: smaller;
	}
	.detail {
		width: 100%;
		height: 40%;
		margin-top: 1%;
		color: #7a7a7a;
		font-size: smaller;
	}
	.other {
		width: 100%;
		height: 20%;
		display: flex;
		flex-direction: row;
	}
	.text {
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: smaller;
	}
	.book {
		width: 20%;
		height: 50%;
		margin-top: 5%;
		font-size: small;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #2087b2;
		color: white;
	}
	
	/*#ifdef H5*/
	.list {
		width: 80%;
		height: 100%;
		margin-left: 10%;
		margin-right: 10%;
	}
	
	.item {
		width: 100%;
		height: 500rpx;
		display: flex;
		flex-direction: row;
		background-color: white;
		border-bottom: #888888 solid;
	}
	.image-container {
		width: 30%;
		height: 100%;
		display: flex;
		flex-direction: row;
	}
	.image {
		margin-top: 5%;
		width: 60%;
		height: 70%;
		margin-left: 20%;
		border-radius: 50%;
	}
	
	.info-container {
		width: 70%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.name-good {
		width: 100%;
		height: 50%;
		display: flex;
		flex-direction: column;
	}
	.name-button {
		width: 100%;
		height: 30%;
		display: flex;
		flex-direction: row;
	}
	.name {
		width: 70%;
		height: 100%;
		font-size: 80rpx;
		color: #636363;
	}
	.book {
		width: 10%;
		height: 70%;
		font-size: small;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-self: center;
		background-color: #2087b2;
		color: white;
	}
	.good {
		width: 100%;		
		height: 66%;
		margin-top: 2%;
		margin-bottom: 2%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: #b3b3b3 solid;
		color: #8c8c8c;
	}
	.prof {
		width: 100%;
		height: 10%;
		color: #8c8c8c;
	}
	.detail {
		width: 100%;
		height: 40%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: #7a7a7a;
	}
	/*#endif*/
	
</style>
