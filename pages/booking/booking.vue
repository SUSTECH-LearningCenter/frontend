<template>
	<view class="content">
		<view class="head">
			<view class="part1">
				<view>
					<picker @change="bindPickerChange" :value="week_index" :range="array" range-key="name">
						<view style="padding: 20rpx;background-color: white; color: #ff8737;border: solid #ff8737;">
						    {{ array[week_index].name }}
						</view>
					</picker>
				</view>
				<!-- <view>
					<text>点击改周次 </text>
				</view> -->
			</view>
			<view class="part2">
				<view>
					<text style="color: #00CE47;">绿色</text>
					<text>表示可预约</text>
				</view>
				<view>
					<text style="color: #DD524D">红色</text>
					<text>表示已预约</text>
				</view>
			</view>
		</view>

		<timetable class="tb" :timetables="timetables" :available="available" :week_index="week_index+1"></timetable>
	</view>
</template>

<script>
	import Timetable from '@/components/lpx-timetable/lpx-timetable.vue'
	export default {
		onShow: function() {
			this.update_page(parseInt(this.week_index)+1)
		},
		components: {
			Timetable
		},
		data() {
			return {
				// timetables: [
				// 	["张三\n陈狗蛋","李四","","","","","","","","","","","","","",""],
				// 	["王五","","王五","","","","","","","","","","","","",""],
				// 	["","","","","","","","","","","","","","","",""],
				// 	["","","","","","","","","","","","","","","",""],
				// 	["","","","","","","","","","","","","","","",""],
				// 	["","","","","","","","","","","","","","","",""],
				// 	["","","","","","","","","","","","","","","",""],
				// ],
				timetables:[],
				// available: [
				// 	"true","true","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"true","false","true","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"false","false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"false","false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"false","false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"false","false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// 	"false","false","false","false","false","false","false","false","false","false","false","false","false","false","false","false",
				// ],
				available:[],
				array: [{
						name: '第一周'
					}, {
						name: '第二周'
					}, {
						name: '第三周'
					}, {
						name: '第四周'
					}, {
						name: '第五周'
					},
					{
						name: '第六周'
					}, {
						name: '第七周'
					}, {
						name: '第八周'
					}, {
						name: '第九周'
					}, {
						name: '第十周'
					},
					{
						name: '第十一周'
					}, {
						name: '第十二周'
					}, {
						name: '第十三周'
					}, {
						name: '第十四周'
					}, {
						name: '第十五周'
					},
					{
						name: '第十六周'
					}, {
						name: '第十七周'
					}, {
						name: '第十八周'
					}, {
						name: '第十九周'
					}, {
						name: '第二十周'
					}
				],
				week_index: 2
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.week_index = parseInt(e.detail.value)
				this.update_page(parseInt(e.detail.value)+1)

			},
			update_page: function(week) {
				uni.request({
					url: getApp().globalData.url+'api/main/get-by-week2',
					method: 'GET',
					data: {
						"weekId": week,
					},
					success: res => {
						this.timetables = res.data
						// console.log(res.data)
					},

					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				});
				
				uni.request({
					url: getApp().globalData.url+'api/main/get-by-week3',
					method: 'GET',
					data: {
						"weekId": week,
					},
					success: res => {
						this.available = res.data
						// console.log(res.data)
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {
					}
				});
			
			}
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
		width: 70%;
		margin-left: 15%;
		margin-right: 15%;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.content {
		width: 	100%;
	}
	/* #endif */
	
	.tb {
		opacity: 0.9;
	}
	
	.head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		opacity: 0.8;
	}

	.part1 {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.part2 {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-end;
	}
</style>
