/* 接口api页面 */

// 可复用地址
// const baseUrl = 'https://douban-api.uieee.com'

// 暴露 获取电影详情的请求接口(params填的是movieid或moviename)
export const getMovieDetail = params => (
	// new Promise((resolve,reject) => {
	// 	uni.request({
	// 	    url: "https://api.jisuapi.com/movie/detail", 
	// 		data: params,
	// 		header: {
	// 			"content-type": "json"
	// 		},
	// 		method: 'GET',
	// 		success(res) {
	// 			console.log(res.data)
	// 		}
	// 	});
	// })
	uni.request({
		url: "https://api.jisuapi.com/movie/detail", 
		data: params,
		header: {
			"content-type": "json"
		},
		method: 'GET'
	})
)

// 暴露 正在上映电影的请求接口(params一共有四个参数，分别是cityid、city和date还有appkey，其中cityid和city二选一，date不填则默认当天，appkey是极速网自己申请的key)
export const getNowPlayingMovie = params => (
	// new Promise((resolve,reject) => {
	// 	uni.request({
	// 	    url: "https://api.jisuapi.com/movie/on", 
	// 		data: params,
	// 		header: {
	// 			"content-type": "json"
	// 		},
	// 		method: 'GET',
	// 		// 不加success则默认返回一个promiss
	// 		success(res) {
	// 			resolve(res)
	// 		}
	// 	});
	// })
	uni.request({
		url: "https://api.jisuapi.com/movie/on", 
		data: params,
		header: {
			"content-type": "json"
		},
		method: 'GET',
		// 不加success则默认返回一个promise对象,去除new promise的情况下，在调用时可以通过.then(res=>{})来处理得到的数据,具体使用可以参考uniapp官网
		// success(res) {
		// 	resolve(res)
		// }
	})
)

// 暴露 所在城市电影院(post请求，body一共有四个参数，分别是cityid、city和keyword还有appkey，其中cityid和city二选一，keyword不是必填项，appkey是极速网自己申请的key)
export const getLocalTheatres = params => (
	uni.request({
		url: 'https://api.jisuapi.com/movie/theater',
		data: params,
		header: {
			"content-type": "json"
		},
		method: 'POST',
	})
)
