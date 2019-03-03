<template>
  <div>
    <div class="head1"><headerBuddy></headerBuddy></div>
    <div class="option"><optionItem></optionItem></div>
    <div class="search" style=" float: left;width: 55%;"><search></search></div>
      <router-view></router-view>
  </div>
</template>

<script>
import optionItem from './components/optionItem.vue'
import search from './components/search.vue'
import headerBuddy from './components/headerBuddy.vue'
export default {
  name: 'app',
  components: {
   optionItem,
   search,
   headerBuddy
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
