<template>
	<div class="dmeo">
		<div>demo</div>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	import footerbar from './footerBar'
	export default {
		name: 'miShop',
		components: {
			footerbar
		},
		data() {
			return {

			}
		},
		created: function() {
			//数组方法 尾部添加
			// 1 push()
			let arr1 = [1, 2, 3]
			arr1.push(4);
			console.log(arr1);
			//2  unshift() 头部添加
			arr1.unshift(5)
			console.log(arr1)
			//pop() 尾部删除第一个
			arr1.pop(1);
			console.log(arr1)
			//shift() 头部删除第一个
			arr1.shift(1);
			console.log(arr1)
			//es6
		// .some():有一项符合条件就终止遍历，返回布尔；
			let arr2 = [{
					name: '哈哈1',
					id: 1,
					isSelected:false
				},
				{
					name: '哈哈2',
					id: 2,
					isSelected:false
				},
				{
					name: '哈哈3',
					id: 3,
					isSelected:false
				},
				{
					name: '哈哈4',
					id: 4,
					isSelected:false
				}
			];
			let onOff = arr2.some(item => item.id == 2);
			console.log(onOff, 'onOff');
			//every():数组条件所有都符合才会返回true，有一项不符合就返回false；
			let onOff1 = arr2.every(item=>item.isSelected ==false);
			console.log(onOff1 +'||' +'onOff1')
			//filter():筛选出符合条件的项，组成一个新的数组，如果不符合筛选条件，就会返回空数组
			let NewArr = arr2.filter(item=>item.isSelected==false);
			console.log('NewArr',NewArr);
			//findIndex()找出数组中符合条件的索引值
			let index  =arr2.findIndex(item=>item.name=='哈哈1');
			console.log(index,'index')
			//forEach()  循环遍历数组
			let Newarr1=[];
			arr2.forEach((item,index)=>{
				  if (item) {
				  item.isActive = false;
				  	Newarr1.push(item)
				  }
			})
			console.log(Newarr1,'Newarr1')
			//map()  遍历数组
			let Arr3 = arr2.map(item=>{
				let obj = {};
				obj.name = item.name;
				obj.isSelected = item.isSelected;
				return obj;
			})
			console.log(Arr3);
			//reduce()计算数组总和
			let arrSum = [1,2,3,4,5];
			 let sum = arrSum.reduce((pre,item)=>{
			 	return pre+item
			 },0)
			 console.log(sum);
			 
			 //计算arr2 id
			 let arr3 = []
			 arr2.forEach((item,index)=>{
			 	arr3.push(item.id)
			 	
			 })
			 console.log(arr3);
			let arrRed=arr3.reduce((pre,item)=>{
			 	return pre + item;
			 },0)
			 console.log(arrRed)
			
		},

		methods: {

		}
	}
</script>
<style scoped>

</style>