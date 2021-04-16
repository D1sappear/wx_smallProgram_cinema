<template>
	<view class="movieDet">
		<!-- 顶部容器 -->
		<view 
			v-if="moviedetail"
			class="top"
		>
			<!-- 背景容器 -->
			<view 
				class="backg"
				:style="{backgroundImage: 'url(' +  moviedetail.pic + ')'}"
			>
				
			</view>
			<!-- 显示内容容器 -->
			<view class="cover">
				<view class="descr">
					<view class="wrap">
						<view class="title">
							<span>{{moviedetail.moviename}}</span>
						</view>
						<view class="type">
							<span>{{moviedetail.class}}</span>
						</view>
						<view class="runtime">
							<span>{{moviedetail.duration}}</span>
						</view>
						<view class="releaseTime">
							<span>{{releaseDate}}</span>
						</view>
						<view class="rating">
							<span>观众评分<span class="number">8.7</span></span>
						</view>
					</view>
				</view>
				<view class="img">
					<image :src="moviedetail.pic" mode=""></image>
				</view>
			</view>
		</view>
		
		<!-- 请求不到在线图片时 -->
		<view
			v-else
			class="top"
			style="background-image: url(../../static/img/moviedetailBackground.jpg)"
		>
			<view class="descr">
				
			</view>
			<view class="img">
				
			</view>
		</view>
		
		<!-- 影院列表容器 -->
		<view class="theatreList">
			<view class="listTabbar">
				<view class="location">
					<view class="buttonWrap">
						<span class="text">全城</span>
						<i class="iconfont icon-sanjiao"></i>
					</view>
				</view>
				<view class="time">
					<view class="buttonWrap">
						<span class="text">时间</span>
						<i class="iconfont icon-sanjiao"></i>
					</view>
				</view>
				<view class="brand">
					<view class="buttonWrap">
						<span class="text">品牌</span>
						<i class="iconfont icon-sanjiao"></i>
					</view>
				</view>
			</view>
			<view class="list">
				<view 
					class="theatreItem"
					v-for="(item,index) in thisMoiveTheatreList"
					:key="index"
				>
					<view class="itemWrap">
						<view class="name">{{item.theatername}}</view>
						<view class="address">
							<view class="text">{{item.address}}</view>
							<view class="number">3.692km</view>
						</view>
						<view class="times">
							<view 
								class="timesItme"
								v-for="(itm,idx) in times"
							>
								<view class="timeText">{{itm.time}}</view>
								<view class="timeDescr">{{itm.desc}}</view>
							</view>
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
			return{
				data: {},
				moviedetail: {
					"moviename": "我的姐姐",
					"movieid": 141461,
					"enname": "Sister",
					"pic": "http://api.jisuapi.com/movie/upload/movie/15/141461.jpg",
					"class": "家庭 剧情",
					"year": "2021",
					"releasedate": "20210402",
					"country": "中国",
					"director": "殷若昕",
					"actor": "张子枫 肖央 朱媛媛 段博文",
					"screenwriter": null,
					"publisher": null,
					"summary": "《我的姐姐》围绕失去父母的姐姐在面对追求个人独立生活还是抚养弟弟的问题上展开了一段细腻感人的亲情故事。",
					"screentype": "3D IMAX3D",
					"duration": "127分钟"
				},
				thisMoiveTheatreList: [
					{
						"theatername": "时代凤凰影城（广富百货店）",
						"address": "盐田区沙头角海山路28号和亨城市广场广富百货二楼（可颂坊楼上）",
						"issale": 1,
						"minprice": "38",
						"theaterid": 4779,
						"lat": "22.55761",
						"lng": "114.23910",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4779.jpg"
					},
					{
						"theatername": "深圳海岸影城",
						"address": "深圳市南山区文心五路33号海岸城购物中心3楼",
						"issale": 1,
						"minprice": "43",
						"theaterid": 4675,
						"lat": "22.51668",
						"lng": "113.93710",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4675.jpg"
					},
					{
						"theatername": "益田国际影城",
						"address": "深圳市宝安区福永街道办永泰西路益田假日天地二楼",
						"issale": 1,
						"minprice": "38.9",
						"theaterid": 8647,
						"lat": "0.00000",
						"lng": "0.00000",
						"logo": null
					},
					{
						"theatername": "深圳中影易禾影城",
						"address": "深圳市龙岗区布吉街道布吉广场新一佳4楼",
						"issale": 1,
						"minprice": "38",
						"theaterid": 4769,
						"lat": "22.60083",
						"lng": "114.11780",
						"logo": null
					},
					{
						"theatername": "中影UL城市影院（黄田店）",
						"address": "深圳市宝安区西乡镇黄田大门旁昌宏商场4楼",
						"issale": 1,
						"minprice": "38",
						"theaterid": 4699,
						"lat": "0.00000",
						"lng": "0.00000",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4699.jpg"
					},
					{
						"theatername": "中影百誉上域影城",
						"address": "深圳宝安区光明新区公明民生大道与兴发路交汇处宏发上域商城四楼",
						"issale": 1,
						"minprice": "37.9",
						"theaterid": 4734,
						"lat": "22.78219",
						"lng": "113.90700",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4734.jpg"
					},
					{
						"theatername": "中影UL城市影院彩田店",
						"address": "深圳市福田区彩田路3030号彩德城三楼",
						"issale": 1,
						"minprice": "40",
						"theaterid": 4632,
						"lat": "22.54308",
						"lng": "114.06920",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4632.jpg"
					},
					{
						"theatername": "中影UL城市影院龙珠店",
						"address": "深圳市桃源村三期岁宝百货二楼",
						"issale": 1,
						"minprice": "40",
						"theaterid": 4682,
						"lat": "22.55790",
						"lng": "113.98440",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4682.jpg"
					},
					{
						"theatername": "深圳非凡数字影城",
						"address": "深圳市宝安区石岩街道塘头社区塘头大道39号一楼",
						"issale": 1,
						"minprice": "37",
						"theaterid": 8665,
						"lat": null,
						"lng": null,
						"logo": null
					},
					{
						"theatername": "深圳东影南国国际影城（唐美店）",
						"address": "福永街道塘尾社区唐美商场四楼",
						"issale": 1,
						"minprice": "39",
						"theaterid": 4736,
						"lat": "22.70070",
						"lng": "113.80130",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4736.jpg"
					},
					{
						"theatername": "中影星河影城大浪店",
						"address": "深圳市龙华区大浪时代购物广场二楼（大浪劳动者广场旁）",
						"issale": 1,
						"minprice": "42.9",
						"theaterid": 8662,
						"lat": "0.00000",
						"lng": "0.00000",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/8662.jpg"
					},
					{
						"theatername": "深圳华夏星光国际影城",
						"address": "深圳市南山区海德二道南山书城7楼",
						"issale": 1,
						"minprice": "38.9",
						"theaterid": 4664,
						"lat": "22.51937",
						"lng": "113.92900",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4664.jpg"
					},
					{
						"theatername": "麦希中影南方布吉店",
						"address": "深圳市龙岗区布吉地铁站A龙珠商城5楼",
						"issale": 1,
						"minprice": "35",
						"theaterid": 4749,
						"lat": "22.60267",
						"lng": "114.12310",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4749.jpg"
					},
					{
						"theatername": "深圳戏院影城",
						"address": "罗湖区新园路1号",
						"issale": 1,
						"minprice": "38",
						"theaterid": 4625,
						"lat": "22.54580",
						"lng": "114.11680",
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4625.jpg"
					},
					{
						"theatername": "影尊国际影城",
						"address": "深圳市宝安区新安建安一路80号香缤广场四楼",
						"issale": 1,
						"minprice": "39.9",
						"theaterid": 8642,
						"lat": "0.00000",
						"lng": "0.00000",
						"logo": null
					},
				],
				times: [
					{"time": "10:00",desc: "国语2D"},
					{"time": "11:45",desc: "国语2D"},
					{"time": "12:30",desc: "国语2D"},
					{"time": "13:45",desc: "国语2D"}
				]
			}
		},
		computed: {
			releaseDate() {
				let year = this.moviedetail.releasedate.slice(0,4)
				let month = this.moviedetail.releasedate.slice(4,6)
				let day = this.moviedetail.releasedate.slice(6,8)
				let date = year + '-' + month + '-' + day
				return date
			}
		},
		beforeMount() {
		},
		methods: {
			
		},
		created() {
			// console.log(this.$store.state)
		},
		onReady() {
			// console.log(this.$store.state.movieid)
			// // 请求电影详情
			// this.$store.dispatch('getMovieDet')
			
			// // 请求放映该电影的电影院
			// this.$store.dispatch('getThisMovTheatres')
		},
		onLoad(data) {
			if(data.movieid) {
				this.$store.state.movieid = data.movieid
			} else {
				this.$store.state.moviename = data.moviename
			}
		},
		// 监听页面初始化
		onInit(data) {
			
		}
	}
