<template>
  <div>hzzz1122zz222233
    <button @click="toSearch">to search</button>
  </div>
</template>

<script>
export default {
  methods: {
    toSearch() {
      this.$router.push({name: 'search'})
    }
  }
}
</script>

<style>

</style>