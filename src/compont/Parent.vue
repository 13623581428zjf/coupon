<template>
	<div class="parentAge">
		<Child @sengMe=jieshou title='取消' activeColor='green' background='#449aff' borderRadius='20px' fontSize='18px'></Child>
		<div class="box" :class="{active:isTrue}"></div>
	</div>
</template>

<script>
	/*父组件传子组件，用props在子组件接收*/
	//子组件传父子件，用$emit在子组件发送，并且在父组件绑定
	import { Toast } from 'vant';
	import Child from './child.vue'
	export default {
		name: 'Parent',
		components: {
			Child
		},
		data() {
			return {
				isTrue: false
			}
		},
		created: function() {
			//数组方法
			//join 将所有数组结合成字符串
			let arr = [1, 2, 3];
			let arr2 = arr.join("$")
			console.log(arr2)
			//pop从数组中删除最后一个元素
			arr.pop();
			console.log(arr)
			//push尾部添加
			arr.push(4);
			console.log(arr, 'push')
			//shift 头部删除
			arr.shift();
			console.log(arr, 'shift')
			//unshift 头部添加
			arr.unshift(0);
			console.log(arr, 'unshift')
			//下标[0]改变数组下标
			arr[0] = '哈哈'
			console.log(arr)
			//delete 删除
			delete arr[0];
			console.log(arr)
			//splice 向数组添加新项
			//第一个参数:从第几个删除
			//第二个参数：删除几个
			//第三个参数：添加的内容
			//第三个参数：添加的内容
			arr.splice(3, 0, 111, 222);
			console.log(arr)
			//splice 俩个参数代表从第几个删除，删除几个
			var arr3 = [44, 55, 66]
			arr3.splice(0, 2);
			console.log(arr3)
			//concat()合并数组
			let c1 = [1, 2, 3];
			let c2 = ['111', '222'];
			let c4 = ['c4']
			let c3 = c1.concat(c2, c4);
			console.log(c3)
			//toString()数组转字符串

			//字符串
			//length
			var str = 'avcdesvcv';
			let str2 = str.length;
			console.log(str2)
			//indexOf() 字符串中指定文本出现的下标索引
			let str3 = str.indexOf('a');
			console.log(str3)
//			/lastIndexOf()字符串中指定文本最后一次出现的下表索引
            let strIn = 'a';
            let steIn1 = strIn.lastIndexOf('a');
            console.log(steIn1)
            //search字符串中指定文本最后一次出现的下表索引
            let steIn2 = strIn.search('a');
            console.log(steIn2)
            //slice字符串中位置 7 到位置 13 的片段：
            let strIn3 = str.slice(2,3);
            console.log(strIn3)
		},

		methods: {
			jieshou(title) {
				console.log(title);
				this.isTrue = !this.isTrue;
			}
		}
	}
</script>
<style scoped>
	.aaa {
		width: 100px;
		height: 100px;
		background: yellowgreen;
	}
	
	.red {
		background: red;
	}
	
	.box {
		width: 100px;
		height: 100px;
		background: #449AFF;
	}
	
	.active {
		background: #E02E24;
	}
</style>