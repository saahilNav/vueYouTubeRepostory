<template>
<div>
  <div class="demo" style="margin-top: 10%;    margin-left: 70px;float: left; width: 45%;">

  helo ia am buddy addBuddy
 <buddyItem  v-for="buddyobj1 in postData" :key="buddyobj1.id" :buddyobj="buddyobj1"></buddyItem>
  </div>
 
    </div>
</template>

<script>
import BuddyItem from './BuddyItem.vue' ;
import { mapGetters } from 'vuex';
export default {
name:'addBuddy',
components:{
   BuddyItem
  },
computed:{
...mapGetters(['getFetchData']),
  postData:{
   get: function() {
        return this.$store.state.postList;
 },
  set: function(value) {
    return this.$store.dispatch("fetchDataFrmApi", value)
   
 }
   },
   
  },
  methods:{
     fetchDat(){
       this.$store.dispatch('fetchDataFrmApi');
     },
    
  },
  mounted(){
this.fetchDat();
  }

}
</script>

<style>

</style>
 