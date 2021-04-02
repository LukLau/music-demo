<template>
  <div id="app">
    <TopHead/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TopHead from './components/TopHead.vue';



export default {
  name: 'App',
  components: {
    TopHead
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
