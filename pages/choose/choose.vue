<template>
	<view class="content">
		<view class="part1">
			<view class="title">
				一对一学业咨询预约系统
			</view>
			<view class="square">
				<view class="system">
					请选择预约项目
				</view>
				<view class="teacher" @click="toTeacher">
					<text style="font-size: 40rpx;">导师学业咨询</text>
				</view>
				<view class="student" @click="toStudent">
					<text style="font-size: 40rpx;">导生学业咨询</text>
				</view>
			</view>
		</view>
		<view class="part2">
			<view class="bottom_info">
				<text>@2021南方科技大学学生工作部学生学习中心\n如有建议请联系learningc@sustech.edu.cn</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toTeacher() {
				uni.showToast({
					title: "该功能尚未开放，敬请期待",
					mask: false,
					duration: 1500,
					icon:"none"
				});
			},
			toStudent() {
				uni.switchTab({
					url:"../home/home"
				})
				
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
		
	}
	.content {
		/* #ifdef MP-WEIXIN */
		width: 100%;
		/* #endif */
		
		/* #ifdef H5 */
		width: 50%;
		margin-left: 30%;
		margin-right: 30%;
		/* #endif */
		
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		
		.part1 {
			// background-color: #9300dd;
			background-color: #ff5500;
			width: 100%;
			height: 80%;
			
			.title {
				color: white;
				height: 10%;
				width: 80%;
				margin-left: 10%;
				margin-right: 10%;
				margin-top: 10%;
				margin-bottom: 5%;
				font-size: 50rpx;
				text-align: center;
			}
			
			.square {
				color: white;
				height: 60%;
				margin-left: 10%;
				margin-right: 10%;
				margin-bottom: 5%;
				border: #ffffff solid;
				border-radius: 10%;
				display: flex;
				flex-direction: column;
				align-items: center;
				.system {
					margin-top: 20%;
					font-size: 40rpx;
					text-align: center;
				}
				.teacher {
					border: #ffffff solid;
					border-radius: 5%/20%;
					width: 80%;
					height: 20%;
					margin-left: 10%;
					margin-right: 10%;
					margin-top: 10%;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				.student {
					border: #ffffff solid;
					border-radius: 5%/20%;
					width: 80%;
					height: 20%;
					margin-left: 10%;
					margin-right: 10%;
					margin-top: 10%;
					text-align: center;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
			}
		}
		.part2 {
			background-color: #ffffff;
			width: 100%;
			height: 20%;
			.bottom_info {
				margin-top: 10%;
				font-size: 25rpx;
				text-align: center;
				color: #000000;
			}
		}
	}
</style>
