<template>
	<div class="search">
		<!-- 搜索导航 -->
		<div class="shop">
			<!-- 左边 -->
			<div class="menu-wrapper">
				<ul>
					<li class="menu-item" v-for="(goods,index) in searchgoods" :key="index" :class="{current: index === currentIndex}" @click="clickList(index)" ref="menuList">
						<span>{{goods.left}}</span>
					</li>
				</ul>
			</div>
			<!-- 右边 -->
			<div class="shop-wrapper">
				<ul ref="itemList">
					<li class="shops-li" v-for="(right, index1) in searchgoods" :key="index1">
						<div v-for="(items, index) in right.info">
							<div class="itemList-img">
								<img :src="items.title_img" alt="">
							</div>
							<div class="itemList-title">
								<span>{{ items.title }}</span>
							</div>
							<div class="item-list">
								<ul class="clearfix">
									<li v-for="(item, index) in items.list">
										<div class="item-list-img">
											<img v-lazy="item.img" alt="">
										</div>
										<div class="item-list-name">{{ item.name }}</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="more">查看更多</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { Toast } from 'vant';
	export default {
		name: 'scroll',
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
			this.getList()
		},
		components: {

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
			getList() {
				this.$http.get("https://shiyaming1994.github.io/mi/static/data.json")
					.then(res => {
						this.searchgoods = res.data;
					}).catch(function(error) {})
			},
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
<style scoped></style>