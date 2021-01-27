<template>
	<div class="child">
		 <button @click="send()" :style="{Background:Background,width:width,height:height,color:activeColor,background:Background,borderRadius:borderRadius,fontSize:fontSize}">{{title}}</button>
	</div>
</template>

<script>
	import { Toast } from 'vant';

	export default {
		name: 'child',
		props:{
			 title:{
			 	type:String,
			 	default:'确定'
			 },
			 Background:{
			 	type:String,
			 	default:'#449aff'
			 },
			 width:{
			 	type:String,
			 	default:'100px'
			 },
			 height:{
			 	type:String,
			 	default:'50px'
			 },
			 activeColor:{
				type: String,
				default:'#ffffff'
			},
			borderRadius:{
				type: String,
				default:'10px'
			},
			fontSize:{
				type: String,
				default:'10px'
			}
		},
		computed: {
		 
		},
		data() {
			return {
				  

			}
		},
		created: function() {
		 
			
		},

		methods: {
            send(){
            	this.$emit('sengMe',this.title);
            }
		}
	}
</script>
<style scoped>
	.child{
		text-align: center;
		position:relative;
	}
 button{
  height: 30px;
    border-radius:20px;
    color:#ffffff;
    font-size:14px;
   	box-shadow: 0 2px 6px rgba(0,0,0,.3);
	background: #449aff; /* Old browsers */
	background: -moz-linear-gradient(left, #449aff 0%, #37d5fc 100%); /* FF3.6-15 */
	background: -webkit-linear-gradient(left, #449aff 0%,#37d5fc 100%); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(to right, #449aff 0%,#37d5fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	transition: all .3s;
 }
</style>{
	
}
