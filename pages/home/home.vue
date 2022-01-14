<template>

	<view class="content">

		<!-- <image class="logo" src="/static/back.png" mode="heightFix"></image> -->
		<!-- #ifdef H5 -->
		<view class="text_all">
			<text class="text1">学习中心学业咨询预约程序\n</text>
			<text
				class="text2">“学生学业咨询”是由学工部学习中心主办的朋辈学生学习生活咨询项目，这里可以为你提供学业咨询和指导，使你能够有效地掌握知识和技能，形成解决问题的能力，培养良好的学习习惯。欢迎有需要的同学前来预约！</text>
			<view class="wx_button2" @click="back">
				<!--<button type="default"class="my_button"> 返回选择界面</button>-->
				<a class="backUrl2"><u>导师学业咨询请返回</u></a>
			</view>
		</view>

		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view v-if=" who== 0" class="wx_picture">
			<image style="z-index: -1; width: 100%;height: 100%;" src="/static/home_student.jpg" mode="scaleToFill">

			</image>
		</view>
		<view v-else class="wx_picture">
			<image style="z-index: -1; width: 100%;height: 100%;" src="/static/home_teacher.jpg" mode="scaleToFill">

			</image>
		</view>
		<view class="wx_button" @click="back">
			<!-- <button type="default"class="my_button"> 返回选择界面</button> -->
			<view v-if=" who== 0" class="backUrl"><u>导师学业咨询请返回</u></view>
			<view v-else class="backUrl"><u>导生学业咨询请返回</u></view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
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
		data() {
			return {
				who: getApp().globalData.who
			}
		},
		onLoad() {

		},
		methods: {
			back() {
				uni.redirectTo({
					url: "../choose/choose"
				})
			}
		}
	}
</script>

<style lang="scss">
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
		background-size: cover;
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
		height: 50%;
		width: 60%;
		margin-left: 20%;
		margin-right: 20%;
		line-height: 60rpx;
		font-weight: 700;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.text1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 40rpx;
		margin-bottom: 100rpx;
		margin-top: 0rpx;
		text-align: center;
	}

	.text2 {
		// display: flex;
		// flex-direction: column;
		// justify-content: center;
		font-size: 30rpx;
	}

	.wx_button {
		margin-top: 0%;
		width: 30%;
		height: 10%;
		border-radius: 15%;
		margin-bottom: 0%;

		.my_button {
			background-color: #1c83ae;
			color: #ffffff;
			font-size: 50%;
		}
	}

	.backUrl2 {
		color: #1b1b1b;
		font-size: 30rpx;
		text-decoration: underline;
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
		margin-bottom: 60rpx;
	}

	.text2 {
		margin-left: 15%;
		margin-right: 15%;
		display: flex;
		flex-direction: column;
		font-size: 30rpx;
	}

	.wx_picture {
		width: 100%;
		height: 95%;
	}

	.wx_button {
		width: 30%;
		height: 1%;
		border: #ffffff solid;
		border-radius: 50%;
		margin-bottom: 3%;

		.my_button {
			background-color: #00a000;
			color: #ffffff;
			font-size: xx-small;
		}
	}

	.backUrl {
		color: #a2a2a2;
		font-size: 25rpx;
		text-decoration: underline;

	}

	/* #endif */
</style>
