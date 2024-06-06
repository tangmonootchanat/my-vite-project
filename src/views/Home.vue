<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/vue.svg">
    <HelloWorld msg="Welcome to your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
}
</style>
