// 分享朋友圈和好友功能
export default {
	data() {
		return {
			 share:{
			   title: 'Movie',
			   path:'/pages/loading/index',
			}
		}
	},
	onShareAppMessage(res) {
		return {
			title: this.share.title,
			path: this.share.path
		}
	},
	onShareTimeline(res) {
		return {
			title: '分享标题',
			path: this.share.path
		}
	}
}