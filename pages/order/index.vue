<template>
	<view class="orderWrap">
		<!-- 顶部tabbar -->
		<view class="top">
			<!-- 使用scroll-view包裹 -->
            <scroll-view class="scroll-view_H" scroll-x="true" :scroll-into-view="scrollIntoView">
				<view class="line">
					<view class="textWrap">
						<view  
							class="scroll-view-item_H " 
							@click="changeViewAll('all')"
							id="all"
						>
							<view class="text">
								<span>全部</span>
							</view>
						</view>
						<view  
							class="scroll-view-item_H "
							@click="changeViewNp('non-payment')"
							id="non-payment"
						>
							<view class="text">
								<span>待付款</span>
							</view>
						</view>
						<view
							class="scroll-view-item_H "
							@click="changeViewAc('accepting')"
							id="accepting"
						>
							<view class="text">
								<span>受理中</span>
							</view>
						</view>
						<view
							class="scroll-view-item_H "
							@click="changeViewWait('waiting')"
							id="waiting"
						>
							<view class="text">
								<span>待出票</span>
							</view>
						</view>
						<view
							class="scroll-view-item_H "
							@click="changeViewTick('ticketCheck')"
							id="ticketCheck"
						>
							<view class="text">
								<span>已出票</span>
							</view>
						</view>
						<view
							class="scroll-view-item_H "
							@click="changeViewReim('reimburse')"
							id="reimburse"
						>
							<view class="text">
								<span>退款</span>
							</view>
						</view>
						<!-- 小橙条 -->
						<view
							class="orangeScroll"
							:class="move"
						>
							<view class="positSroll">
								
							</view>
						</view>
					</view>
					
				</view>
            </scroll-view>
		</view>
		<!-- 订单列表 -->
		
		<!-- 全部 -->
		<view 
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-if="isAllView"
		>
			全部
		</view>
		
		<!-- 待付款 -->
		<view
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-else-if="isNpView"
		>
			待付款
		</view>
		
		<!-- 受理中 -->
		<view
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-else-if="isAcView"
		>
			受理中
		</view>
		
		<!-- 待出票 -->
		<view
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-else-if="isWaitView"
		>
			待出票
		</view>
		
		<!-- 已出票 -->
		<view
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-else-if="isTickView"
		>
			已出票
		</view>
		
		<!-- 退款 -->
		<view
			class="orderList"
			:class="{addBackg: backgroundShow === true}"
			v-else-if="isReimView"
		>
			退款
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				moves: '',
				hasOrder: false,
				isALL: true,
				isNonpayment: false,
				isAccepting: false,
				isWaiting: false,
				isTicketCheck: false,
				isReimburse: false,
			}
		},
		methods: {
			scroll: function(e) {
				console.log(e)
			},
			// 切换页面和滚动条
			changeViewAll(data) {
				this.moves = data
				if(this.isALL === true) {
					return
				} else {
					this.isALL = true
					this.isNonpayment = false
					this.isAccepting = false
					this.isWaiting = false
					this.isTicketCheck = false
					this.isReimburse = false
				}
			},
			changeViewNp(data) {
				this.moves = data
				if(this.isNonpayment === true) {
					return
				} else {
					this.isALL = false
					this.isNonpayment = true
					this.isAccepting = false
					this.isWaiting = false
					this.isTicketCheck = false
					this.isReimburse = false
				}
			},
			changeViewAc(data) {
				this.moves = data
				if(this.isAccepting === true) {
					return
				} else {
					this.isALL = false
					this.isNonpayment = false
					this.isAccepting = true
					this.isWaiting = false
					this.isTicketCheck = false
					this.isReimburse = false
				}
			},
			changeViewWait(data) {
				this.moves = data
				if(this.isWaiting === true) {
					return
				} else {
					this.isALL = false
					this.isNonpayment = false
					this.isAccepting = false
					this.isWaiting = true
					this.isTicketCheck = false
					this.isReimburse = false
				}
			},
			changeViewTick(data) {
				this.moves = data
				if(this.isTicketCheck === true) {
					return
				} else {
					this.isALL = false
					this.isNonpayment = false
					this.isAccepting = false
					this.isWaiting = false
					this.isTicketCheck = true
					this.isReimburse = false
				}
			},
			changeViewReim(data) {
				this.moves = data
				if(this.isReimburse === true) {
					return
				} else {
					this.isALL = false
					this.isNonpayment = false
					this.isAccepting = false
					this.isWaiting = false
					this.isTicketCheck = false
					this.isReimburse = true
				}
			}
		},
		computed: {
			// 小橙条移动监控
			move() {
				// return this.moves
				if(this.moves == 'all') {
					return ''
				}else if(this.moves == 'non-payment') {
					return 'orangeScroll_nonpayment'
				}else if(this.moves == 'accepting') {
					return 'orangeScroll_accepting'
				}else if(this.moves == 'waiting') {
					return 'orangeScroll_waiting'
				}else if(this.moves == 'ticketCheck') {
					return 'orangeScroll_ticketCheck'
				}else if(this.moves == 'reimburse') {
					return 'orangeScroll_reimburse'
				}
			},
			// tabbar滚动监控
			scrollIntoView() {
				if(this.moves == 'all') {
					return 'all'
				}else if(this.moves == 'non-payment') {
					return 'all'
				}else if(this.moves == 'accepting') {
					return 'non-payment'
				}else if(this.moves == 'waiting') {
					return 'accepting'
				}else if(this.moves == 'ticketCheck') {
					return 'ticketCheck'
				}else if(this.moves == 'reimburse') {
					return 'reimburse'
				}
			},
			// 订单背景显示监控
			backgroundShow() {
				if(this.hasOrder) {
					return false
				} else {
					return true
				}
			},
			// 全部订单列表显示监控
			isAllView() {
				return this.isALL
			},
			// 待付款订单列表显示监控
			isNpView() {
				return this.isNonpayment
			},
			// 受理中订单列表显示监控
			isAcView() {
				return this.isAccepting
			},
			// 待出票订单列表显示监控
			isWaitView() {
				return this.isWaiting
			},
			// 已出票订单列表显示监控
			isTickView() {
				return this.isTicketCheck
			},
			// 退款订单列表显示监控
			isReimView() {
				return this.isReimburse
			},
		},
		onLoad(e) {
			// 小橙条和tabbar也滚动
			this.moves = e.orderid
			console.log(e)
			// 如果存在订单则不显示背景
			if(this.$store.state.orderList.length > 0) {
				this.hasOrder = true
			}
			// 根据orderid跳转到相应的页面
			if(e.orderid === 'all') {
				console.log('无需跳转')
			} else if(e.orderid === 'non-payment') {
				this.isALL = false
				this.isNonpayment = true
				this.isAccepting = false
				this.isWaiting = false
				this.isTicketCheck = false
				this.isReimburse = false
			} else if(e.orderid === 'accepting') {
				this.isALL = false
				this.isNonpayment = false
				this.isAccepting = true
				this.isWaiting = false
				this.isTicketCheck = false
				this.isReimburse = false
			} else if(e.orderid === 'waiting') {
				this.isALL = false
				this.isNonpayment = false
				this.isAccepting = false
				this.isWaiting = true
				this.isTicketCheck = false
				this.isReimburse = false
			} else if(e.orderid === 'ticketCheck') {
				this.isALL = false
				this.isNonpayment = false
				this.isAccepting = false
				this.isWaiting = false
				this.isTicketCheck = true
				this.isReimburse = false
			} else if(e.orderid === 'reimburse') {
				this.isALL = false
				this.isNonpayment = false
				this.isAccepting = false
				this.isWaiting = false
				this.isTicketCheck = false
				this.isReimburse = true
			}
		}
	}
