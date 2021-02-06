import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
	car: [],
	all_money: 0, //总价
	all_selsect: true, //全选状态
}
//在vuex.vue页面用    this.$store.state.count
//mutations里面放置的是我们操作state对象的方法
const mutations = {
	setData(state, payload) {
		state.car.push(payload);
		//这里打印下看下是否有接收到,
		console.log(state.car, '我是vuex拿到的数据');
		
		localStorage.setItem('ShopCar',JSON.stringify(state.car));
	}
}
//actions是异步操作
//这里我在两个方法中使用了两个不同的参数，一个是context，它是一个和store对象具有相同对象属性的参数。在第二个函数中，我是直接使用了这个对象的commit的方法。
const actions = {
   setData({commit},data){
   	  commit('commit',data)
   }
	//在methods中，增加两个方法，使用dispath来触发
}
modules: {}
export default new Vuex.Store({
	state,
	mutations,
	actions,
})