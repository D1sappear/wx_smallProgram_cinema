<template>
	<view class="home scroll-view-item">
		<!-- 页面上方搜索框 -->
		<view class="searchInput">
			<view class="currentCity">
				<view class="cityText">
					<span>{{city}}</span>
				</view>
				<view class="cityIcon">
					<i class="iconfont icon-sanjiao"></i>
				</view>
			</view>
			<view class="input">
				<view class="inputIcon">
					<i class="iconfont icon-search1"></i>
				</view>
				<view class="inputText">
					<view class="navigateToSearch" @click="toFindMovie">
						点此进行搜索
					</view>
				</view>
			</view>
		</view>
		<!-- 搜索框下方轮播图 -->
		<view class="swiper">
			<swiper indicator-dots 
					indicator-color = "rgba(0, 0, 0, .3)"
					indicator-active-color = "orange"
					autoplay
					interval = "2000"
					circular = true
					easing-function = "easeInOutCubic"
			>
				<swiper-item v-for="(item,index) in list" 
							:key="index"
				>
					<image :src="item.pic" mode="scaleToFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播图下方热映电影 -->
		<view class="tabbar">
			<view 
				class="titleButton"
				
			>
				<view class="button">
					<view
						class="nowPlaying"
						:class="nowP === true? 'tab_active' : '' "
						@click="toNowPlay"
					>
						<span>正在热映</span>
					</view>
					<view 
						class="onPlaying"
						:class="onP === true? 'tab_active' : '' "
						@click="toOnPlay"
					>
						<span>即将上映</span>
					</view>
				</view>
				<!-- 橙色小滚动条 -->
				<view 
					class="orangeScroll"
					:class="nowP === true ? '' : 'scroll_change'"
				>
				</view>
			</view>
			<!-- 正在热映电影列表 -->
			<view 
				class="nowPlayMovieList" 
				v-if="nowP"
				
			>
				<view 
					class="movieItem"
					v-for="(item,index) in list"
					:key="index"
				>
					<view 
						class="detail"
						@click="toDetail(item.movieid)"
					>
						<!-- 图片 -->
						<view class="img">
							<image :src="item.pic" mode=""></image>
						</view>
						<!-- 描述 -->
						<view class="descr">
							<view class="movieName">
								<span>{{item.moviename}}</span>
							</view>
							<view class="rating">
								<span>观众评分<span class="number">8.7</span></span>
							</view>
							<view class="type">
								<span>类型:剧情,家庭</span>
							</view>
							<view class="director">
								<span> 导演:殷若昕</span>
							</view>
							<view class="protagonist">
								<span>主演:张子枫,肖央,朱媛媛</span>
							</view>
						</view>
					</view>
					<!-- 购票按钮 -->
					<view class="button">
						<view class="buy" @click="toBuy(item.movieid)">
							购票
						</view>
					</view>
				</view>
			</view>
			<!-- 即将上映电影列表 -->
			<view class="onPlayMovieList" v-else>
				<view 
					class="movieItem"
					v-for="(item,index) in list2"
					:key="index"
				>
					<view class="img">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="descr">
						<view class="movieName">
							<span style="white-space: nowrap;">{{item.moviename}}</span>
						</view>
						<view class="rating">
							<span>观众评分<span class="number">8.7</span></span>
						</view>
						<view class="type">
							<span>类型:剧情,家庭</span>
						</view>
						<view class="director">
							<span> 导演:殷若昕</span>
						</view>
						<view class="protagonist">
							<span>主演:张子枫,肖央,朱媛媛</span>
						</view>
					</view>
					<!-- 预订按钮 -->
					<view class="button">
						<view class="buy" @click="toBuy(item.movieid)">
							预订
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图电影图片数据
				list: [
					{
						"movieid": 141461,
						"moviename": "我的姐姐",
						"pic": "http://api.jisuapi.com/movie/upload/movie/15/141461.jpg"
					},
					{
						"movieid": 141498,
						"moviename": "工作细胞：细胞大作战",
						"pic": "http://api.jisuapi.com/movie/upload/movie/15/141498.jpg"
					},
					{
						"movieid": 141505,
						"moviename": "名侦探柯南：绯色的子弹",
						"pic": "http://api.jisuapi.com/movie/upload/movie/15/141505.jpg"
					},
					{
						"movieid": 141493,
						"moviename": "第十一回",
						"pic": "http://api.jisuapi.com/movie/upload/movie/15/141493.jpg"
					},
					{
						"movieid": 141489,
						"moviename": "西游记之再世妖王",
						"pic": "http://api.jisuapi.com/movie/upload/movie/15/141489.jpg"
					}
				],
				list2: [
						{
							"movieid": 141508,
							"moviename": "寻梦历险记",
							"pic": "http://api.jisuapi.com/movie/upload/movie/15/141508.jpg"
						},
						{
							"movieid": 141487,
							"moviename": "平安中国之守护者",
							"pic": "http://api.jisuapi.com/movie/upload/movie/15/141487.jpg"
						},
						{
							"movieid": 20223,
							"moviename": "南昌起义",
							"pic": "http://api.jisuapi.com/movie/upload/movie/3/20223.jpg"
						},
						{
							"movieid": 141277,
							"moviename": "上甘岭",
							"pic": "http://api.jisuapi.com/movie/upload/movie/15/141277.jpg"
						},
						{
							"movieid": 140956,
							"moviename": "红色娘子军",
							"pic": "http://api.jisuapi.com/movie/upload/movie/15/140956.jpg"
						},
				],
				nowPlay: true,
				onPlay: false,
				onLimit: false
			}
		},
		methods: {
			toFindMovie() {
				// 跳转到电影搜索页
				uni.redirectTo({
				    url: '../../findMovie/index'
				});
			},
			toNowPlay() {
				// 正在热映
				console.log("正在热映")
				// 点击之后给 正在热映添加选中的class类并去除即将上映的选中状态
				// ，即修改nowP为true，onP为false
				if(this.nowPlay === true) {
					return 
				} else {
					// 发送请求获取正在热映电影数据
					
					this.nowPlay = true
					this.onPlay = false
				}
			},
			toOnPlay() {
				// 即将上映
				console.log("即将上映")
				// 点击之后给 即将上映添加选中的class类并去除正在热映的选中状态
				// ，即修改nowP为false，onP为true
				if(this.onPlay === true) {
					return 
				} else {
					// 发送请求获取即将上映电影数据
					
					this.nowPlay = false
					this.onPlay = true
				}
				
			},
			toDetail(id) {
				console.log("前往电影详情页，需传电影id" + id)
				uni.navigateTo({
					url: '../../movieDetail/index?movieid=' + id
				})
			},
			toBuy(id) {
				console.log("前往电影票购买页，需传电影id" + id)
			}
		},
		onPageScroll(e) {
			if(e.scrollTop >= 252) {
				this.onLimit = true
			} else if(e.scrollTop <= 341) {
				this.onLimit = false
			}
		},
		computed: {
			city() {
				// 将获取到的当前城市通过计算属性显示到页面上
				return this.$store.state.city
			},
			// 默认 正在热映 被选中
			nowP() {
				return this.nowPlay
			},
			// 默认 即将上映 不被选中
			onP() {
				return this.onPlay
			},
			hasOverLimit() {
				return this.onLimit
			}
		},
		onLoad() {
		},
		onReady() {
			// 获取所在城市上映电影
			// this.$store.dispatch('getNowPlayMovie')
		}
	}
