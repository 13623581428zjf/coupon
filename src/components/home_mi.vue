<template>
	<div>
		<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<van-cell>
					<!--头部-->
					<header>
						<img src="../assets/7e13b5561982108c43bb948bbd7b32b.jpg" />
						<div>
							<input type="text" name="text" id="text" value="" />
						</div>
					</header>
					<!--轮播-->
					<van-swipe :autoplay="3000">
						<van-swipe-item v-for="(image, index) in homelb" :key="index">
							<img :src="image.img" alt="图片未显示" />
						</van-swipe-item>
					</van-swipe>
				</van-cell>
				<!--icon-->
				<div class="navList">
					<a>
						<ul>
							<li><img src="../assets/移动端_首页-分销好友.png" /></li>
							<li>icon1</li>
						</ul>
					</a>
					<a>
						<ul>
							<li><img src="../assets/移动端_首页-分销好友.png" /></li>
							<li>icon2</li>
						</ul>
					</a>
					<a>
						<ul>
							<li><img src="../assets/移动端_首页-分销好友.png" /></li>
							<li>icon3</li>
						</ul>
					</a>
					<a>
						<ul>
							<li><img src="../assets/移动端_首页-分销好友.png" /></li>
							<li>icon4</li>
						</ul>
					</a>
					<a>
						<ul>
							<li><img src="../assets/移动端_首页-分销好友.png" /></li>
							<li>icon5</li>
						</ul>
					</a>
				</div>
				<!--列表-->
				<div class="miList">
					<ul v-for="(item,index) in homeList" :key='index' @click="clickItem(item)">
						<img :src="item.img" />
						<li>{{item.name}}</li>
						<li style="font-size: .25rem;color: rgba(0,0,0,.54);">{{item.content}}</li>
						<li style="font-size: .3rem;color: red;">{{item.price}}</li>
					</ul>
				</div>
			</van-list>
		</van-pull-refresh>
		<div style="height: 1rem;"></div>
		<footerbar></footerbar>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import footerbar from './footerBar'
	import homeList from './milist.json'
	export default {
		name: 'home_mi',
		components: {
			footerbar
		},
		data() {
			return {
				list: [],
				homeList: [],
				loading: false,
				finished: false,
				refreshing: false,
				homelb: [],
				page: 1, //请求第几页
				pageSize: 10, //每页请求的数量
				total: 0, //总共的数据条数
			}
		},
		created: function() {
			this.homeList = homeList;
			this.getHomelb();
			this.onLoad();
			this.onRefresh();
		},

		methods: {
			//轮播数据
			getHomelb: function() {
				var that = this;
				that.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json', {
						params: {
							page: that.page,
							pageSize: that.pageSize
						}
					})
					.then(function(response) {
						that.homelb = response.data;
					})
					.catch(function(error) {
						console.log(error);
					});

			},

			onLoad() {
				var that = this;
				setTimeout(() => {
					if(that.refreshing) {
						that.list = [];
						that.refreshing = false;
					}
					that.$axios.get('https://shiyaming1994.github.io/mi/static/homeGoods.json', {
							params: {
								page: that.page,
								pageSize: that.pageSize
							}
						})
						.then(function(response) {
							that.list = response.data;
						})
						.catch(function(error) {
							console.log(error);
						});
					that.loading = false;
					that.homeList = that.homeList.concat(that.list)
					if(that.list.length >= 6) {
						that.finished = true;
					}
				}, 1000);
			},
			onRefresh() {
				// 清空列表数据
				this.finished = false;

				// 重新加载数据
				// 将 loading 设置为 true，表示处于加载状态
				this.loading = true;
				this.onLoad();
			},
			clickItem: function(item) {
				this.$router.push({
					path: './shopOption',
					query: {
						item: item
					}
				})
			}
		}
	}
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	header {
		display: flex;
		width: 100%;
		height: 1.3rem;
		color: #666;
		justify-content: space-between;
		align-items: center;
		background: #f2f2f2;
	}
	
	header img {
		width: .8rem;
		height: .8rem;
		margin-left: .4rem;
		border-radius: 50%;
		background: skyblue;
	}
	
	header div {
		width: 4.5rem;
		height: .6rem;
		margin-right: .5rem;
		align-items: center;
		font-size: .3rem;
	}
	
	header div input {
		border-radius: .5rem;
		width: 100%;
		align-items: center;
		height: .6rem;
		justify-content: flex-start;
		border: none;
		padding-left: .8rem;
		background: url(../assets/搜索.png) no-repeat left;
		background-size: .6rem .6rem;
		background-position: .1rem;
		border: 1px solid #87CEEB;
	}
	
	.my-swipe {}
	
	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
	
	.van-swipe-item img {
		width: 100%;
		height: 4rem;
	}
	
	.navList {
		width: 100%;
		height: 1.6rem;
		display: flex;
		align-items: center;
	}
	
	.navList ul {
		font-size: 10px;
		width: 1.5rem;
	}
	
	.navList ul img {
		width: .5rem;
		height: .5rem;
	}
	
	.navList ul li {
		margin: .15rem 0;
		text-align: center;
	}
	
	.miList {
		width: 100%;
		display: flex;
		padding: .2rem 0;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		justify-content: space-between;
		padding-bottom: .01rem;
	}
	
	.miList ul {
		height: 5.7rem;
		width: 49%;
	}
	
	.miList img {
		width: 3.7rem;
		height: 3.7rem;
	}
	
	.miList li {
		text-align: left;
		margin: .1rem .2rem;
		width: 100%;
	}
	
	.miList li:first-of-type {
		font-size: .35rem;
	}
</style>