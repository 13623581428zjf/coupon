<template>
	<div class="miShop">
		<Headers title="购物车" @goBack=gobye></Headers>
		<div class="DLden">
			<p>登录后享受更多优惠</p>
			<p>去登陆</p>
			<!--<img src="../assets/xia.png.png" />-->
		</div>
		<!--<div class="Klide">
			<div>购物车还是空的</div>
			<div>去逛逛</div>
		</div>-->
		<div class="shopListGo">
			<img src="" />
			<div class="SjLidt">
				<p>黑纱游戏手机</p>
				<p>￥7999</p>
				<div class="ButtonBox">
					<van-button size="small">-</van-button>
					<span>1</span>
					<van-button size="small">+</van-button>
				</div>

			</div>
			<!--<img src="../assets/c12745ed8a5171e13b427dbc39401jpeg.jpeg"/>-->
		</div>
		<img class="KLimg" src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" />
		<div class="shopLsist">
			<div class="shop-wrapper" v-for="(item,index) in cartList">
				<img :src="item.img" />
				<p>{{item.name}}</p>
				<div>{{item.content}}</div>
				<p>￥{{item.price}}</p>
			</div>
		</div>
		<div class="fotterPosition">
			<div>
				<p>共1件&nbsp;金额：</p>
				<p>7999<span>元</span></p>
			</div>
			<van-button style='background-color: #f4f4f4;color: #333;' type="primary" to='/components/home_mi'>继续购物</van-button>
			<van-button type="primary" style='background: #ff6700;'>去结算</van-button>
		</div>
		<!--<footerbar></footerbar>-->

	</div>
</template>

<script>
	import { Toast } from 'vant';
	import footerbar from './footerBar'
	import Headers from './headerd'
	// 按需引入vuex
	export default {
		name: 'miShop',
		components: {
			footerbar,
			Headers
		},
		data() {
			return {
				cartList: [],
			}
		},
		created: function() {
			var that = this;
			that.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json', {
				params: {

				}
			}).then(function(res) {
				that.cartList = res.data;
				//				console.log(that.cartList);

			}).catch(function(err) {
				console.log(err)
			});
			console.log(that.$store.state.arr);
		},

		methods: {
			gobye(title) {
				this.$router.go(-1);
			}
		},
		computed: {}
	}
</script>
<style scoped>
	.DLden {
		display: flex;
		align-items: center;
		height: 1.2rem;
		line-height: 1.2rem;
	}
	
	.DLden p:first-of-type {
		font-size: .35rem;
		color: rgba(0, 0, 0, .87);
		width: 5.8rem;
		margin-left: .3rem;
	}
	
	.DLden p:last-of-type {
		font-size: .28rem;
		color: #757575;
	}
	
	.DLden img {
		width: .25rem;
		height: .25rem;
		margin-left: .1rem;
	}
	
	.Klide {
		background: #EBEBEB;
		height: 1.2rem;
		display: flex;
		align-items: center;
		line-height: 1.2rem;
	}
	
	.Klide div:first-of-type {
		color: rgba(0, 0, 0, .27);
		font-size: .3rem;
		margin-left: 1.7rem;
	}
	
	.Klide div:last-of-type {
		font-size: .3rem;
		border: 1px solid #D0D0D0;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		width: 1.4rem;
		margin-left: .3rem;
		font-weight: 100;
	}
	
	.KLimg {
		width: 100%;
	}
	
	.shopLsist {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	
	.shopLsist {
		margin-bottom: 1.4rem;
	}
	
	.shop-wrapper {
		width: 48.5%;
	}
	
	.shop-wrapper img {
		width: 100%;
	}
	
	.shop-wrapper P:first-of-type {
		font-size: .3rem;
		margin-left: .2rem;
	}
	
	.shop-wrapper P:last-of-type {
		font-size: .3rem;
		margin-left: .2rem;
		color: #ea625b;
	}
	
	.shop-wrapper div {
		color: rgba(0, 0, 0, .54);
		font-size: .25rem;
		margin-left: .2rem;
	}
	
	.shopListGo {
		display: flex;
		align-items: center;
		padding: .5rem .5rem;
	}
	
	.shopListGo img:first-of-type {
		width: 2rem;
		height: 2rem;
		border: 1px solid #FBFBFB;
	}
	
	.shopListGo img:last-of-type {
		width: .3rem;
		height: .4rem;
		margin-top: 1rem;
		margin-left: .8rem;
	}
	
	.SjLidt p:first-of-type {
		font-size: .28rem;
		color: #666;
	}
	
	.SjLidt p:last-of-type {
		font-size: .26rem;
		color: #999;
		margin-top: .2rem;
	}
	
	.SjLidt {
		margin: .3rem;
	}
	
	.ButtonBox {
		border: 1px solid #E8E8E8;
		border-radius: .1rem;
		display: flex;
		margin-top: .2rem;
	}
	
	.SjLidt button {
		color: #c0c0c0;
		width: .9rem;
		height: .7rem;
		text-align: center;
		border: none;
		background: #F9F9F9;
		color: #55557A;
	}
	
	.SjLidt span {
		display: block;
		width: .9rem;
		height: .7rem;
		text-align: center;
		line-height: .7rem;
		color: #55557A;
		font-size: .38rem;
	}
	
	.fotterPosition {
		display: flex;
		position: fixed;
		bottom: 0;
		background: #fff;
		align-items: center;
		height: 1rem;
		width: 100%;
	}
	
	.fotterPosition div {
		width: 2.1rem;
	}
	
	.fotterPosition .van-button {
		height: 100%;
		border: none;
		border-radius: none;
	}
	
	.fotterPosition p:first-of-type {
		font-size: .26rem;
		color: #999;
		text-align: center;
	}
	
	.fotterPosition p:last-of-type {
		font-size: .45rem;
		font-weight: bolder;
		color: #ff5722;
		text-align: center;
		margin-left: .2rem;
	}
	
	.fotterPosition p span {
		font-size: .26rem;
		color: #999;
		margin-left: .1rem;
	}
</style>