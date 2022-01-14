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
				<view>
					<text> {{'<'}}---点此修改周次 </text>
				</view>
			</view>
			<view class="part2">
				<view>
					<text style="color: #00CE47;">绿色</text>
					<text>表示可以预约</text>
				</view>
				<view>
					<text style="color: #DD524D">红色</text>
					<text>表示不可预约</text>
				</view>
			</view>
		</view>

		<timetable class="tb" :timetables="timetables" :available="available" :week_index="week_index" :week="week"></timetable>
	</view>
</template>

<script>
	import Timetable from '@/components/lpx-timetable/lpx-timetable.vue'
	export default {
		onShareAppMessage(res) {
			if (res.from === 'button') { // 来自页面内分享按钮
				console.log(res.target)
			}
			return {
				title: '南科大学业咨询预约系统',
				imageUrl:'/static/share.jpg',
				path: '/pages/choose/choose'
			}
		},
		onShow: function() {
			
			uni.request({
				url: getApp().globalData.url+'api/main/get-week-number',
				method: 'GET',
				data: {
					"null": 0,
				},
				success: res => {
					this.week_index = res.data.message
					// console.log(res.data.message)
					this.update_page(parseInt(this.week_index))
				},
				fail: (e) => {
					console.log("getMachineNum fail:" + JSON.stringify(e));
				},
				complete: () => {
				}
			});
			
			
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
				week:['一\n', '二\n', '三\n', '四\n', '五\n', '六\n', '七\n'],
				array: [{
						name: '国庆周'
					},{
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
				week_index: 0
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.week_index = parseInt(e.detail.value)
				this.update_page(parseInt(e.detail.value))

			},
			update_page: function(week) {
				uni.request({
					url: getApp().globalData.url+'api/main/get-by-new-week2',
					method: 'GET',
					data: {
						"weekId": week,
						"type":getApp().globalData.who
					},
					success: res => {
						this.timetables = res.data
						console.log(res.data)
						
					},
				
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				});
				
				uni.request({
					url: getApp().globalData.url+'api/main/get-by-new-week3',
					method: 'GET',
					data: {
						"weekId": week,
						"type":getApp().globalData.who
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
				
				uni.request({
					url: getApp().globalData.url+'api/main/wd2date2',
					method: 'GET',
					data: {
						"weekId": week,
					},
					success: res => {
						this.week = res.data;
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
		margin-left: 3%;
		margin-right: 3%;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.content {
		width: 	100%;
	}
	/* #endif */
	
	.tb {
		opacity: 0.9;
		width:135%;
		align-items: center;
		margin-left: 0px;
	}
	
	.head {
		width: 100%;
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
		/* justify-content: flex-start;
		align-items: flex-end; */
		
		/* margin-right:100px; */
	}
</style>
