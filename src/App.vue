<template>
  <div id="app">
    
    <router-view/>
   	<svg-icon></svg-icon>	
  </div>
</template>

<script>
import svgIcon from './components/common/svg';
export default {
  name: 'App',
  components:{
    svgIcon
  }
}
</script>

<style lang="scss"> 
  	@import './style/common';
</style>
