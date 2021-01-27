<template>
	<div class="footerBar">
		<div class="tab-item" @click="swichTo('/components/home_mi')">
			<img :src="'/components/home_mi'===$route.path?tabBar[0].selected:tabBar[0].normal" alt="首页" />
			<span :class="{on:'/components/home_mi'===$route.path}">首页</span>
		</div>
		<div class="tab-item" @click="swichTo('/components/miList')">
			<img :src="'/components/miList'===$route.path?tabBar[1].selected:tabBar[1].normal" alt="分类" />
			<span :class="{on:'/components/miList'===$route.path}">分类</span>
		</div>
		<div class="tab-item" @click="swichTo('/components/miShop')">
			<img :src="'/components/miShop'===$route.path?tabBar[2].selected:tabBar[2].normal" alt="购物车" />
			<span :class="{on:'/components/miShop'===$route.path}">购物车</span>
		</div>
		<div class="tab-item" @click="swichTo('/components/onePeple')">
			<img :src="'/components/onePeple'===$route.path?tabBar[3].selected:tabBar[3].normal" alt="个人" />
			<span :class="{on:'/components/onePeple'===$route.path}">个人</span>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: 'home',
		components: {

		},
		data() {
			return {
				tabBar: [{
						normal: require('../assets/4.png.png'),
						selected: require('../assets/5.png.png')
					},
					{
						normal: require('../assets/1.png.png'),
						selected: require('../assets/6.png.png')
					},
					{
						normal: require('../assets/10.png.png'),
						selected: require('../assets/11.png.png')
					},
					{
						normal: require('../assets/7.png.png'),
						selected: require('../assets/8.png.png')
					}
				]
			}
		},
		methods: {
			swichTo(path) {
				console.log(path)
				this.$router.replace(path).catch(err => err)
			}
		}
	}
</script>
<style scoped>
	.footerBar {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		padding-bottom: .2rem;
		display: flex;
		background: #fff;
		border: 1px solid #DFDFDF;
	}
	.tab-item{
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
	}
	img{
		width: 35% ;margin-bottom:2px;
	}
</style>