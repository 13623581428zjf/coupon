import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/A/home'
import FreeShipping from '@/components/B/FreeShipping'
import classify from '@/components/C/classify'
import collect from '@/components/D/collect'
import me from '@/components/E/me'
import Tabbar from '@/components/Tabbar'
import scroll from '@/components/scroll'
import goods from '@/components/shopList/goods'
import homeMi from '@/components/home_mi'
import footerBar from '@/components/footerBar'
import miList from '@/components/miList'
import miShop from '@/components/miShop'
import onepeple from '@/components/onepeple'
import shopOption from '@/components/shopOption'
import demo from '@/components/demo'
import Parent from '@/compont/Parent'
import child from '@/compont/child'
import headerd from '@/components/headerd'
import vuex from '@/components/vuex'

Vue.use(Router)
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location){
  return originalReplace.call(this,location).catch(err=>err)
}
export default new Router({
	routes: [
		//主页
		{
			path: '/',
			name: 'home',
			component: home
		},
		//9.9包邮
		{
			path: '/B/FreeShipping',
			name: 'FreeShipping',
			component: FreeShipping
		},
		//分类
		{
			path: '/C/classify',
			name: 'classify',
			component: classify
		},
		//收藏
		{
			path: '/D/collect',
			name: 'collect',
			component: collect
		},
		//我的
		{
			path: '/E/me',
			name: 'me',
			component: me
		},
		//组件
		{
			path: '/components/Tabbar',
			name: 'Tabbar',
			component: Tabbar
		},
		//组件
		{
			path: '/components/scroll',
			name: 'scroll',
			component: scroll
		},
		//elm商品详情
		{
			path: '/components/shopList/goods',
			name: 'goods',
			component: goods
		},
		//米首页
		{
			path: '/components/home_mi',
			name: 'homeMi',
			component: homeMi
		},
		//米底部tabBar
		{
			path: '/components/footerBar',
			name: 'footerBar',
			component: footerBar
		},
		//米分类
		{
			path: '/components/miList',
			name: 'miList',
			component: miList
		},
		//米购物车
		{
			path: '/components/miShop',
			name: 'miShop',
			component: miShop
		},
		//米个人
		{
			path: '/components/onepeple',
			name: 'onepeple',
			component: onepeple
		},
		//商品详情
		{
			path: '/components/shopOption',
			name: 'shopOption',
			component: shopOption
		}, 
		//商品详情
		{
			path: '/components/demo',
			name: 'demo',
			component: demo
		},
		//组件传值
		{
			path: '/compont/Parent',
			name: 'Parent',
			component: Parent
		},
		//组件传值
		{
			path: '/compont/child',
			name: 'child',
			component: child
		}, 
		//头部组件
		{
			path: '/components/headerd',
			name: 'headerd',
			component: headerd
		},
		//练习vuex
		{
			path: '/components/vuex',
			name: 'vuex',
			component: vuex
		} 
		 
	]
})