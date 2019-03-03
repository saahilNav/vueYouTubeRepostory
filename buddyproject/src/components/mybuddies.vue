<template>
  <div>
    <div>helo i am mybuddies"</div>
   <buddyItem   v-for="mybuddyobj in  mybuddyobjG"  :mybuddyobjC="mybuddyobj" ></buddyItem>
  </div>
</template>

<script>
import BuddyItem from './BuddyItem.vue'
export default {
  name:'mybuddies',
components:{
   BuddyItem
  },
  data(){
    return{
 msg:"sahil sharma",
    }
  },
  computed:{
  mybuddyobjG:{ 
   get: function() { 
        return this.$store.state.budyItem;
 },
  set: function(value) {
    return this.$store.dispatch("addBuddyItem", value);
 }
   },
      mybudiesTrue:{
   get: function() {
        return this.$store.state.flgShowBuddyItem;
 },
  set: function(value) {
    return this.$store.dispatch("updateflgShowBuddyItem", value);
 }
 } 
  }
  

}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
