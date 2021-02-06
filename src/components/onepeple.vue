<template>
	<div class="onePeple">
		<div class="TeamPeple">
			<img src="../assets/20201229122000.jpg" />
			<p>154244535</p>
		</div>
		<div class="MyDpant">
			<div>我的订单</div>
			<div>全部订单</div>
			<img src="../assets/xia.png.png" />
		</div>
		<div class="PeopleFk">
			<ul>
				<a href="#">
					<li><img src="../assets/c.png.png" /></li>
					<li class="topMe">待付款</li>
				</a>
			</ul>
			<ul>
				<a href="#">
					<li><img src="../assets/y.png.png" /></li>
					<li>优惠卷</li>
				</a>
			</ul>
			<ul>
				<a href="#" @click="ImgQh()">
					<li v-if="!ImgShow"><img src="../assets/s.png.png" /></li>
					<li v-else><img src="../assets/s2.png.png" /></li>
					<li>收藏</li>
				</a>
			</ul>
		</div>
		<div class="HuiChat">
			<img class="ImgO" src="../assets/h.png.png" />
			<div>
				<p>会员中心</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<div class="HuiChat" style="margin-top: 0;">
			<img class="ImgO" src="../assets/u.png.png" />
			<div style="border-bottom: none;">
				<p>收货地址</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<div class="HuiChat">
			<!--<img class="ImgO" src="../assets/yh.png.png" />-->
			<div>
				<p>我的优惠</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<div class="HuiChat" style="margin-top: 0;">
			<!--<img class="ImgO" style="width: .5rem;height: .5rem;margin-left: .27rem;" src="../assets/j.png.png" />-->
			<div style="border-bottom: none;width: 6.2rem;margin-left: -.1rem;">
				<p>我的意见</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<div class="HuiChat">
			<!--<img class="ImgO" src="../assets/ly.png.png" />-->
			<div style="border-bottom: none;">
				<p>浏览记录</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<div class="HuiChat" style="margin-top: 0;margin-top: .25rem;">
			<!--<img class="ImgO" src="../assets/mp.png.png" />-->
			<div style="border-bottom: none;">
				<p>我的名片</p>
				<img src="../assets/xia.png.png" />
			</div>
		</div>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	import footerbar from './footerBar'
	export default {
		name: 'onePeple',
		components: {
			footerbar
		},
		data() {
			return {
                ImgShow:false,
			}
		},
		created: function() {

		},

		methods: {
			ImgQh() {
                this.ImgShow = !this.ImgShow;
			}
		}
	}
</script>
<style scoped>
	.onePeple {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #F5F5F5;
	}
	
	.TeamPeple {
		display: flex;
		background: #F37D0F;
		height: 1.6rem;
		align-items: center;
	}
	
	.TeamPeple img {
		width: .96rem;
		height: .96rem;
		border-radius: 100%;
		margin-left: .3rem;
		border: 3px solid hsla(0, 0%, 100%, .4);
		text-align: center;
	}
	
	.TeamPeple p {
		font-size: .27rem;
		color: #fff;
		margin-left: .1rem;
	}
	
	.MyDpant {
		display: flex;
		height: 1rem;
		align-items: center;
		border-bottom: 1px solid rgba(0, 0, 0, .15);
	}
	
	.MyDpant div:first-of-type {
		font-size: .3rem;
		color: rgba(0, 0, 0, .87);
		margin-left: .3rem;
	}
	
	.MyDpant div:last-of-type {
		font-size: .25rem;
		color: rgba(0, 0, 0, .87);
		margin-left: 4.5rem;
	}
	
	.MyDpant img {
		width: .3rem;
		height: .3rem;
	}
	
	.PeopleFk {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 2rem;
		background: #fff;
	}
	
	.PeopleFk ul a li img {
		width: .6rem;
		height: .6rem;
	}
	
	.PeopleFk ul a li {
		font-size: .25rem;
		text-align: center;
		color: black;
	}
	
	.HuiChat {
		display: flex;
		height: 1rem;
		align-items: center;
		margin-top: .25rem;
		background: #fff;
	}
	
	.HuiChat .ImgO {
		width: .4rem;
		height: .4rem;
		margin: .2rem .3rem;
	}
	
	.HuiChat div p {
		font-size: .35rem;
		font-weight: 400;
		width: 5.9rem;
	}
	
	.HuiChat div img {
		width: .3rem;
		height: .3rem;
	}
	
	.HuiChat div {
		display: flex;
		height: 1rem;
		align-items: center;
		border-bottom: 1.5px solid #ECECEC;
		width: 90%;
	}
</style>