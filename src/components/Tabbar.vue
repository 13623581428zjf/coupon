<template>
	<div class="bottom-tab">
		<div class="tab-item" @click="switchTo('/')">
			<img :src="'/' === $route.path ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt="首页">
			<span :class="{on: '/' === $route.path}">首页</span>
		</div>
		<div class="tab-item" @click="switchTo('/B/FreeShipping')">
			<img :src="'/B/FreeShipping' === $route.path ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt="推荐">
			<span :class="{on: '/B/FreeShipping' === $route.path}">9.9包邮</span>
		</div>
		<div class="tab-item" @click="switchTo('/C/classify')">
			<img :src="'/C/classify' === $route.path ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt="搜索">
			<span :class="{on: '/C/classify' === $route.path}">分类</span>
		</div>
		<div class="tab-item" @click="switchTo('/D/collect')">
			<img :src="'/D/collect' === $route.path ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt="聊天">
			<span :class="{on: '/D/collect' === $route.path}">收藏</span>
		</div>
		<div class="tab-item" @click="switchTo('/E/me')">
			<img :src="'/E/me' === $route.path ? tabBarImgArr[4].selected : tabBarImgArr[4].normal" alt="我的">
			<span :class="{on: '/E/me' === $route.path}">我的</span>
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
				tabBarImgArr: [ //图片切换
					{
						normal: require('../assets/4.png.png'),
						selected: require('../assets/5.png.png')
					},
					{
						normal: require('../assets/3.png.png'),
						selected: require('../assets/3.png.png')
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
			switchTo(path) {
//				 console.log(this.$router)
				this.$router.replace(path).catch(err=>err);
			}
		}
	}
</script>
<style scoped>
	.bottom-tab {
		width: 100%;
		height: 50px;
		position: fixed;
		left: 0;
		bottom: 0;
		padding-bottom: 5px;
		display: flex;
	}
	
	.tab-item {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		color: #666;
	}
	
	img {
		width: 35% ;margin-bottom:2px;
	}
	
	.on {
		color: red;
	}
</style>