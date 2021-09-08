<template>
	<view>
		<view class="uni-container">
			<uni-table ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
				<uni-tr>
					<uni-th width="100" align="center">头像</uni-th>
					<uni-th width="50" align="center">姓名</uni-th>
					<uni-th width="50" align="center">专业</uni-th>
					<uni-th width="50" align="center">擅长领域</uni-th>
					<uni-th width="200" align="center">简介</uni-th>
					<uni-th width="50" align="center">状态</uni-th>
					<uni-th width="100" align="center">预约</uni-th>
				</uni-tr>
				<uni-tr height="100" v-for="(item, index) in information" :key="index">
					<uni-td>
						<view width="100" height="100">
							<image :src="item.avatar"></image>
						</view>
					</uni-td>
					<uni-td align="center">{{ item.advisorName }}</uni-td>
					<uni-td align="center">{{ item.prof }}</uni-td>
					<uni-td align="center"> {{ item.prefer }}</uni-td>
					<uni-td align="center">{{ item.intro }}</uni-td>
					<uni-td align="center">{{ item.status }}</uni-td>
					<uni-td>
						<view class="uni-group">
							<button class="uni-button" size="mini" type="primary">预约</button>
						</view>
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
				//from the record
				information: [
					{
					"avatar": "https://img2.baidu.com/it/u=3355464299,584008140&fm=26&fmt=auto&gp=0.jpg",
					"advisorName": "绿洲",
					"prof": "副首领",
					"prefer": "雷龙一字划",
					"intro": "部落冲突半年老玩家",
					"status": "已预约"
				}, 
				],
				//from every tutor information
				more_info:[],
			}
		},
		onLoad: function(option) {
			this.week = parseInt(option.week)
			this.day = parseInt(option.day) + 1
			this.time = parseInt(option.time)
			uni.request({
				url: 'http://learningcenter.sustech.edu.cn:1000/api/main/get-by-square',
				method: 'GET',
				data: {
					"weekId": this.week,
					"dayId": this.day,
					"timeId": this.time + 9,
				},
				success: res => {
					// this.information = res.data.content
					console.log(this.information)
					// this.update_data()
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
				for(var i = 0;i<length;i++){
					uni.request({
						url: 'http://learningcenter.sustech.edu.cn:1000/api/main/tutor',
						method: 'GET',
						data: {
							"SID": this.information[i].advisorId,
						},
						success: res => {
							console.log(res.data)
							this.more_info[i]= res.data
						},
						fail: (e) => {
							console.log("getMachineNum fail:" + JSON.stringify(e));
						},
						complete: () => {}
					
					});
				}
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
</style>
