<template>
	<div class="shopOption">
		<!--商品轮播-->
		<van-swipe :autoplay="3000">
			<van-swipe-item v-for="(item, index) in imgLis" :key="index">
				<img :src="item.img" />
			</van-swipe-item>
		</van-swipe>
		<i @click="clikMe()"><img src="../assets/r.png.png"/></i>
		<p class="itemNamr">{{miName}}</p>
		<p class="miInfo">{{Miinfo}}</p>
		<p class="Miprice">￥{{Miprice}}</p>
		<!--已选-->
		<div class="listBs">
			<div class="producy-info-list">
				<div class="producy-info-name">已选</div>
				<div class="producy-info-section">{{miName}}&nbsp;{{section}}&nbsp;{{count}}</div>
				<img src="../assets/xia.png.png" />
			</div>
			<div class="producy-info-list">
				<div class="producy-info-name">送至</div>
				<div class="producy-info-section">{{miName}}&nbsp;{{section}}&nbsp;{{count}}</div>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<!--图-->
		<div class="OptionImg" v-for="item in OptionImg">
			<img :src="item.img" />
		</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	export default {
		name: 'shopOption',
		components: {},
		data() {
			return {
				imgLis: [],
				miName: '',
				Miinfo: '',
				Miprice: '',
				count: 1,
				//G
				section: '',
				OptionImg: []

			}
		},
		created: function() {
			let shopop = this.$route.query.item;
			this.imgLis = shopop.imgList;
			this.miName = shopop.name;
			this.Miinfo = shopop.info;
			this.Miprice = shopop.price;
			this.section = shopop.edition[0].Memory;
			this.OptionImg = shopop.edition[0].color;
			console.log(shopop);
		},

		methods: {
			clikMe: function() {
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	.van-swipe-item img {
		width: 100%;
	}
	
	i img {
		width: .6rem;
		height: .6rem;
		position: fixed;
		top: .3rem;
		left: .3rem;
	}
	
	.itemNamr {
		font-weight: 400;
		font-size: .5rem;
		margin: .2rem .3rem;
	}
	
	.miInfo {
		font-size: .26rem;
		line-height: .5rem;
		font-weight: 100;
		padding: 0 .3rem;
		box-sizing: border-box;
		width: 100%;
	}
	
	.Miprice {
		color: #ff6700;
		font-size: .48rem;
		margin: 0 .3rem;
	}
	
	.listBs {
		width: 90%;
		outline: none;
		border-radius: .16rem;
		background: #fafafa;
		padding: .24rem 0rem;
		margin: .2rem .43rem;
	}
	
	.producy-info-list {
		display: flex;
		border-bottom: 1px solid #E0E0E0;
		padding-bottom: .3rem;
		box-sizing: border-box;
		width: 100%;
		margin-top: .1rem;
	}
	
	.producy-info-list img {
		width: .4rem;
		height: .4rem;
	}
	
	.producy-info-list:last-of-type {
		border-bottom: none;
		margin-top: .3rem;
		padding-bottom: .1rem;
		box-sizing: border-box;
	}
	
	.producy-info-name {
		font-size: .26rem;
		color: rgba(0, 0, 0, .54);
		width: 15%;
		text-align: center;
	}
	
	.producy-info-section {
		font-size: .26rem;
		margin-left: .5rem;
		width: 67%;
	}
	
	.OptionImg img {
		width: 100%;
	}
</style>