</script>

<style lang="scss">
	// 订单主容器
	.orderWrap {
		// 顶部tabbar
		.top {
			z-index: 999;
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			position: -webkit-sticky;
			/* #endif */
			position: sticky;
			top: var(--window-top);
			width: 100%;
			background-color: #FFF;
			// scroll-view容器
			.scroll-view_H {
				white-space: nowrap;
				width: 100%;
				display: flex;
				.line {
					width: 100%;
					.textWrap {
						position: relative;
						// scroll-view容器里的item公共样式
						.scroll-view-item_H {
							display: inline-block;
							width: 30%;
							height: 90rpx;
							text-align: center;
							// font-size: 36rpx;
							// 文字容器
							.text {
								width: 100%;
								height: 100%;
								line-height: 90rpx;
								// background-color: pink;
							}
						}
						// 小橙条
						.orangeScroll {
							// width: 60rpx;
							// height: 10rpx;
							// background-color: orange;
							// border-radius: 20rpx;  
							// transform: translateX(135%); // 135% 60rpx; 514%; 891%; 1262%;  1638%; 2010%;
							// transition: transform .2s;
							width: 30%;
							height: 20rpx;
							// background-color: pink;
							position: absolute;
							left: 0;
							bottom: 0;
							transition: left 0.1s;
							.positSroll {
								position: absolute;
								top: 50%;
								left: 50%;
								transform: translate(-50%,-50%);
								width: 30%;
								height: 50%;
								background-color: orange;
								border-radius: 20rpx;
							}
						}
					}
					// 移动到待付款
					.orangeScroll_nonpayment {
						left: 30% !important;
					}
					// 移动到受理中
					.orangeScroll_accepting {
						left: 60% !important;
					}
					// 移动到待出票
					.orangeScroll_waiting {
						left: 90% !important;
					}
					// 移动到已出票
					.orangeScroll_ticketCheck {
						left: 120% !important;
					}
					// 移动到退款
					.orangeScroll_reimburse {
						left: 150% !important;
					}
				}
			}
		}
		// 订单列表
		.orderList {
			width: 100%;
		}
		.addBackg {
			height: 1000rpx;
			background-image: url(../../static/img/orderBackg.jpg);
			background-size: 100%;
		}
	}
</style>
