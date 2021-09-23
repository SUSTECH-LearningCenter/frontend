<script>
	export default {
		globalData:{
			url:"http://loregit.com:1000/"
		},
		onLaunch: function() {
			let standard_time = "2021/09/13 12:09:00"
			let nowTime = new Date().getTime();
			let preTime = new Date(standard_time).getTime()
			console.log(nowTime-preTime)
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
