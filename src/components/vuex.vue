<template>
	<div class="vuex">
		<div>练习vuex</div>
		<h4>这里是vuex中的数据：{{$store.state.count}}</h4>
		<button @click="handleAddClick(10)">增加</button>
		<button @click="handleReduceClick(10)">减少</button>
		<div>异步操作</div>
		<div>
			<button @click="handleActionsAdd(10)">异步增加</button>
			<button @click="handleActionsReduce(10)">异步减少</button>
		</div>
		<!--<h4>{{count}}</h4>-->
	</div>
</template>

<script>
	import { Toast } from 'vant';

	import footerbar from './footerBar'
	export default {
		name: 'vuex',
		components: {
			footerbar
		},
		data() {
			return {

			}
		},
		created: function() {

		},

		methods: {
//			const getters = {
//				getterCount(state) {
//					return(state.count += 10)
//				}
//			},
			handleAddClick(n) {
				this.$store.commit('mutationsAddCount', n);
			},
			handleReduceClick(n) {
				this.$store.commit('mutationsReduceCount', n);
			},
			handleActionsAdd(n) {
				this.$store.dispatch('actionsAddCount', n)
			},
			handleActionsReduce(n) {
				this.$store.dispatch('actionsReduceCount', n)
			}
		}
	}
</script>
<style scoped>

</style>