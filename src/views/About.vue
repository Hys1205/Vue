<template>
  <div class="about">
	<div>
		<h2>点击案例用来加减数</h2>
		<p>
			<button @click="reduce">-</button>
			<span>{{num}}</span>
			<button @click="add">+</button>
		</p>
	</div>
  </div>
</template>
<script>
	export default {
		data(){
			return{
				num:0
			}
		},
		methods:{
			reduce(){
				this.num--;
			},
			add(){
				this.num++;
			}
		}
	}
</script>