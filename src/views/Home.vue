<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
	<img alt="Vue logo" src="../assets/u.jpg">
	<!-- <img alt="Vue logo" src="../assets/sr.gif"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	<Hiword msg="dsd" :num="464611111" @toparent="method1"></Hiword>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
	methods:{
		method1(e){
		console.log("Home收到数据",e);
		}
	}
}
</script>
