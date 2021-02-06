<template>
	<div class="headerd">
		<div class="headerRe">
			<img @click="GoBack()" src="../assets/ret.png.png"/>
			<p>{{title}}</p>
			<img src="../assets/搜索.png" />
		</div>

	</div>
</template>

<script>
	import { Toast } from 'vant';
	export default {
		name: 'headerd',
		components: {},
		props: {
			title: {
				type: String,
				default: '头部'
			}
		},
		data() {
			return {}
		},
		created: function() {

		},

		methods: {
			GoBack() {
				this.$emit('goBack',this.title)
			}
		}
	}
</script>
<style scoped>
	.headerRe {
		display: flex;
		background: #F2F2F2;
		height: 1rem;
		align-items: center;
		-webkit-justify-content: space-between;
	}
	
	.headerRe p {
		color: #666;
		font-size: .33rem;
		line-height: 1rem;
	}
	
	.headerRe img:first-of-type {
		width: .4rem;
		height: .5rem;
		padding: 0 .1rem;
	}
	
	.headerRe img:last-of-type {
		width: .6rem;
		height: .6rem;
		padding: 0 .2rem;
	}
</style>