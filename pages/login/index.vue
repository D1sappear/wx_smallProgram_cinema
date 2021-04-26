<template>
	<div class="loginView">
		<div class="container">
			<div class="card">
				<div class="content">
					<h1>登录享受服务</h1>
					<div class="button" @click='getUserInfo'>一键登录</div>					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			getUserInfo() {
				uni.getUserProfile({
					desc: '请求获取您的基本信息',
					success: (res) => {
						console.log(res)
						this.$store.state.userName = res.userInfo.nickName
						this.$store.state.userAvatarUrl = res.userInfo.avatarUrl
						this.$store.state.hasLogin = true
						setTimeout(() => {
							uni.switchTab({
								url:'../tabbar/mine/index'
							})
						},2000)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
	.loginView {
		display: flex;
		  justify-content: center;
		  align-items: center;
		  min-height: 100vh;
		  background-color: #161623;
		  &::before {
			content: '';
			  position: absolute;
			  top: 0;
			  left: 0;
			  height: 100%;
			  width: 100%;
			  background: linear-gradient(#f00, #f0f);
			  clip-path: circle(30% at right 70%);  
		  }
		  &::after {
			  content: '';
			    position: absolute;
			    top: 0;
			    left: 0;
			    height: 100%;
			    width: 100%;
			    background: linear-gradient(#2196f3, #e91e63);
			    clip-path: circle(20% at 10% 10%);
		  }
		  .container {
			z-index: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			max-height: 1200px;
			flex-wrap: wrap;
			position: relative;
			.card {
				position: relative;
				width: 280px;
				height: 400px;
				margin: 30px;
				box-shadow: 20px 20px 50px rgba(0, 0, 0, .5);
				background: rgba(255, 255, 255, .1);
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				border-top: 1px solid rgba(255, 255, 255, 0.5);
				border-left: 1px solid rgba(255, 255, 255, 0.5);
				border-radius: 15px;
				backdrop-filter: blur(5px);
				.content {
					padding: 20px;
					text-align: center;
					h1 {
						color: #fff;
						font-size: 1.5em;
						margin-bottom: 40rpx;
					}
					.button {
						margin: 0 auto;
						background-color: #fff;
						width: 200rpx;
						height: 80rpx;
						border-radius: 50rpx;
						text-align: center;
						line-height: 80rpx;
						font-weight: bold;
					}
				}
			}
		  }
	}
</style>
