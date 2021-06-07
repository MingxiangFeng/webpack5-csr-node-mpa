<template>
  <div class="container">
    <h1>1112223344</h1> 
    <img src="./logo.png" alt="" />
    <span class="text">hello</span>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss" scoped>
.container{
  background-color: blue;
  .text{
    font-size: 34px;
  }
}
// .img1{
//   width: 300px;
//   height: 100px;
// }
</style>