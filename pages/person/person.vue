<template>
	<view class="container">
		<view class="userinfo">
			<image bindtap="bindViewTap" class="userinfo-avatar" src="~@/static/background.jpg" background-size="cover">
			</image>
			<text class="userinfo-nickname">用户</text>
		</view>
		<view class="list-item" bindtap="" @click="back">
			<text class="list-name">我的预约</text>
			<!-- #ifdef MP-WEIXIN -->
			<image class="list-icon" src="~@/static/chevron.png"></image>
			<!-- #endif -->
		</view>
		<view class="list-item" bindtap="" @click="back">
			<text class="list-name">我的任务</text>
			<!-- #ifdef MP-WEIXIN -->
			<image class="list-icon" src="~@/static/chevron.png"></image>
			<!-- #endif -->
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<view class="list-item" bindtap="">
			<text class="list-name">预约方式</text>
			<image class="list-icon" src="~@/static/chevron.png"></image>
		</view>
		<view class="list-item" bindtap="">
			<text class="list-name">软件说明</text>
			<image class="list-icon" src="~@/static/chevron.png"></image>
		</view>
		<view class="list-item" bindtap="">
			<text class="list-name">用户反馈</text>
			<image class="list-icon" src="~@/static/chevron.png"></image>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			back() {
				uni.navigateTo({
					url: "../record/record"
				})
			},
			// back2(){
			// 	uni.navigateTo({
			// 		url:"../task/task"
			// 	})
			// 	}

		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
	}

	.userinfo-avatar {
		width: 168rpx;
		height: 168rpx;
		margin-top: 124rpx;
		border-radius: 50%;
	}

	.userinfo-nickname {
		margin-top: 30rpx;
		color: #585858;
		font-family: Songti SC;
		font-size: 32rpx;
	}

	.list-item {
		display: flex;
		flex-direction: row;
		height: 100rpx;
		width: 100%;
		background-color: #fff;
		border-bottom: 1rpx solid #E5E5E5;
	}

	.list-name {
		margin-left: 32rpx;
		line-height: 100rpx;
		font-family: PingFang SC;
		font-size: 34rpx;
		color: #000;

	}

	.list-icon {
		margin-top: 30rpx;
		margin-left: 538rpx;
		width: 16rpx;
		height: 26rpx;
	}
</style>
