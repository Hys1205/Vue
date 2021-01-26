<template>
  <div class="about">
	<div>
		<h2>点击案例用来加减数</h2>
			<button @click="reduce">-</button>
			<span>{{num}}</span>
			<button @click="add">+</button>
			<p>{{normal()}}</p>
			<p>{{comput1}}</p>
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
			normal(){
				console.log("普通方法执行");
				return "普通方法"
			},
			reduce(){
				this.num--;
			},
			add(){
				this.num++;
			}
		},
		computed:{
			comput1(){
				console.log("属性执行了");
				return "嘻嘻嘻"+this.num
			}
		},
		watch:{
			num(newValue,oldValue){
				console.log("监听动态变化",newValue,oldValue);
			}
		}
	}
	
	// 方法在methods中编写  当页面刷新时 普通方法执行
	// 计算机属性  在computed中   只有计算机属性关联对象发生变化   计算机属性重新计算
	// 侦听器   在watch中编写   可以针对指定数量变化
	
</script>