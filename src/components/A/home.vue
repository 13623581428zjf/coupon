<template>
	<div class="home">
		<!--底部组件-->
		<div>我的</div>
		<Tabbar></Tabbar>
	</div>
	</div>
</template>

<script>
	import Tabbar from '../Tabbar'
	import { Toast } from 'vant';
	export default {
		name: 'home',
		components: {
			Tabbar
		},
		data() {
			return {

			}
		},
		created: function() {},

		methods: {

		}
	}
</script>
<style scoped>

</style>