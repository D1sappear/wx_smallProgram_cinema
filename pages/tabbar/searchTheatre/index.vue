<template>
	<view class="searchTheatre">
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
					<view class="navigateToSearch" @click="toFindTheatre">
						请输入影院
					</view>
				</view>
			</view>
		</view>
		<!-- 全程和品牌tabbar -->
		<view class="tabbar">
			<view 
				class="titleButton"
			>
				<view
					class="wholeCity"
					@click=""
				>
					<view class="point">
						<view class="text">
							<span>全城</span>
						</view>
						<view class="icon">
							<i class="iconfont icon-sanjiao"></i>
						</view>
					</view>
				</view>
				<view 
					class="brand"
					@click=""
				>
					<view class="point">
						<view class="text">
							<span>品牌</span>
						</view>
						<view class="icon">
							<i class="iconfont icon-sanjiao"></i>
						</view>
					</view>
				</view>
			</view>
			<view class="theatreList">
				<view 
					class="theatreItem"
					v-for="(item,index) in theatreList"
					:key="index"
					@click="toTheatreDetail(item.theaterid)"
				>
					<view class="text">
						<view class="name">
							<view class="left">
								<span>{{item.theatername}}</span>
							</view>
							<view class="right">
								<view class="price">
									<span class="number">￥25.20</span><span>起</span>
								</view>
							</view>
						</view>
						<view class="address">
							<view class="left">
								<span>{{item.address}}</span>
							</view>
							<view class="right">
								<view class="km">
									<span class="number">3.559</span><span>km</span>
								</view>
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
			return {
				theatreList: [
					{
						"theaterid": 4617,
						"theatername": "中影UL城市影院莲塘店",
						"cityid": 705,
						"tel": "0755-86936866",
						"address": "深圳市罗湖区莲塘聚宝路聚宝商业中心3楼1号铺",
						"hours": "11:30-",
						"seatnum": 319,
						"roomnum": 6,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4617.jpg",
						"score": "6.207146",
						"summary": "",
						"lat": "22.56065",
						"lng": "114.17430",
						"city": "罗湖区"
					},
					{
						"theaterid": 4618,
						"theatername": "深圳市中影百誉影城（东门店）",
						"cityid": 705,
						"tel": "0755-86222233",
						"address": "深圳市罗湖区东门步行街UCITY商业中心五六楼",
						"hours": "10:00-24:00",
						"seatnum": 868,
						"roomnum": 6,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4618.jpg",
						"score": "6.577144",
						"summary": "中影百誉影城——广东省拥有杜比全景声音效的影城。影城位于深圳东门步行街 “Ucity商场” 五六楼， 占地面积近3000㎡。特聘香港顶级设计师按照超五星级标准设计和打造，配有6个3D数字影厅，每个影厅均采用可完美提高画质的全金属银幕。硬件方面选用全进口的杜比服务器、科视放映机、皇冠系列功放，以及JBL扬声器。特别介绍影城一号厅采用“杜比全景声”音效，利用顶部和环绕扬声器，以不可思议的清晰度创造出极为逼真而自然的音频体验，声音元素在上下左右移动，为观众提供强大而生动的全新影院聆听感受，带领观众直接走进电影情节。引进国际顶级放映设备，并为观众提供优质完美的服务，中影百誉影城致力于打造成高品质、高标准的星级影院旗舰店，力争为电影爱好者提供时尚、舒适、超一流的电影视听盛宴。看电影，尽在中影百誉影城！百誉服务·完美享受！",
						"lat": "22.54644",
						"lng": "114.11920",
						"city": "罗湖区"
					},
					{
						"theaterid": 4619,
						"theatername": "南国影城金光华店",
						"cityid": 705,
						"tel": "0755-82611138",
						"address": "罗湖区人民南路2028号金光华广场三楼南国影城",
						"hours": "10:00~24:00-",
						"seatnum": 547,
						"roomnum": 5,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4619.jpg",
						"score": "7.017294",
						"summary": "影城总建筑面积4000平方米，总投资2000万元，整体风格时尚前卫的影城拥有5个视听效果优秀，环境舒适的放映厅，总数513个柔软、舒适座椅。影城采用2K比利时BARCO数字放映机，6.1声道环绕杜比数码还音设备及DTS数码音响，英国无缝反射超大银幕和地毯，全方位、大坡度、无遮挡式观映视野设计。订票电话：0755-82611138咨询电话：0755-82611198影院地址：深圳市罗湖区金光华广场三楼（地铁国贸站A出口）影院微博：http://weibo.com/2173066292 深圳·新南国管理品牌",
						"lat": "22.53959",
						"lng": "114.12020",
						"city": "罗湖区"
					},
					{
						"theaterid": 4620,
						"theatername": "太阳数码影城",
						"cityid": 705,
						"tel": "0755-82393801",
						"address": "深圳市罗湖区东门解放路2001号太阳广场六楼",
						"hours": "10:00-23:00",
						"seatnum": 445,
						"roomnum": 2,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4620.jpg",
						"score": "8.016429",
						"summary": "太阳数码影城隶属于太阳百货，由利联实业发展（深圳）有限公司投资建成，于1999年建成，由太阳广场太阳百货运营。        太阳数码影城位于深圳市罗湖区繁盛零售商业中心旺区-东门解放路商业步行街中太阳广场六楼。太阳数码影城同一楼层的配套设施：我是猫烤鱼工坊、仙踪林休闲餐厅、九毛九山西面馆、台湾甜品专家鲜芋仙、四季心情休闲水吧、momo life中西餐厅、E-Tree现磨咖啡、达啡奇咖啡餐厅、全民幸福甜品喜栈、少东家香港茶餐厅、成都名小吃蓉李记、乐悠游儿童乐园、发源地美容美发、娜美莎美容美甲等。东门老街一直是深圳市内历史悠久的零售商业中心。每日平均人流高达五十万人次，邻近深圳地铁老街站及各个主要公共巴士站，距离深圳火车站只是三分钟车程，四通八达，交通方便，属优越的消费场所。　　影城建筑面积2000平方米，有2个影厅，共445个座位。清晰的画面，震撼的音效让人仿佛身临其境，数码声光再现系统,太阳数码影城，让您体会声光的无穷魅力。2002年，影院又增添了美国科视（CHRIOSN）公司的数字放映系统，3K的高对比",
						"lat": "22.54522",
						"lng": "114.11810",
						"city": "罗湖区"
					},
					{
						"theaterid": 4621,
						"theatername": "深圳橙天嘉禾影城",
						"cityid": 705,
						"tel": "0755-82668188-0",
						"address": "宝安南路1881号华润中心．万象城中座三楼",
						"hours": "9:45-00:00",
						"seatnum": 1888,
						"roomnum": 12,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4621.jpg",
						"score": "8.257143",
						"summary": "嘉禾深圳影城由香港嘉禾集团投资3400万元建成。影城首期七个影厅，含一个贵宾厅，共1076个座位；二期于2009年10月正式全面开业，二期新增5个数字化影厅，与一期无缝连接，形成一个12影厅簇拥环绕的影院，现共有12个影厅近2000个座位。     关注影城新浪微博@深圳橙天嘉禾影城 http://weibo.com/1642481482    关注影城官方微信，微信号：szctjhyc     微信二维码扫描：",
						"lat": "22.54126",
						"lng": "114.11070",
						"city": "罗湖区"
					},
					{
						"theaterid": 4622,
						"theatername": "凤凰影城",
						"cityid": 705,
						"tel": "0755-82119111",
						"address": "广东省深圳市罗湖区凤凰路181号京基凤凰印象三楼",
						"hours": "2012年10月-",
						"seatnum": 842,
						"roomnum": 7,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4622.jpg",
						"score": "8.353573",
						"summary": "——不只是电影——深影国际凤凰影城位于（广东）深圳市罗湖区凤凰路181号京基凤凰印象商业广场3楼，交通便利，为深圳东片区提供优越、舒适的五星级观影服务。影城室内建筑面积4685平方米，总投资3000万元，影城内部包含6个影厅和1个影剧院厅，共设有833个舒适豪华“丽江”影院专用座椅，全部影厅均配备进口科视品牌2K数字放映机，进口杜比数码影院还音系统，进口JBL影院音响，进口高亮度金属银幕，被动式3D眼镜，让你瞬间融入电影剧情，犹如身临其境。深影国际凤凰影城影剧厅独具特色，可兼容电影放映与戏剧演出，定期举办粤剧演出、小型表演、明星见面会等活动。深影凤凰国际影城，不只是电影……不只是电影，更是一种悠闲的生活方式；不只是电影，更是一种愉悦的生活方式；不只是电影，更是一种宁静的生活方式；不只是电影，更是一种惬意的生活方式；不只是电影……官方网址：http://www.phxcinema.com",
						"lat": "22.54705",
						"lng": "114.13360",
						"city": "罗湖区"
					},
					{
						"theaterid": 4623,
						"theatername": "深圳MCL洲立影城（喜荟城中心）",
						"cityid": 705,
						"tel": "0755-22358633-0",
						"address": "深圳市罗湖区太宁路喜荟城购物中心二楼",
						"hours": "周日-",
						"seatnum": 529,
						"roomnum": 5,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4623.jpg",
						"score": "6.666235",
						"summary": "MCL洲立影城设有两家分店，蛇口分店座落深圳市南山区花园城商业中心，罗湖分店坐落罗湖区太宁路百仕达喜荟城中心，均由洲立集团有限公司属下的洲立影艺有限公司全资兴建。由洲立影艺斥巨资建造的MCL洲立影城，成为中港「更紧密经贸关系安排第二阶段」(CEPA 2)生效以后由香港公司全资拥有的戏院。CEPA 2让香港的戏院经营者在国内全资拥有、设计、管理及营运戏院；MCL早着先机，为业界借着CEPA 2打入中国高速增长的娱乐市场树立成功典范。该集团主席黎筱娉女士，荣获第三十届（2011年）香港金像奖终身成就奖。",
						"lat": "22.56912",
						"lng": "114.13710",
						"city": "罗湖区"
					},
					{
						"theaterid": 4624,
						"theatername": "深圳UA影院",
						"cityid": 705,
						"tel": "020-85111168",
						"address": "深圳罗湖区深南东路5016号京基百纳空间（KK MALL)购物中心四楼",
						"hours": "10:00-24:00",
						"seatnum": 1000,
						"roomnum": 8,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4624.jpg",
						"score": "8.147709",
						"summary": "UA KK MALL 由香港知名设计师操刀设计，整座影院以“伊甸园”为主体设计风格，洋溢着神秘与魅惑的动感气息。影城现设8个多功能的豪华影厅，包括万众期待的UA IMAX厅和一个多功能VIPER贵宾厅，其中每个影厅均配备舒适座椅，共可容纳约1000人同时观影。而尊贵的VIP贵宾厅更是以双休息区的配置而冠绝深圳。除此之外，影城内设的“伊甸园”主题餐厅也将让影迷们仿佛置身艺术的长廊，近距离感受电影艺术与现实结合的奇特魅力。UA IMAX 影院由KK MALL量身定制打造，全套软硬设备皆从加拿大原装进口。UA IMAX影厅应用双机数码放映技术，并利用光学影像感应系统即时监控画面，使影像清晰明亮，细节无所遁形，绝非一般影院可以比拟。它设置的IMAX多声道数码环绕系统，以镭射精准的为每个座位调音，加上IMAX声轨未经压缩，现场音效震荡观众每段神经。UA IMAX影院特设顶天立地、圆弧长矩形的巨型银幕，无论是2D还是3D电影，视觉效果无限提升。",
						"lat": "22.54139",
						"lng": "114.10520",
						"city": "罗湖区"
					},
					{
						"theaterid": 4625,
						"theatername": "深圳戏院影城",
						"cityid": 705,
						"tel": "0755-82175808",
						"address": "罗湖区新园路1号",
						"hours": "10:00-24:00",
						"seatnum": 546,
						"roomnum": 2,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4625.jpg",
						"score": "8.987756",
						"summary": "    深圳戏院成立于1960年，是深圳地区的剧场单位。经历了五十多年的发展，戏院更加根深蒂固扎根于深圳本土，肩负着传承发展本土文化的重任。    为适应市场发展需要，戏院于2011年进行影城改造项目，改造后的新影城将采用美国科视新放映系统，成为罗湖区双机3D巨幕影厅。新影城的建成将标志着深圳又一个比较全面的文化消费中心的形成。深圳戏院影城将面向社会，走市场化的经营模式，对资源进行合理配置，发挥休闲、娱乐、商业等功能的整体优势，以专业管理团队、全新的经营理念，现代化全方位的管理，保证顾客享受舒适的接待与服务。",
						"lat": "22.54580",
						"lng": "114.11680",
						"city": "罗湖区"
					},
					{
						"theaterid": 4626,
						"theatername": "深圳红石影城（东门店）",
						"cityid": 705,
						"tel": "0755-25138811",
						"address": "深圳市罗湖区东门中路2088号温莎广场负一层B1-001",
						"hours": "10:00-24:00-",
						"seatnum": 716,
						"roomnum": 6,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4626.jpg",
						"score": "0",
						"summary": "深圳红石影城（东门店），位于罗湖区东门中路2088号“维景酒店”负一楼，是东门新兴商业体“东门中心城”的主力店，设有6个放映厅，近800个座席，采用Sony4K高清双光路放映机，亮度高，3D效果好，配合锐肯全景声音响，逼真还原震撼声场，突出服务中的人性化关怀，是您在罗湖东门观影的又一个理想场所。",
						"lat": "22.55146",
						"lng": "114.12390",
						"city": "罗湖区"
					},
					{
						"theaterid": 4627,
						"theatername": "中影UL城市影院布心店",
						"cityid": 705,
						"tel": "0755-86066801",
						"address": "广东省深圳市罗湖区东昌路今日家园腾均商业百货二楼",
						"hours": "12:00-01:00 ",
						"seatnum": 298,
						"roomnum": 4,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4627.jpg",
						"score": "8.552388",
						"summary": "中影UL城市影院隶属于中影数字院线，并由香港UL影业集团负责开发设计及运营规划。拥有多个高标准数字影厅。影城设计将国际流行趋势与快乐、时尚的主题元素融合在一起，打造的是便捷、实惠和舒适的观影理念。各影厅均达到了低视点、宽视角、无遮挡的现代电影工艺标准。影城统一采用国际领先的进口BARCO(巴可)-2K数字放映机，完全解决以往3D影片画面偏暗的缺点，让观看3D影片真正成为视觉享受，配合高标准7.1声道立体还音系统，为您展现超强的视听效果，让您拥有身临其境的感觉。影院便利的直达电梯可将您直接送到影院入口。精彩的电影、美味的食品、持续改善的服务给电影消费者带来的不仅是影片本身的享受，同时还有时尚快乐、舒适休闲、便捷实惠等新生活方式的体验。",
						"lat": "22.58120",
						"lng": "114.13590",
						"city": "罗湖区"
					},
					{
						"theaterid": 4628,
						"theatername": "中影百誉钻石影城",
						"cityid": 705,
						"tel": "0755-28881980",
						"address": "广东省深圳市罗湖区南湖路与友谊路交汇处钻石广场三楼",
						"hours": "10:00-24:00",
						"seatnum": 594,
						"roomnum": 6,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4628.jpg",
						"score": "0",
						"summary": "",
						"lat": "22.54512",
						"lng": "114.12630",
						"city": "罗湖区"
					},
					{
						"theaterid": 4629,
						"theatername": "深圳嘉乐国际影城（鸿翔店）",
						"cityid": 705,
						"tel": "0755-22900020",
						"address": "深圳市罗湖区桂园街道办松园路鸿翔花园E01号",
						"hours": "10:00-24:00-",
						"seatnum": 650,
						"roomnum": 6,
						"logo": "http://api.jisuapi.com/movie/upload/theater/1/4629.jpg",
						"score": "3.885721",
						"summary": "",
						"lat": "0.00000",
						"lng": "0.00000",
						"city": "罗湖区"
					}
				],
				hasShow: true
			}
		},
		computed: {
			city() {
				// 将获取到的当前城市通过计算属性显示到页面上
				return this.$store.state.city.slice(0,2)
			},
			show() {
				
			}
		},
		methods: {
			toFindTheatre() {
				// 跳转到搜索影院页，通过关键字搜索影院，发送请求
				console.log('跳转到搜索影院页，通过关键字搜索影院，发送请求')
				
			},
			toTheatreDetail(theatreId) {
				// 前往影院详情，参数为影院的id
				console.log('前往影院详情，参数为影院的id' + theatreId)
			}
		}
	}
