<template>
	<view>
		<view class="head">
			<text>请先登录:</text>
			<view class="uni-form-item">
				<input class="uni-input" @input="onKeyInput" placeholder="请输入学号" />
			</view>
			<button class="uni-button" size="mini" type="primary" @click="getCode">获取验证码</button>
			<view class="uni-form-item">
				<input class="uni-input" @input="onKeyInput2" placeholder="请输入验证码" />
			</view>
			<button class="uni-button" size="mini" type="primary" @click="getRecord">查询</button>
		</view>
		<view class="uni-container">
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
				information: [
					{"weedId": "1",
					"dayId": "1",
					"timeId": "9",
					"advisorName": "大老鼠",
					"status": "已预约"},
					],
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
			},
		}
	}
</script>

<style>
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}

	/* #endif */
	.uni-group {
		display: flex;
		align-items: center;
	}
	.head {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
