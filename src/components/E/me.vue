<template>
	<div class="classify">
		 我的
		 <Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from '../Tabbar'
	import { Toast } from 'vant';
	export default {
		name: 'classify',
		data() {
			return {

			}
		},
		components:{
			Tabbar
		},
		methods: {

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.h100 {
		height: 100%;
	}
	
	.cell1 .van-swipe-cell__left,
	.cell1 .van-swipe-cell__right {
		display: inline-block;
		height: 44px;
		font-size: 15px;
		line-height: 44px;
		color: #fff;
		text-align: center;
	}
</style>