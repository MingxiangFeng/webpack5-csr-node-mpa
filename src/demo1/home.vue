<template>
  <div>
    <h2>home</h2>
    <button @click="toDetail">toDetail</button>
  </div>
</template>

<script>
export default {
  methods: {
    toDetail() {
      this.$router.push({name: 'detail'})
    }
  }
}
</script>

<style>

</style>