</script>

<style lang="scss">
	body {
		// overflow: hidden;
	}
	// 主容器
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		// 搜索框样式
		.searchInput {
			margin-top: 5%;
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			just-content: center;
			width: 100%;
			height: 90rpx;
			// background: #00FFFF;
			.currentCity {
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				just-content: center;
				width: 20%;
				height: 100%;
				// background-color: pink;
				.cityText {
					width: 88%;
					height: 100%;
					// background-color: yellow;
					margin-left: 24rpx;
					line-height: 90rpx;
					text-align: center;
				}
				.cityIcon {
					width: 47%;
					height: 100%;
					line-height: 90rpx;
					.icon-sanjiao {
						font-size: 46rpx !important;
					}
				}
			}
			.input {
				width: 78%;
				height: 100%;
				background-color: #F7F7F7;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				just-content: center;
				border-radius: 45rpx;
				.inputIcon {
					width: 15%;
					height: 100%;
					text-align: center;
					line-height: 88rpx;
					.icon-search1 {
						font-size: 55rpx;
						color: #B8B8B8;
					}
				}
				.inputText {
					width: 65%;
					height: 100%;
					line-height: 90rpx;
					.navigateToSearch {
						color: #C9C9C9;
					}
				}
			}
		}
		// 轮播图样式
		.swiper {
			margin: 8% auto 4%;
			width: 95%;
			height: 320rpx;
			// background-color: pink;
			border-radius: 10rpx;
			swiper {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
				swiper-item {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
					image {
						width: 100%;
						// height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		// 上映tabbar样式
		.tabbar {
			width: 100%;
			margin: 2% auto;
			// overflow: hidden;
			// background-color: pink;
			.titleButton {
				z-index: 999;
				/* #ifndef APP-PLUS-NVUE */
				display: flex;
				position: -webkit-sticky;
				/* #endif */
				position: sticky;
				top: var(--window-top);
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				jutify-content: center;
				width: 94%;
				height: 100rpx;
				background: #FFF;
				margin-left: -7%;
				.button {
					margin-left: -7%;
					width: 120%;
					height: 70%;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					jutify-content: center;
					background-color: #FFF;
					.nowPlaying {
						width: 50%;
						height: 100%;
						line-height: 100rpx;
						text-align: center;
						font-weight: bold;
						font-size: 35rpx;
						color: #898989;
						margin-left: 1%;
					}
					.onPlaying {
						width: 50%;
						height: 100%;
						line-height: 100rpx;
						text-align: center;
						font-weight: bold;
						font-size: 35rpx;
						color: #898989;
						margin-left: -21%;
					}
				}
				// 橙色滑条
				.orangeScroll {
					width: 72rpx;
					height: 5%;
					background-color: #FA9A39;
					border-radius: 10rpx;
					margin-left: 19%;
					margin-top: 2%;
					transition: margin-left .2s;
				}
			}
			// 正在热映电影列表容器
			.nowPlayMovieList {
				width: 95%;
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				// height: 3000rpx;
				// 电影容器
				.movieItem {
					position: relative;
					width: 100%;
					height: 400rpx;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: left;
					border-bottom: 2rpx solid #F5F5F5;
					margin: 30rpx 0 0rpx 25rpx;
					.detail {
						width: 100%;
						height: 400rpx;
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: left;
						// margin: 30rpx 0 0rpx 25rpx;
						.img {
							image {
								border-radius: 25rpx;
								width: 280rpx;
								height: 380rpx;
							}
						}
						// 电影描述容器
						.descr {
							width: 35%;
							height: 90%;
							margin-top: -2%;
							margin-left: 4%;
							color: #B3B3B3;
							// 电影名
							.movieName {
								width: 90%;
								font-size: 43rpx;
								font-weight: bold;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
								color: black;
							}
							// 观众评分
							.rating {
								margin-top: 19%;
								.number {
									color: #C9767F;
									margin-left: 15rpx;
								}
							}
							//  类型
							.type {
								margin-top: 19%;
							}
							// 导演
							.director {
								margin-top: 19%;
							}
							// 主演
							.protagonist {
								margin-top: 14%;
								width: 100%;
								overflow: hidden;
								white-space: nowrap;
								text-overflow: ellipsis;
							}
						}
					}
					// 购票按钮容器
					.button {
						.buy {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(170%,-50%);
							// margin: 0 auto;
							width: 116rpx;
							height: 80rpx;
							line-height: 80rpx;
							background-color: #FF9934;
							color: #FFFFFF;
							-webkit-border-radius: 10px;
							border-radius: 38rpx;
							text-align: center;
						}
					}
				}
			}
			// 即将上映电影列表容器
			.onPlayMovieList {
				width: 95%;
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				justify-content: center;
				// 电影容器
				.movieItem {
					position: relative;
					width: 100%;
					height: 400rpx;
					display: flex;
					flex-direction: row;
					flex-wrap: nowrap;
					justify-content: left;
					border-bottom: 2rpx solid #F5F5F5;
					margin: 30rpx 0 0rpx 25rpx;
					.img {
						image {
							border-radius: 25rpx;
							width: 280rpx;
							height: 380rpx;
						}
					}
					// 标题和按钮容器
					.descr {
						width: 35%;
						height: 90%;
						margin-top: -4%;
						margin-left: 4%;
						color: #B3B3B3;
						// 电影名
						.movieName {
							width: 90%;
							font-size: 43rpx;
							font-weight: bold;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							color: black;
						}
						// 观众评分
						.rating {
							margin-top: 19%;
							.number {
								color: #C9767F;
								margin-left: 15rpx;
							}
						}
						//  类型
						.type {
							margin-top: 19%;
						}
						// 导演
						.director {
							margin-top: 19%;
						}
						// 主演
						.protagonist {
							margin-top: 14%;
							width: 100%;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
					}
					// 预订按钮容器
					.button {
						.buy {
							position: absolute;
							top: 50%;
							left: 50%;
							transform: translate(170%,-50%);
							// margin: 0 auto;
							width: 116rpx;
							height: 80rpx;
							line-height: 80rpx;
							background-color: #FF9934;
							color: #FFFFFF;
							-webkit-border-radius: 10px;
							border-radius: 38rpx;
							text-align: center;
						}
					}	
				}
			}
		}
	}
	
	// 公共样式开始
	
	// 电影tabbar选中样式
	.tab_active {
		color: #222222 !important;
		font-size: 40rpx !important;
	}
	
	// 即将上映选中改变滑条的样式
	.scroll_change {
		margin-left: 55% !important;
	}
	
	// 改变热映按钮定位的类
	.tabbar_fixed {
		position: sticky;
		top: -1rpx;
	}
	
	// 公共样式结束
</style>
