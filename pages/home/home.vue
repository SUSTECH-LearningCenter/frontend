<template>
	<view class="content">
		<image class="logo" src="/static/home.png" mode="aspectFit"></image>
		<view class="text">
			<text>学习中心学业咨询预约程序:\n\n</text>
		    <text>学生学业咨询”是由学工部学习中心主办的朋辈学生学习生活咨询项目，这里可以为你提供学业咨询和指导，使你能够有效地掌握知识和技能，形成解决问题的能力，培养良好的学习习惯。欢迎有需要的同学前来预约！</text>
		</view>		
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
	page{
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
		width: 100%;
		height: 100%;
	}

	.logo {
		height: 50%;
		width: 100%;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.text{
		height: 40%;
		width: 60%;
		margin-left: 20%;
		margin-right: 20%;
		margin-top: 10%;
		line-height: 60rpx;
		font-weight: 700;
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
