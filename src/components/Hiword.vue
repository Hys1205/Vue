<template>
<div>
	<h1>嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻</h1>
	<h2>哈哈哈哈哈哈哈哈哈哈哈</h2>
	<p>我接受的msg{{msg}}</p>
	<p>我接受的num{{num}}</p>

</div>
</template>

<script>
export default {
	props:{
		msg:{
			type:String,
			default:"2021-1-08"
		},
		num:{
			type:Number,
			required:true
		}
	},
  components: {

  }
}
</script>

<style>
</style>
