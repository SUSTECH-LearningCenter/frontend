<template>
	<view class="content">
		<image class="logo" src="/static/mylogo.png"></image>
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

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
	}

	.logo {
		height: 400rpx;
		width: 400rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #00ff7f;
	}
</style>