</script>

<style lang="scss">
	// 主容器
	.movieDet {
		// 顶部容器
		.top {
			width: 100%;
			height: 400rpx;
			// background-size: 100% 100%;
			// background-size: cover;
			position: relative;
			// 背景容器
			.backg {
				width: 100%;
				height: 100%;
				-webkit-filter: blur(60rpx);
				-moz-filter: blur(60rpx);
				-o-filter: blur(60rpx);
				-ms-filter: blur(60rpx);
				filter: blur(60rpx);
			}
			// 显示内容容器
			.cover {
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				.descr {
					width: 60%;
					height: 100%;
					// background: red;
					position: relative;
					.wrap {
						width: 80%;
						height: 80%;
						// background: pink;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						font-size: 34rpx;
						color: #EFEFF1;
						.title {
							font-size: 40rpx;
							color: #FEFEFE;
							margin-bottom: 40rpx;
						}
						.type {
							margin-bottom: 14rpx;
						}
						.runtime {
							margin-bottom: 14rpx;
						}
						.releaseTime {
							margin-bottom: 14rpx;
						}
						.rating {
							margin-bottom: 14rpx;
							.number {
								color: red;
								margin-left: 20rpx;
							}
						}
					}
				}
				.img {
					position: relative;
					width: 40%;
					height: 100%;
					// background: blue;
					image {
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						width: 80%;
						height: 80%;
					}
				}
			}
		}
		// 电影院列表总容器
		.theatreList {
			margin-top: 100rpx;
			// background-color: pink;
			width: 100%;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			// 容器顶部tabbar
			.listTabbar {
				z-index: 999;
				/* #ifndef APP-PLUS-NVUE */
				display: flex;
				position: -webkit-sticky;
				/* #endif */
				position: sticky;
				top: var(--window-top);
				border-bottom: 2rpx solid #F7F7F7;
				width: 100%;
				background-color: #FFF;
				display: flex;
				flex-direction: row;
				flex-wrap: nowrap;
				.location {
					width: 33.3%;
					height: 100rpx;
					// background-color: blue;
					position: relative;
					.buttonWrap {
						width: 80%;
						height: 80%;
						line-height: 80rpx;
						text-align: center;
						// background-color: pink;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: center;
						color: #747A7D;
						font-size: 38rpx;
						.icon-sanjiao {
							font-weight: bold;
						}
					}
				}
				.time {
					width: 33.3%;
					height: 100rpx;
					// background-color: blue;
					position: relative;
					.buttonWrap {
						width: 80%;
						height: 80%;
						line-height: 80rpx;
						text-align: center;
						// background-color: pink;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: center;
						color: #747A7D;
						font-size: 38rpx;
						.icon-sanjiao {
							font-weight: bold;
						}
					}
				}
				.brand {
					width: 33.3%;
					height: 100rpx;
					// background-color: blue;
					position: relative;
					.buttonWrap {
						width: 80%;
						height: 80%;
						line-height: 80rpx;
						text-align: center;
						// background-color: pink;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						display: flex;
						flex-direction: row;
						flex-wrap: nowrap;
						justify-content: center;
						color: #747A7D;
						font-size: 38rpx;
						.icon-sanjiao {
							font-weight: bold;
						}
					}
				}
			}
			// 电影院列表容器
			.list {
				width: 100%;
				// 电影院容器 
				.theatreItem {
					width: 100%;
					height: 400rpx;
					position: relative;
					border-bottom: 2rpx solid #F7F7F7;
					// background-color: red;
					// 内容包裹容器，方便定位
					.itemWrap {
						width: 94%;
						height: 80%;
						// background-color: pink;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						// 电影院名容器
						.name {
							width: 100%;
							height: 25%;
							line-height: 60rpx;
							// background-color: yellow;
							color: #2E2E2E;
							font-weight: bold;
							font-size: 36rpx;
						}
						// 地址容器
						.address {
							width: 100%;
							height: 20%;
							// background-color: blue;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							color: #AFAFAF;
							// 地址文字容器
							.text {
								width: 80%;
								height: 100%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}
							// 距离数字显示容器
							.number {
								width: 20%;
								height: 100%;
							}
						}
						// 每天上映时间容器
						.times {
							width: 100%;
							height: 55%;
							// background-color: green;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							// 内容包裹容器
							.timesItme {
								width: 24%;
								height: 100%;
								background-color: #F7F7F7;
								display: flex;
								flex-direction: column;
								flex-wrap: nowrap;
								justify-content: center;
								margin: 0 auto;
								// 时间显示容器
								.timeText {
									width: 100%;
									height: 30%;
									text-align: center;
									line-height: 40rpx;
									color: #333333;
									font-weight: bold;
									font-size: 36rpx;
								}
								// 2D和3D描述容器
								.timeDescr {
									width: 100%;
									height: 30%;
									text-align: center;
									line-height: 40rpx;
									color: #AFAFAF;
									font-size: 28rpx;
								}
							}
						}
					}
				}
			}
		}
		
	}
</style>
