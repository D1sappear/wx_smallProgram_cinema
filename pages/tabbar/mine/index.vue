<template>
	<view class="mine">
		<!-- 头像和用户名 -->
		<view class="top">
			<image :src="avatarUrl " mode=""></image>
			<view class="userName">
				<span>{{userName}}</span>
			</view>
		</view>
		<!-- 订单容器 -->
		<view class="order">
			<view class="wrap">
				<view class="textButton">
					<view class="text">
						<span>我的订单</span>
					</view>
					<view class="button">
						<view 
							class="bottonText"
							@click="toOrder('all')"
						>
							<span>全部订单</span>
						</view>
						<view class="icon">
							<i class="iconfont icon-right"></i>
						</view>
					</view>
				</view>
				<view class="iconButton">
					<view 
						class="buttonItem" 
						v-for="(item,index) in iconList"
						:key="index"
						@click="toOrder(item.id)"
					>
						<view class="icon">
							<image :src="item.src" mode="aspectFit"></image>
						</view>
						<view class="text">
							<span>{{item.text}}</span>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 建议反馈 -->
		<view class="feedback" @click="toFeedBack">
			<view class="feedbackWrap">
				<view class="recommendationIcon">
					<i class="iconfont icon-jianyi"></i>
				</view>
				<view class="text">
					<span>建议反馈</span>
				</view>
				<view class="goIcon">
					<i class="iconfont icon-right"></i>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				iconList: [
					{src: require('@/static/orderButton/non-payment.png'),text: "待付款",id: 'non-payment'},
					{src: require('@/static/orderButton/accepting.png'),text: "受理中",id: 'accepting'},
					{src: require('@/static/orderButton/waiting.png'),text: "待出票",id: 'waiting'},
					{src: require('@/static/orderButton/ticketCheck.png'),text: " 已出票",id: 'ticketCheck'},
					{src: require('@/static/orderButton/reimburse.png'),text: " 退款",id: 'reimburse'},
				],
				defaultAvatarUrl: {src:require('@/static/img/defaultAvatar.png')},
				defaultUserName: '请登录'
			}
		},
		computed: {
			// 用户名
			userName() {
				// console.log(this.$store.state.userName)
				if(this.$store.state.userName) {
					return this.$store.state.userName
				} else {
					return this.defaultUserName
				}
			},
			// 用户头像
			avatarUrl() {
				// console.log(this.$store.state.userAvatarUrl)
				if(this.$store.state.userAvatarUrl) {
					return this.$store.state.userAvatarUrl
				} else {
					return this.defaultAvatarUrl.src
				}
			},
		},
		methods: {
			// 跳转到订单页，带参数
			toOrder(orderType) {
				console.log(orderType)
				uni.navigateTo({
					url: '../../order/index?orderid=' + orderType
				})
			},
			// 跳转到建议页
			toFeedBack() {
				console.log('跳转到建议页')
				uni.navigateTo({
					url: '../../feedBack/index'
				})
			}
		},
		onTabItemTap (e) {
			// console.log(e)
		},
		onReady() {
			// 加载页获取用户信息
			this.$store.dispatch('getUserInfo')
		}
	}
</script>

<style lang="scss">
	body,html {
		overflow: hidden;
	}
	// 主容器
	.mine {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		// justify-content: center;
		width: 100%;
		height: 2000rpx;
		background: linear-gradient(#FFF1E6 0%, #F7F7F7 40%);
		.top {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			// justify-content: center;
			width: 100%;
			height: 200rpx;
			// background-color: red;
			position: relative;
			image {
				width: 20%;
				height: 70%;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-230%,-50%);
			}
			.userName {
				font-weight: bold;
				width: 20%;
				height: 50%;
				line-height: 100rpx;
				text-align: center;
				// background-color: yellow;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-100%,-50%);
			}
		}
		.order {
			width: 100%;
			height: 300rpx;
			// background-color: blue;
			position: relative;
			.wrap {
				width: 96%;
				height: 96%;
				background-color: #FFF;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				border-radius: 15rpx;
				.textButton {
					width: 100%;
					height: 50%;
					// background-color: red;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					position: relative;
					.text {
						line-height: 144rpx;
						font-size: 42rpx;
						font-weight: bold;
						position: absolute;
						left: 5%;
					}
					.button {
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						line-height: 144rpx;
						font-size: 35rpx;
						position: absolute;
						right: 6%;
						color: #A2A2A2;
						.icon {
							margin-left: 10rpx;
							font-weight: bold;
						}
					}
				}
				.iconButton {
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					width: 100%;
					height: 50%;
					// background-color: blue;
					.buttonItem {
						width: 18%;
						height: 100%;
						// background: yellow;
						margin-left: 12rpx;
						.icon {
							width: 100%;
							height: 55%;
							// background-color: pink;
							position: relative;
							image {
								width: 70%;
								height: 70%;
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%,-50%);
							}
						}
						.text {
							text-align: center;
							color: #868686;
						}
					}
				}
			}
		}
		.feedback {
			width: 100%;
			height: 200rpx;
			// background-color: pink;
			position: relative;
			.feedbackWrap {
				width: 96%;
				height: 80%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				background-color: #FFF;
				border-radius: 15rpx;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				.recommendationIcon {
					width: 20%;
					height: 100%;
					line-height: 160rpx;
					// background-color: pink;
					text-align: center;
					.icon-jianyi {
						font-size: 50rpx;
						color: #7E7E7E;
					}
				}
				.text {
					width: 30%;
					height: 100%;
					line-height: 145rpx;
					// background-color: pink;
					text-align: center;
					font-size: 35rpx;
					font-weight: bold;
				}
				.goIcon {
					width: 30%;
					height: 100%;
					line-height: 160rpx;
					// background-color: pink;
					text-align: center;
					position: absolute;
					right: -6%;
					.icon-right {
						font-size: 45rpx;
						font-weight: bold;
						color: #7E7E7E;
					}
				}
			}
		}
	}
</style>
