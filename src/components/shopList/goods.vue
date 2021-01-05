<!--商品展示组件-->
<template>
	<div>
		<!--顶部-->
		<header><img src="../../assets/20201229122000.jpg"/></header>
		<!--中部-->
		<div class="goods">
			<!--左侧菜单-->
			<div class="menu-wrapper" ref="menuWrapper">
				<!-- 使用ref:绑定要获取的元素-->
				<!--遍历所有商品大分类(菜单)-->
				<ul>
					<!--这里绑定一个对象，根据currentIndex返回当额值设置class，当currentIndex===index 就设置选中样式-->
					<li v-for="(item, index) in goods" class="menu-item" :key="index" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
						<span class="text border-1px">{{ item.name }}</span>
					</li>
				</ul>
			</div>
			<!--右侧商品-->
			<div class="foods-wrapper" ref="foodsWrapper">
				<ul>
					<!--遍历所有商品 food-list-hook 也是一个变成习惯，表明他是被js选择的元素-->
					<li v-for="(item, index) in goods" :key="index" class="foods-list food-list-hook">
						<h1 class="title"> {{ item.name }}</h1>
						<!--右侧商品分割标题（分类）-->
						<ul>
							<li @click="selectFood(food, $event)" v-for="(food, index) in item.foods" :key="index" class="food-item border-1px">
								<!--商品的左右两侧-->
								<div class="icon">
									<!--商品小图标-->

									<img width="57" height="57" :src="food.icon" alt="food.name">
								</div>
								<div class="content">
									<!-- 商品名称和描述-->
									<h2 class="name">{{ food.name }}</h2>
									<!--商品名称-->
									<p class="desc">{{food.description}}</p>
									<!--描述-->
									<div class="extra">
										<!--销售-->
										<span class="count">月售{{food.sellCount}}</span><span>好评率{{food.rating}}%</span>
									</div>
									<div class="price">
										<!--价格-->
										<span class="now">￥{{food.price}}</span>
										<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>

	</div>
