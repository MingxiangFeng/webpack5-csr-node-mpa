<template>
  <div>
    <span class="nav">113131</span>
    <button @click="sayName">sayName</button>
  </div>
</template>

<script>
const mock = {
  // name: {
  //   firstName: 'feng',
  //   lastName: 'mingxiang'
  // }
}
export default {
  data() {
    return {
      name: mock?.name
    }
  },
  methods: {
    sayName() {
      alert(`my name is ${this.name?.firstName} ${this.name?.lastName}`)
    }
  }
}
</script>

<style scoped>
.nav{
  display: inline-block;
  width: 200px;
  height: 100px;
  background-color: red;
}
</style>