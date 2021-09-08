<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="50" align="center">周数</uni-th>
					<uni-th width="50" align="center">星期</uni-th>
					<uni-th width="50" align="center">开始时间</uni-th>
					<uni-th width="50" align="center">导生姓名</uni-th>
					<uni-th width="200" align="center">预约状态</uni-th>	
				</uni-tr>
				<uni-tr height="100" v-for="(item, index) in information" :key="index">
					<uni-td align="center">{{ item.week }}</uni-td>
					<uni-td align="center">{{ item.day }}</uni-td>
					<uni-td align="center"> {{ item.time }}</uni-td>
					<uni-td align="center">{{ item.name }}</uni-td>
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

				week: 0,
				day: 0,
				time: 0,
				information: [
					{"week": "1",
					"day": "1",
					"time": "9",
					"name": "大老鼠",
					"status": "已预约"},
					],
			}
		},
		onLoad: function() {
			
			// uni.request({
			// 	url: 'http://learningcenter.sustech.edu.cn:1000/api/main/get-by-square',
			// 	method: 'GET',
			// 	data: {
			// 		"weekId": this.week,
			// 		"dayId": this.day,
			// 		"timeId": this.time + 9,
			// 	},
			// 	success: res => {
			// 		// this.information = res.data.content
			// 	},
			// 	fail: (e) => {
			// 		console.log("getMachineNum fail:" + JSON.stringify(e));
			// 	},
			// 	complete: () => {}

			// });
		},
		methods: {

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
</style>
