<template>
	<view class="wrap">
		<image class="img" src="http://api.jisuapi.com/movie/upload/movie/15/141461.jpg"></image>
		<view class="button" @click="switchToHome">
			<span>立即前往</span>
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
		computed: {
			// 正在加载的图片
			// loadingMovieImg() {
			// 	console.log(this.$store.state.nowPlayingList)
			// 	return this.$store.state.nowPlayingList
			// }
		},
		methods: {
			switchToHome() {
				console.log('跳转到首页')
				uni.switchTab({
					url: '../tabbar/home/index',
					success(res) {
						// console.log(res)
					}
				})
			}
		},
		onReady() {
			// 加载页获取用户所在城市
			this.$store.dispatch('getCity')
			// 加载页获取用户信息
			// this.$store.dispatch('getUserInfo')
		}
	}
</script>

<style lang="scss">
	body {
		width: 100%;
		height: 100%;
		.wrap {
			width: 100%;
			height: 100%;
			.img {
				width: 100%;
				height: 100%;
			}
			.button {
				z-index:  999;;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%,425%);
				width: 200rpx;
				height: 80rpx;
				background-color: rgba(255,255,255,.4);
				border-radius: 8rpx;
				box-shadow: 3rpx 3rpx rgba(140,140,140,.8),-2rpx 3rpx rgba(140,140,140,.8),0rpx -3rpx rgba(140,140,140,.8),0rpx 5rpx rgba(140,140,140,.8)
				;
				text-align: center;
				span {
					line-height: 80rpx;
					font-family:sans-serif;
					font-size: 40rpx;
					font-weight: bold;
					color: rgba(0,0,0,.5)
				}
			}
		}
	}
</style>
