<template>
	<div class="miShop">
		<Headers title="购物车"></Headers>
		<div class="DLden">
			<p>登录后享受更多优惠</p>
			<p>去登陆</p>
			<img src="../assets/xia.png.png" />
		</div>
		<div class="Klide">
			<div>购物车还是空的</div>
			<div>去逛逛</div>
		</div>
		<img class="KLimg" src="http://i8.mifile.cn/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg" />
		<div class="shopLsist">
			<div class="shop-wrapper" v-for="(item,index) in cartList">
				<img :src="item.img"/>
				<p>{{item.name}}</p>
				<div>{{item.content}}</div>
				<p>￥{{item.price}}</p>
			</div>
		</div>
		<footerbar></footerbar>

	</div>
</template>

<script>
	import { Toast } from 'vant';
	import footerbar from './footerBar'
	import Headers from './headerd'
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
			}).then(function(res){
				that.cartList = res.data;
				console.log(that.cartList);
				
			}).catch(function(err){
				console.log(err)
			});
		},

		methods: {
			//返回上一级
			onClickLeft() {
				this.$router.go(-1)
			},
			onClickRight() {

			},
		}
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
	.shopLsist{
		 margin-bottom: 1.3rem;
	}
	.shop-wrapper {
		width: 48.5%;
	}
	.shop-wrapper img{
		width: 100%;
	}
	.shop-wrapper P:first-of-type
	{
		font-size: .3rem;
		margin-left: .2rem;
	}
	.shop-wrapper P:last-of-type
	{
		font-size: .3rem;
		margin-left: .2rem;
		color: #ea625b;
	}
	.shop-wrapper div{
		color: rgba(0,0,0,.54);
		font-size: .25rem;
		margin-left: .2rem;
	}
</style>