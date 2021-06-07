<template>
  <div class="container">
    <h1>111w12323211122221112211</h1>
    <h2>reload41124442432222</h2>
    <div>2222211123422221</div>
    <span class="text">demp2</span>
    <img :src="imgSrc" alt="" />
    <headerNav />
    <router-view></router-view>
  </div>
</template>

<script>
import headerNav from './components/nav'
export default {
  name: 'app',
  components: {
    headerNav
  },
  data() {
    return {
      imgSrc: '/static/demo1/logo2.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: blue;
  .text{
    font-size: 34px;
  }
}
h2{
  color: red;
  font-size: 50px;
}
</style>