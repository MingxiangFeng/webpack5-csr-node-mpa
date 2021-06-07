<template>
  <div>
    <h2>home</h2>
    <button @click="toHome">toHome</button>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style>

</style>