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
			<div class="producy-info-list" @click="alertAction()">
				<div class="producy-info-name">已选</div>
				<div class="producy-info-section">{{miName}}&nbsp;{{section}}&nbsp;{{count}}</div>
				<img src="../assets/xia.png.png" />
			</div>
			<div class="producy-info-list" @click="arrdes()">
				<div class="producy-info-name">送至</div>
				<div class="producy-info-section">北京</div>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<!--图-->
		<div class="OptionImg" v-for="item in OptionImg">
			<img :src="item.img" />
		</div>
		<!--购物车弹框-->
		<van-sku v-model="showBase" :sku="skuData.sku" :buy-text='buy_text' :goods="skuData.goods_info" :goods-id="skuData.goods_id" :show-add-cart-btn='skuData.show_add_cart_btn' :hide-stock="skuData.sku.hide_stock" :quota="skuData.quota" :quota-used="skuData.quota_used" :initial-sku="initialSku" reset-stepper-on-hide reset-selected-sku-on-hide disable-stepper-input :close-on-click-overlay="closeOnClickOverlay" :custom-sku-validator="customSkuValidator" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
		<!--地址弹框-->
		<van-action-sheet v-model="show">
			<div class="content">
				<van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" @confirm='confirmed' @cancel='canceled()'></van-area>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import skuData from './skdata.js';
	//地址
	import AeraInfo from './area.js'
	export default {
		name: 'shopOption',
		components: {

		},
		data() {
			return {
				imgLis: [],
				miName: '',
				Miinfo: '',
				Miprice: '',
				count: 1,
				//G
				section: '',
				OptionImg: [],
				areaList: {},
				show: false,
				//地址弹框
				arrediss: false,
				//购物车弹框
				skuData: skuData,
				showBase: false,
				closeOnClickOverlay: true,
				buy_text: '加入购物车',
				initialSku: { //默认选中
					s1: '30349',
					s2: '1193',
					selectedNum: 3
				},
				customSkuValidator: () => '请选择xxx!',
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
			this.areaList = AeraInfo;
			console.log(shopop);
			console.log(AeraInfo);

		},

		methods: {
			clikMe: function() {
				this.$router.go(-1)
			},

			alertAction: function() {
				this.showBase = true;
			},
			onAddCartClicked(data) { //加入购物车
				//				this.$toast('add cart:' + JSON.stringify(data));
			},
			onBuyClicked(data) { //立即购买
				this.$toast('buy:' + JSON.stringify(data));
				console.log(JSON.stringify(data))
			},
			//地址
			arrdes: function() {
				this.show = true;
			},
			confirmed: function(data) {
				if(data[0].code && data[0].code === "900000") {
					if(data[1].code === '') {
						Toast('请选择地址')
						return;
					}
				} else {
					if(data.some(item => item === undefined || item.code === '')) {
						Toast('请选择地址')
						return;
					}
				}

				this.show = false;
				console.log(data)
			},
			//取消
			canceled: function() {
				this.show = false;
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
		margin: .2rem .38rem;
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
		margin: 1rem 0;
	}
	
	.van-goods-action {
		margin-bottom: .3rem;
		border-radius: .16rem;
		margin-left: .25rem;
		height: 1rem;
		width: 7rem;
		border: 1px solid #e5e5e5;
		background: #fff;
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px rgba(0, 0, 0, .14), 0 1px 10px rgba(0, 0, 0, .12);
	}
	
	.van-goods-action-button {
		background: #f56600;
		border-radius: .3rem;
		overflow: hidden;
		color: #fff;
		font-size: .4rem;
		width: 3rem;
		margin-right: .3rem;
	}
	
	.position {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, .8);
	}
	
	.van-area {
		z-index: 999;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		border-radius: .2rem;
	}
	
	.content {
		padding: 16px 16px 160px;
	}
</style>