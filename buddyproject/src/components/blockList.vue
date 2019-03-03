<template>
    <div>

         <div><buddyItem v-for="blockObjItm in   blockObj"  :blockObjItm="blockObjItm"  :key="blockObjItm"></buddyItem></div>
    </div>
</template>

<script>
  import BuddyItem from './BuddyItem.vue' ;
export default {
    name:'blockList',
components:{
   BuddyItem
  },
 computed:{
  blockObj:{
   get: function() {
        return this.$store.state.blockList;
 },
  set: function(value) {
    return this.$store.dispatch("blockList", value);
 }
   },
 }
}
</script>

<style>

</style>
