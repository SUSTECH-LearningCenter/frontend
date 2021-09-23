<template>

	<view class="content" >
		<!-- <image class="logo" src="/static/back.png" mode="heightFix"></image> -->
		<!-- #ifdef H5 -->
		<view class="text_all">
			<text class="text1">学习中心学业咨询预约程序\n\n</text>
			<text class="text2">“学生学业咨询”是由学工部学习中心主办的朋辈学生学习生活咨询项目，这里可以为你提供学业咨询和指导，使你能够有效地掌握知识和技能，形成解决问题的能力，培养良好的学习习惯。欢迎有需要的同学前来预约！</text>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class = "wx_picture">
			<image style = "width: 100%;height: 100%;"src="../../static/new_home.png" mode="scaleToFill"></image>
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

		}
	}
</script>

<style>
	
	/* #ifdef H5 */
	page {
		height: 100%;
		width: 100%;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		width: 100%;
		height: 100%;
		background-image: url('~@/static/background.jpg');
	}
	
	.logo {
		height: 60%;
		width: 60%;
		margin-top: 10%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
	}
	
	.text_all {
		height: 30%;
		width: 60%;
		margin-left: 20%;
		margin-right: 20%;
		line-height: 60rpx;
		font-weight: 700;
		display: flex;
		flex-direction: column;
	}
	
	.text1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 80rpx;
		margin-bottom: 100rpx;
		margin-top: 50rpx;
		text-align: center;
	}
	
	.text2 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 40rpx;
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	page {
		height: 100%;
		width: 100%;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center; 
		justify-content: center;
		width: 100%;
		height: 100%;
		/* background-color: #94db6d; */
		/* background-image: url('~@/static/background.jpg');*/
	}
	
	.logo {
		height: 60%;
		width: 60%;
		margin-top: 10%;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
	}
	
	.text_all {
		height: 70%;
		width: 100%;
		line-height: 60rpx;
		font-weight: 700;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		/* color: white; */
		
	}
	
	.text1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 50rpx;
		margin-bottom: 100rpx;
	}
	
	.text2 {
		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: column;
		font-size: 40rpx;
	}
	
	.wx_picture {
		width: 100%;
		height: 100%;
	}
	/* #endif */
	

</style>