</script>

<style lang="scss">
	// 主容器
	.searchTheatre {
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
		// 吸顶tabbar样式
		.tabbar {
			width: 100%;
			display: flex;
			flex-direction: column;
			.titleButton {
				z-index: 999;
				/* #ifndef APP-PLUS-NVUE */
				display: flex;
				position: -webkit-sticky;
				/* #endif */
				position: sticky;
				top: var(--window-top);
				display: flex;
				flex-direction: row;
				width: 100%;
				height: 120rpx;
				background-color: #FFF;
				border-bottom: 3rpx solid #F1F1F1;
				.wholeCity {
					position: relative;
					width: 50%;
					height: 100%;
					// background-color: red;
					.point {
						width: 40%;
						height: 50%;
						// background-color: yellow;
						position: absolute;
						display: flex;
						flex-direction: row;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						.text {
							width: 70%;
							height: 100%;
							// background-color: pink;
							font-size: 40rpx;
							// font-weight: bold;
							line-height: 60rpx;
							text-align: center;
						}
						.icon {
							width: 30%;
							height: 100%;
							line-height: 60rpx;
							.iconfont {
								font-size: 40rpx;
								// font-weight: bold;
								text-align: center;
								color: #5B5B5B;
							}
						}
					}
				}
				.brand {
					position: relative;
					width: 50%;
					height: 100%;
					.point {
						width: 40%;
						height: 50%;
						position: absolute;
						display: flex;
						flex-direction: row;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						.text {
							width: 70%;
							height: 100%;
							// background-color: pink;
							font-size: 40rpx;
							// font-weight: bold;
							line-height: 60rpx;
							text-align: center;
						}
						.icon {
							width: 30%;
							height: 100%;
							line-height: 60rpx;
							.iconfont {
								font-size: 40rpx;
								// font-weight: bold;
								text-align: center;
								color: #5B5B5B;
							}
						}
					}
				}
			}
			.theatreList {
				display: flex;
				flex-direction: column;
				flex-wrap: nowrap;
				width: 100%;
				.theatreItem {
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					width : 100%;
					height: 200rpx;
					// background-color: yellow;
					border-bottom: 2rpx solid #F1F1F1;
					position: relative;
					.text {
						width : 100%;
						height: 80%;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%,-50%);
						.name {
							width: 100%;
							height: 50%;
							line-height: 80rpx;
							// background-color: blue;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							position: relative;
							.left {
								width: 70%;
								height: 100%;
								// background-color: pink;
								text-indent: 5%;
							}
							.right {
								width: 30%;
								height: 100%;
								// background-color: yellow;
								text-align: center;
								position: absolute;
								right: 0;
								color: #B2B2B2;
								font-size: 24rpx;
								.number {
									font-size: 28rpx;
									font-weight: bold;
									color: #F18B91;
								}
							}
						}
						.address {
							width: 100%;
							height: 50%;
							line-height: 80rpx;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							position: relative;
							.left {
								width: 70%;
								height: 100%;
								text-indent: 5%;
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								// background-color: red;
							}
							.right {
								width: 30%;
								height: 100%;
								// background-color: yellow;
								text-align: center;
								position: absolute;
								right: 0;
								color: #B2B2B2;
								font-size: 24rpx;
								text-indent: 5%;
								.number {
									font-size: 26rpx;
									font-weight: bold;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
