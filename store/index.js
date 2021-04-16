// 引入vue模块
import Vue from 'vue'
// 引入vuex模块
import Vuex from 'vuex'

// 引入微信小程序SDK
import QQMapWX from '../static/js/qqmap-wx-jssdk.js'

// 引入各类电影接口api
import {getMovieDetail,getNowPlayingMovie,getLocalTheatres} from '../api/index.js' 

// 挂载使用Vuex
Vue.use(Vuex)

// 暴露配置好的store
export default new Vuex.Store({
	state: {
		// 初始城市为深圳市
		city: '深圳',
		/* 正在热映电影列表 */
		nowPlayingList: [], 
		/* 当地电影院 */
		localTheatresList: [],
		/* 用户名 */
		userName: '',
		/* 用户头像 */
		userAvatarUrl: '',
		/* 服务商 */
		provider: '',
		// 电影id
		movieid: '',
		// 电影名
		moviename: '',
		// appkey
		appkey: '', // 极速网https://www.jisuapi.com/申请注册的appkey
		// 电影详情
		moviedetail: {},
		// 订单列表
		orderList: []
	},
	mutations: {
		
	},
	getters: {
		
	},
	actions: {
		// 获取所在城市
		getCity(context) {
			// 开启loading
			uni.showLoading({
				title: '加载中'
			})
			// uni自带获取用户授权接口
			uni.authorize({
				scope: 'scope.userLocation', // 获取用户定位
				// 授权成功
				success() {
					// 定义小程序实例对象(腾讯地图api)
					let qqmapsdk = new QQMapWX({
						key: 'CPKBZ-7ALWD-47A42-HTF6K-HKXHZ-U4BCV'
					});
					// 获取当前位置经纬度
					uni.getLocation({
					    type: 'gcj02',
					    success: function (res) {
					        // console.log('当前位置的经度：' + res.longitude);
					        // console.log('当前位置的纬度：' + res.latitude)
							
							// 微信小程序妮解析地址（经纬度转具体地址)
							qqmapsdk.reverseGeocoder({
								location: {
								  latitude: res.latitude,
								  longitude: res.longitude
								},
								success(res) {
									context.state.city =  res.result.address_component.city.slice(0,2)
									uni.hideLoading()
								}
							})
					    }
					});
					
				},
				// 授权失败
				fail(res) {
					console.log(res)
					// 展示功能失效原因的弹窗
					uni.showToast({
						icon: 'none',
						title: '获取位置信息失败，部分功能失效。',
						duration: 2000
					})
				}
			})
		},
		
		
		// 请求用户信息
		getUserInfo(context) {
			// 获取服务供应商
			uni.getProvider({
				service: 'oauth',
				success(res) {
					// console.log(res.provider)
					context.state.provider = res.provider
					// 检查 登录状态是否过期
					uni.checkSession({
						success(res) {
							// console.log(res)
							return
						},
						fail(err) {
							console.log('登录已过期' + err)
							// 请求登录
							uni.showToast({
								icon: 'none',
								title: '登录已过期，请重新登录',
								duration: 2000
							})
						}
					})
					uni.login({
						provider: context.state.provider,
						success(res) {
							// console.log(res)
							// 请求用户信息
							uni.getUserInfo({
								provider: context.state.provider,
								success(res) {
									console.log(res)
									context.state.userName = res.userInfo.nickName
									context.state.userAvatarUrl = res.userInfo.avatarUrl
								},
								fail(err) {
									console.log('获取用户信息失败' + err)
								}
							})
						},
						fail(err) {
							console.log('登录失败' + err)
						}
					})
				},
				fail(err) {
					console.log('获取服务供应商失败' + err)
				}
			})
		},
		
		// 获取所在城市上映的电影
		getNowPlayMovie(context) {
			if(context.state.nowPlayingList.length > 0) {
				console.log(context.state.nowPlayingList) 
			} else {
				// 正在上映接口，参数为cityid、city和date还有appkey，其中cityid和city二选一，date不填则默认当天，appkey是极速网自己申请的key
				getNowPlayingMovie({
					city: context.state.city,
					appkey: context.state.appkey
				}).then(res => {
					let [err, data] = res
					if (err) throw err
					context.state.nowPlayingList = data.data.result.list
					console.log(context.state.nowPlayingList)
				})
			}
		},
		
		// 请求获取电影院
		getTheatres(context) {
			if(context.state.localTheatres.length > 0) {
				console.log(context.state.localTheatres) 
			} else {
				// 正在上映接口，参数为cityid、city和date还有appkey，其中cityid和city二选一，date不填则默认当天，appkey是极速网自己申请的key
				getLocalTheatres({
					city: context.state.city,
					appkey: context.state.appkey
				}).then(res => {
					let [err, data] = res
					if (err) throw err
					context.state.localTheatresList = data.data.result.list
					// console.log(context.state.nowPlayingList)
				})
			}
		},
		
		// 请求电影详情
		getMovieDet(context) {
			console.log(context.state.movieid)
			console.log(context.state.appkey)
			// 搜索接口，参数为电影id
			getMovieDetail({
				movieid: context.state.movieid,
				appkey: context.state.appkey
			}).then(res => {
				let [err, data] = res
				if (err) throw err
				context.state.moviedetail = data.data.result
				console.log(data.data.result)
			})
		}
	}
})