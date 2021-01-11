<template>
	<!--search-->
	<div>
		<!--分类-->
		<div class="search">
			<van-nav-bar :border=false title="分类" left-arrow left-text='' @click-left="onClickLeft" @click-right="onClickRight">
				<template #right>
					<van-icon name="search" size="18" color='#666' />
				</template>
			</van-nav-bar>
			<!--中间-->
			<div class="shop">
				<!--左边-->
				<div class="menu-wrapper">
					<ul>
						<li @click="clickList(index)" ref='menuList' class="menu-item" v-for="(goods,index) in searchgoods" :key='index' :class="{current:index===currentIndex}">
							<span>{{goods.left}}</span>
						</li>
						<div style="height: 0.3rem;"></div>
					</ul>
				</div>
				<!--右边-->
				<div class="shop-wrapper">
					<ul ref='itemList'>
						<li class="shops-li" v-for="(right,index1) in searchgoods" :key='index1'>
							<div v-for="(items,index) in right.info">
								<div class="itemList-img">
									<img :src="items.title_img" alt="" />
								</div>
								<div class="itemList-title">
									<span>{{items.title}}111</span>
								</div>
								<div class="item-list">
									<ul class="clearfix">
										<li v-for="(item,index) in items.list">
											<div class="item-list-img">
												<img :src="item.img" alt="">
											</div>
											<div class="item-list-name">
												{{item.name}}
											</div>
										</li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<FooterBar></FooterBar>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Toast } from 'vant';
	import Data from './data.json'
	import FooterBar from './footerBar.vue'
	export default {
		name: 'miList',
		components: {},
		data() {
			return {
				scrollY: 0, //右侧列表滑动的y轴坐标
				rightLiTops: [], //所有分类头部位置
				searchgoods: []
			}
		},
		created() {

		},
		mounted() {
			console.log(Data);
			this.searchgoods = Data;
		},
		components: {
			FooterBar
		},
		watch: {
			searchgoods() {
				//监听数据
				this.$nextTick(() => {
					//左右两边滚动
					this._initBScroll();
					//右边列表高度
					this._initRightHeight();
				})
			}
		},
		methods: {
			_initBScroll() {
				//左边滚动
				this.leftBscroll = new BScroll('.menu-wrapper', {
					click: true,
					tap: true
				});
				//右边滚动
				this.rightBscroll = new BScroll('.shop-wrapper', {
					probeType: 3,
					click: true,
					tap: true
				});
				//监听右边滚动事件
				this.rightBscroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(pos.y);
					// console.log(this.scrollY)
				})
			},
			//求出右边列表的高度
			_initRightHeight() {
				let itemArray = []; //定义一个伪数组
				let top = 0;
				itemArray.push(top)
				//获取右边所有li的礼
				let allList = this.$refs.itemList.getElementsByClassName('shops-li');
				//allList伪数组转化成真数组
				Array.prototype.slice.call(allList).forEach(li => {
					top += li.clientHeight; //获取所有li的每一个高度
					itemArray.push(top)
				});
				this.rightLiTops = itemArray;
				// console.log(this.rightLiTops)
			},
			//点击左边实现滚动
			clickList(index) {
				this.scrollY = this.rightLiTops[index];
				this.rightBscroll.scrollTo(0, -this.scrollY, 200, )
			},
			//左右联调 
			_initLeftScroll(index) {
				let menu = this.$refs.menuList;
				let el = menu[index];
				this.leftBscroll.scrollToElement(el, 300, 0, -300)
			},
			//返回上一级
			onClickLeft: function() {
				console.log('返回')
			},
			onClickRight: function() {
				console.log('右边')
			}

		},
		computed: {
			//动态绑定class类名
			currentIndex(index) {
				const {
					scrollY,
					rightLiTops
				} = this;
				return rightLiTops.findIndex((tops, index) => {
					this._initLeftScroll(index);
					return scrollY >= tops && scrollY < rightLiTops[index + 1]
				})
			}
		}
	}
</script>
<style scoped>
	.clearfix:after {
		content: "";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden
	}
	
	.clearfix {
		*zoom: 1
	}
	
	.search {
		width: 100%;
		height: 1rem;
		background-color: #f5f5f5;
		overflow: hidden;
		text-align: center;
		line-height: 1rem;
		font-size: .35rem;
	}
	
	.van-nav-bar {
		background-color: #f2f2f2;
	}
	
	.shop {
		display: flex;
		position: absolute;
		top: 1rem;
		bottom: 1rem;
		width: 100%;
		overflow: hidden;
	}
	/*左边*/
	
	.menu-wrapper {
		background: #fafafa;
		width: 1.8rem;
		flex: 0 0 1.8rem;
	}
	
	.menu-item {
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		background: #fafafa;
		justify-content: center;
		align-items: center;
		color: #666;
		position: relative;
		font-size: .35rem;
	}
	
	.current {
		color: #e02e24;
		background: #fff;
	}
	
	.current::before {
		content: '';
		background-color: #e02e24;
		width: 4px;
		height: 1rem;
		position: absolute;
		right: 0;
	}
	/*右边*/
	
	.shop-wrapper {
		flex: 1;
		background: #fff;
	}
	
	.itemList-img {
		width: 85%;
		height: 2.05rem;
		padding: .45rem;
	}
	
	.itemList-img img {
		width: 100%;
		margin-top: -.5rem;
	}
	
	.itemList-title {
		font-size: .35rem;
		text-align: center;
		height: .5rem;
		line-height: .5rem;
		margin: .2rem auto;
	}
	
	.itemList-title span {
		position: relative;
	}
	
	.itemList-title span::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		width: 6.4px;
		width: .4rem;
		border-top: 1px solid #e0e0e0;
		transform: translate3d(-150%, -50%, 0);
		-webkit-transform: translate3d(-150%, -50%, 0);
	}
	
	.itemList-title span::after {
		content: "";
		position: absolute;
		top: 50%;
		width: 6.4px;
		width: .4rem;
		border-top: 1px solid #e0e0e0;
		left: auto;
		right: 0;
		transform: translate3d(150%, -50%, 0);
		-webkit-transform: translate3d(150%, -50%, 0);
	}
	
	.item-list {}
	
	.item-list li {
		float: left;
		width: 30%;
	}
	
	.item-list-img {}
	
	.item-list-name {
		margin-top: -.5rem;
		text-align: center;
		white-space: nowrap;
		font-size: .23rem;
		color: rgba(0, 0, 0, .54);
	}
	
	.item-list-img img {
		width: 1rem;
		height: 1.2rem;
	}
	/*滚动底部全部显示*/
	
	.shop-wrapper .shops-li:last-child {
		min-height: -webkit-calc(100vh - 2rem);
		min-height: calc(100vh - 2rem);
	}
</style>