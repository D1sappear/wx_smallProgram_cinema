// 引入vue模块
import Vue from 'vue'
// 引入主文件页面
import App from './App'
// 引入定义好的store模块
import store from './store/index.js'

// 引入iconfont.css文件
import './static/font/iconfont.css'

/*
 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，
 这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小
 的运行时开销，这在生产环境模式下是可以避免的。(摘于官网说明) 大概意思应
 该就是，消息提示的环境配置，设置为开发环境或者生产环境
 */
Vue.config.productionTip = false

// 修改vue中的store指向
Vue.prototype.$store = store

// app这个值是为了区分小程序页面组件
App.mpType = 'app'

// 创建实例
const app = new Vue({
    ...App
})

// 将主文件实例挂载到主入口js
app.$mount()
