<template>
	<view class="container">
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<!-- #ifdef H5 -->
					<uni-th width="15" align="center">头像</uni-th>
					<!-- #endif -->
					<uni-th width="5" align="center">姓名</uni-th>
					<uni-th width="5" align="center">专业</uni-th>
					<uni-th width="10" align="center">擅长领域</uni-th>
					<uni-th width="50" align="center">简介</uni-th>
					<uni-th width="5" align="center">状态</uni-th>
					<uni-th width="10" align="center">预约</uni-th>
				</uni-tr>
				<uni-tr height="100" v-for="(item, index) in information" :key="index">
					<!-- #ifdef H5 -->
					<uni-td align="center" height="100">
						<image :src="item.more.avatar" mode="scaleToFill" style="width: 100%;height: 100%;"></image>
					</uni-td>
					<!-- #endif -->
					<uni-td align="center">{{ item.advisorName }}</uni-td>
					<uni-td align="center">{{ item.more.prof }}</uni-td>
					<uni-td align="center"> {{ item.more.prefer }}</uni-td>
					<uni-td align="center">{{ item.more.intro }}</uni-td>
					<uni-td v-if="item.status==='registering'">
						可预约
					</uni-td>
					<uni-td v-else>
						已预约
					</uni-td>
					<uni-td>
						<view v-if="item.status==='registering'">
							<view class="uni-group">
								<button class="uni-button" style="background-color: #003e00; color: white;" size="mini" type="primary" @click="book(item.id)">预约</button>
							</view>
						</view>
						<view v-else></view>
					</uni-td>
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
	
	/* #ifdef H5 */
	.uni-container {
		margin-top: 5%;
		width: 70%;
		margin-left: 15%;
		margin-right: 15%;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.uni-container {
		margin-top: 5%;
		width: 100%;
	}
	/* #endif */
	
	.uni-group {
		display: flex;
		align-items: center;
	}
</style>
