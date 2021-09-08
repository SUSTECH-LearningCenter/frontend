<template>
	<view>
		<view class="head">
			<view class="part1">
				<view>
					<picker @change="bindPickerChange" :value="week_index" :range="array" range-key="name">
						<view style="padding: 20rpx;background-color: white;">{{ array[week_index].name }}</view>
					</picker>
				</view>
				<view>
					<text><——点击改周次 </text>
				</view>
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

		<timetable :timetables="timetables" :available="available":week_index="week_index+1"></timetable>
	</view>
</template>

<script>
	import Timetable from '@/components/lpx-timetable/lpx-timetable.vue'
	export default {
		onShow: function() {
			this.update_page(1)
		},
		components: {
			Timetable
		},
		data() {
			return {
				timetables: [],
				available: [],
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
				week_index: 0,
			}
		},
		methods: {
			bindPickerChange: function(e) {
				this.week_index = e.detail.value;
				this.update_page(e.detail.value+1)

			},
			update_page: function(week) {
				uni.request({
					url: 'http://learningcenter.sustech.edu.cn:1000/api/main/get-by-week2',
					method: 'GET',
					data: {
						"weekId": week,
					},
					success: res => {
						this.timetables = res.data
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				});
				
				uni.request({
					url: 'http://learningcenter.sustech.edu.cn:1000/api/main/get-by-week3',
					method: 'GET',
					data: {
						"weekId": week,
					},
					success: res => {
						this.available = res.data
					},
					fail: (e) => {
						console.log("getMachineNum fail:" + JSON.stringify(e));
					},
					complete: () => {}
				});
			
			}
		}
	}
</script>

<style>
	.head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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
