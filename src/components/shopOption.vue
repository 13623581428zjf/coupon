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
				<div class="producy-info-section">{{miName}}&nbsp;{{Memory}}&nbsp;X{{count}}</div>
				<img src="../assets/xia.png.png" />
			</div>
			<div class="producy-info-list" @click="arrdes()">
				<div class="producy-info-name">送至</div>
				<div class="producy-info-section" v-if="newAdress.length===0">北京</div>
				<div class="producy-info-section" v-for="item in newAdress" v-else>
					<div v-if="item">{{item.name}}</div>
				</div>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<!--图-->
		<div class="OptionImg" v-for="item in OptionImg">
			<img :src="item.img" />
		</div>
		<!--购物车弹框-->
		<van-action-sheet v-model="showAdrssShop">
			<div class="closBos">
				<img @click="Clost()" class="closimg" src="../assets/gb.png.png" />
			</div>
			<div class="shopAction">
				<img :src="editionImg" />
				<div class="shopOptionconcat">
					<p>￥{{edition_price}}</p>
					<p>{{miName}}{{Memory}}{{editionColor}}</p>
				</div>
			</div>
			<div class="shopBb">版本</div>
			<div class="shopG" v-for='(item,index) in goodsInfo.edition' @click="banb(item,index)"  :class="{'active':Memory == item.Memory}">
				<div>{{item.Memory}}</div>
				<div>{{item.edition_price}}元</div>
			</div>
			<div class="shopYS">颜色</div>
			<div class="ColorList">
				<div v-for='(item,index) in color_list' @click="ColorList(item,index)" :class="{'actived':editionColor == item.color_list}">{{item.color_list}}</div>
			</div>
			<div class="shopBu">
				<div class="shopNum">购买数量</div>
				<van-button size="small" @click='reduce()' v-if='num>1'>-</van-button>
				<van-button class='vanCalss' size="small" @click='reduce()' v-else>-</van-button>
				<input type="number" name="number" id="number" v-model="num" />
				<van-button size="small" @click='num++'>+</van-button>
			</div>
			<van-button class='shopGo' type="primary" size="normal" @click='goShop()'>加入购物车</van-button>
		</van-action-sheet>
		<!--地址弹框-->
		<van-action-sheet v-model="showAdrss">
			<div class="content">
				<van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" @confirm='confirmed' @cancel='canceled()'></van-area>
			</div>
		</van-action-sheet>
		<!--购物车底部定位-->
		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" badge="523" />
			<van-goods-action-icon icon="cart-o" text="购物车" to='/components/miShop'/>
			<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
			<van-goods-action-button style='font-size: .4rem;' type="warning" text="加入购物车" @click='alertAction()' />
		</van-goods-action>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	//地址
	import AeraInfo from './area.js'
	export default {
		name: 'shopOption',
		components: {

		},
		data() {
			return {
				imgLis: [],
				ids:'',
				miName: '',
				Miinfo: '',
				Miprice: '',
				//G
				OptionImg: [],
				areaList: {},
				Memory: '',
				count: 1,
				showAdrss: false,
				//地址弹框
				arrediss: false,
				newAdress: [],
				//购物车弹框
				showAdrssShop: false,
				editionImg: '',
				edition_price: '',
				editionColor: '',
				goodsInfo: [],
				color_list: [],
				num: 1,
			}
		},
		created: function() {
			this.areaList = AeraInfo;
			this.ids = this.$route.query.id;
			var that = this;
			that.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json', {
					params: {

					}
				})
				.then(function(response) {
					response.data.forEach((item, index) => {
						if(that.ids == item.id) {
							that.goodsInfo = item;
							that.imgLis = item.imgList;
							that.miName = item.name;
							that.Miprice = item.price;
							that.Miinfo = item.info;
							that.OptionImg = item.info_img;
							that.Memory = item.edition[0].Memory;
							that.editionImg = item.edition[0].color[0].img;
							that.edition_price = item.edition[0].edition_price;
							that.editionColor = item.edition[0].color[0].color_list;
						}
					})
				})
				.catch(function(error) {
					console.log(error);
				});
		},

		methods: {
			clikMe: function() {
				this.$router.go(-1)
			},

			alertAction: function() {
				this.showAdrssShop = true;
				this.goodsInfo.edition.forEach((item, index) => {
					if(this.Memory == item.Memory) {
						this.color_list = item.color;
						this.editionColor = item.color[0].color_list;
					}
				})

			},
			Clost() {
				this.showAdrssShop = false;
			},
			//地址
			arrdes: function() {
				this.showAdrss = true;
			},
			//			confirmed: function(data) {
			//				if(data[0].code && data[0].code === "900000") {
			//					if(data[1].code === '') {
			//						Toast('请选择地址')
			//						return;
			//					}
			//				} else {
			//					if(data.some(item => item === undefined || item.code === '')) {
			//						Toast('请选择地址')
			//						return;
			//					}
			//				}
			//				this.newAdress = data;
			//				console.log(this.newAdress);
			//				this.showAdrss = false;
			//			},
			confirmed: function(data) {
				if(data[0].code && data[0].code === '900000') {
					if(data[1].code === '') {
						Toast('请选择地址')
						return;
					}
				} else {
					if(data.some(item => item.code === undefined || item.code === '')) {
						Toast('请选择地址')
						return;
					}
				}
				this.newAdress = data;
				this.showAdrss = false;
			},
			//取消
			canceled: function() {
				this.showAdrss = false;

			},

			//版本
			banb(item, index) {
				this.Memory = item.Memory;
				this.edition_price = item.edition_price;
				this.goodsInfo.edition.forEach((item, index) => {
					if(this.Memory == item.Memory) {
						this.color_list = item.color;
						this.editionColor = item.color[0].color_list;
						
					}
				})
			},
			//颜色改变图片
			ColorList(item, index) {
				console.log(item);
				this.editionImg = item.img;
				this.editionColor = item.color_list;
			},
			//减减
			reduce(){
				if (this.num>1) {
					this.num--
				}
			},
			//加入购物车
			goShop: function() {
				this.count = this.num;
				 let buyGoodsInfo = {
				 	ids:this.ids,
				 	num:this.num,
				 	Memory:this.Memory,
				 	edition_price:this.edition_price,
				 	editionColor:this.editionColor,
				 	img:this.editionImg
				 }
				 console.log(buyGoodsInfo)
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
		width: 25%;
	}
	
	.producy-info-section {
		font-size: .26rem;
		width: 70%;
	}
	
	.producy-info-section div {
		margin-left: 1rem;
	}
	
	.OptionImg {}
	
	.OptionImg img {
		width: 100%;
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
		margin-bottom: .13rem;
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
		padding: 16px 16px 292px;
	}
	
	.van-action-sheet .closBos {
		position: absolute;
	}
	
	.closimg {
		width: .3rem;
		height: .3rem;
		margin-left: 6.9rem;
		margin-top: .3rem;
	}
	
	.shopAction {
		height: 1.4rem;
		display: flex;
	}
	
	.shopAction {
		margin: 1rem .3rem;
	}
	
	.shopAction img {
		width: 2rem;
		height: 2rem;
		border: 1px solid #D9DDE1;
		margin-left: .25rem;
	}
	
	.shopOptionconcat p {
		margin-left: .2rem;
	}
	
	.shopOptionconcat p:first-of-type {
		font-size: .5rem;
		font-weight: 400;
		margin-top: .3rem;
	}
	
	.shopOptionconcat p:last-of-type {
		color: rgba(0, 0, 0, .87);
		font-size: .3rem;
		margin-top: .1rem;
	}
	
	.shopBb,
	.shopYS {
		font-size: .24rem;
		margin: 0 .53rem;
	}
	
	.shopG {
		display: flex;
		width: 6.5rem;
		height: .7rem;
		color: #8F8F94;
		align-items: center;
		margin: .25rem .53rem;
		border: 1px solid #949499;
	}
	/*.active{
		border: 1px solid #FF6700;
	}*/
	
	.ColorList div.actived {
		border: 1px solid #FF6700;
		color: #FF6700;
	}
	
	.shopG.active {
		border: 1px solid #FF6700;
		color: #FF6700;
	}
	
	.shopG div {
		font-size: .3rem;
	}
	
	.shopG div:first-of-type {
		width: 50%;
		margin-left: .2rem;
	}
	
	.shopG div:last-of-type {
		flex: 1;
		text-align: right;
		margin-right: .2rem;
	}
	
	.ColorList {
		display: flex;
		padding: .25rem .24rem;
		box-sizing: border-box;
	}
	
	.ColorList div {
		color: #8f8f94;
		width: 1rem;
		height: .6rem;
		font-size: .3rem;
		line-height: .6rem;
		text-align: center;
		margin-left: .3rem;
		border: 1px solid #8f8f94;
	}
	
	.shopBu {
		display: flex;
	}
	
	.shopBu input{
		width: .7rem;
		height: .63rem;
		text-align: center;
		margin-top: .24rem;
		border: none;
		font-size: .4rem;
	}
	
	.shopNum {
		font-size: .26rem;
		margin-left: .5rem;
		width: 4.5rem;
		height: 1.4rem;
		line-height: 1.2rem;
	}
	
	.van-button {
		width: .7rem;
		height: .7rem;
		background: #ff6700;
		font-size: .5rem;
		font-weight: 100;
		color: white;
		margin-top: .2rem;
	}
	.vanCalss{
		width: .7rem;
		height: .7rem;
		background: #D9DDE1;
		font-size: .5rem;
		font-weight: 100;
		color: white;
		margin-top: .2rem;
	}
	.num {
		width: .7rem;
		height: .7rem;
		text-align: center;
		line-height: .8rem;
		margin-top: .2rem;
		font-size: .4rem;
	}
	
	.shopGo {
		width: 87%;
		height: .64rem;
		background: #ff6700;
		font-size: .28rem;
		text-align: center;
		line-height: .64rem;
		border-radius: .4rem;
		border: none;
		color: #fff;
		margin-bottom: .1rem;
		margin-left: .53rem;
	}
</style>