</template>
<script>
	import BScroll from 'better-scroll' //导入besscrool
	import goodData from './json/gooddata.js'
	export default {
		name: 'goods',
		data() {
			return {
				goods: [], //所有商品的大分类
				listHeight: [], //用来存放右侧每一个li的商品高度
				scrollY: 0, //当前滚动的高度
			}
		},
		created() {
			this.goods = goodData;
			this.$nextTick(() => { // 原始写法 this.$nextTick(function () {});
				// 调用滚动的初始化方法
				this._initScroll();
				this._calculateHeight();
			});
		},
		components: {

		},
		methods: {
			// 左侧菜单点击右侧内容滚动到对应区域事件
			selectMenu(index, event) { // 这里多传递一个事件 ,event 就是click传递的event，当设置 click为 true时，默认就派发了一个点击事件，而pc端本身也有click事件
				if(!event._constructed) {
					return; // 原生的浏览器的event没有 vue的这个 _constructed 属性，所以当没有这个时，直接return。避免在pc端点击时事件执行（触发）2次的效果
				}
				let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
				let el = foodList[index]; // 滚动到响应的元素
				this.foodsScroll.scrollToElement(el, 300);
			},
			// 初始化滚动事件
			_initScroll() {
				// 第一个参数是dom对象，第二个参数是options(json格式)
				// vue 中获取指定对象的方式
				// 获取左侧菜单区域
				// BScroll计算dom高度，如果获取不到高度会没有效果，所以上面要调用ick
				this.menuScroll = new BScroll(this.$refs.menuWrapper, {
					click: true // 一开始的点击事件被bscroll阻止了，设置这个才能点击
				});
				// 获取右侧商品区域
				this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
					click: true, // 这里也要设置为true增加减少按钮才能点击
					probeType: 3 // 获取实时滚动的位置，详见bscroll API
				});
				// 监听右侧食品区域滚动的事件
				this.foodsScroll.on('scroll', (pos) => {
					this.scrollY = Math.abs(Math.round(pos.y)); // 四舍五入得到的y值
					// console.log('当前滚动的Y值：' + this.scrollY);
				});
			},
			_calculateHeight: function() {
				// 获取右侧一个商品的整个li，一个li里面包含了该分类下的所有商品
				let foodList = this.$refs.foodsWrapper.getElementsByClassName('food-list-hook');
				let height = 0;
				this.listHeight.push(height);
				for(let i = 0; i < foodList.length; i++) {
					let item = foodList[i];
					height += item.clientHeight; // 获取每一个li的可视区域的高度
					this.listHeight.push(height); // 这样就得到了每一个商品分类下的所有商品对应的高度
				}
			},
			selectFood: function() {
				console.log('跳转页面')
			}
		},
		computed: {
			currentIndex() { // 计算当前右侧的距离，决定决定左侧哪一个分类高亮（选中的意思）
				for(let i = 0; i < this.listHeight.length; i++) {
					// 这两个高度就是一个li从上到下整个的高度
					let height1 = this.listHeight[i]; // 获取当前的上高度
					let height2 = this.listHeight[i + 1]; // 获取当前的下高度
					// if (this.scrollY > height1 && this.scrollY < height2)  这样子height2会超出listHeight的索引，需要加一个条件
//					console.log('y:' + this.scrollY);
//					console.log(height1 + '....' + height2);
					if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						return i; // 返回当前索引
					}
				}
				return 0; // 如果什么的都没有就返回 0
			},
			selectFoods() {}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
	header {
		width: 100%;
		height: 172px;
	}
	
	header img {
		width: 100%;
		height: 100%;
	}
	
	.goods {
		display: flex;
		position: absolute;
		top: 174px; // 这里是距离header和tab
		bottom: 46px; // 距离底部导航
		width: 100%;
		overflow: hidden;
	}
	
	.menu-wrapper {
		// 菜单区域
		flex: 0 0 80px; // 即存在剩余空间也不放大 内容缩放情况 占位空间
		width: 80px; // 这里是兼容安卓浏览器
		background: #f3f5f7;
	}
	
	.menu-item {
		display: table; // 这里使用display:table 无论有几行文字都能垂直居中
		width: 56px;
		height: 57px;
		padding: 0 12px;
		line-height: 14px;
	}
	
	.current {
		// 左侧当前选中的样式
		position: relative;
		margin-top: -1px; // 这里需要加个相对定位才使生效，margin-top 挡住1px的边框
		background: #fff;
		color: forestgreen;
	}
	
	.text {
		// 优惠文字
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		border-1px: (rgba(7, 17, 27, .1)); // 1像素，还需要另外指定1px的class
		font-size: 12px;
	}
	
	.foods-wrapper {
		// 右侧食品区域
		flex: 1;
	}
	
	.title {
		// 右侧商品（分类）标题
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147, 153, 159);
		background: #f3f5f7;
	}
	
	.food-item {
		// 右侧商品区域
		display: flex;
		padding: 18px 0;
		border-1px: (rgba(7, 17, 27, .1));
		border-bottom: 1px solid #D9DDE1;
		width: 100%;
		margin-left: 20px;
		box-sizing: border-box;
	}
	
	img {
		border-radius: 2px;
	}
	
	.content {
		// 右侧内容
		flex: 1;
		margin-left: 10PX;
	}
	
	.name {
		// 商品名
		margin: 2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color: rbg(7, 17, 27);
	}
	
	.desc,
	.extra {
		// 商品描述和销量的共有样式
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159)
	}
	
	.desc {
		// 描述
		// border:0.1px solid red;
		margin-bottom: 8px;
		line-height: 20px;
	}
	
	.extra, // 销量
	.count {
		margin-right: 12px;
	}
	
	.price {
		line-height: 24px;
	}
	
	.now {
		margin-right: 8px;
		font-size: 14px;
		color: rgb(240, 20, 20);
	}
	
	.old {
		text-decoration: line-through;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	/**/
</style>