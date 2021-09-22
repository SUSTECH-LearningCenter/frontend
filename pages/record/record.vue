<template>
	<view class="content">
		<view class="head">
			<text class="text">请先登录!</text>
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
			<!-- <view class="my_infor">
				<text>本学期预约次数：1</text>
				<text style="margin-left:5%;">本学期失约次数：0</text>
			</view> -->
			<text style ="margin-top:5%">我的预约</text>
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="10" align="center">周数</uni-th>
					<uni-th width="10" align="center">星期</uni-th>
					<uni-th width="10" align="center">开始时间</uni-th>
					<uni-th width="10" align="center">导生姓名</uni-th>
					<uni-th width="10" align="center">预约状态</uni-th>	
				</uni-tr>
				<uni-tr height="100" v-for="(item, index) in information" :key="index">
					<uni-td align="center">{{ item.weedId }}</uni-td>
					<uni-td align="center">{{ item.dayId }}</uni-td>
					<uni-td align="center"> {{ item.timeId }}</uni-td>
					<uni-td align="center">{{ item.advisorName }}</uni-td>
					<uni-td align="center">{{ item.status }}</uni-td>
				</uni-tr>
			</uni-table>
			
			<text>我的任务</text>
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="10" align="center">周数</uni-th>
					<uni-th width="10" align="center">星期</uni-th>
					<uni-th width="10" align="center">开始时间</uni-th>
					<uni-th width="10" align="center">预约者姓名</uni-th>
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
					url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/send-code',
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
					url: 'http://learningcenter.sustech.edu.cn:1000/api/reserve/find-my',
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
		/* #endif */
	}

	
	/* #ifdef H5 */
	.content {
		width: 70%;
		margin-left: 15%;
		margin-right: 15%;
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
		color: #ff55ff;
	}
	
	.input {
		background-color: rgba(255,255,255,0.9);
		border-radius: 5%/10%;
		height: auto;
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
</style>
