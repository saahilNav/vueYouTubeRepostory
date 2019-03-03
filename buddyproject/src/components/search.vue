<template>
    <div>
  
      <div  style="position: relative;margin: 0 220px 15px 0;
    color: #565b65;"> 
      
      <!-- <input  v-model="textVal" /> -->
    <input  @input="onInput" placeholder="Search " />
</div>
  </div>
</template>


<script>
export default {
name:'search',
data(){
    return{
     textAreaVal:'',
  textVal:''
    }
},

 methods: {
  // onInput(){
  //     this.dispatch('fetchTextArea',this.textAreaVal)
  //     console.log("helo",this.textAreaVal)
  //   },
// searchI:{
//    get: function() {
//         return this.$store.state.searchI;
//  },
//   set: function(value) {
//     return this.$store.dispatch("searchI", value)
   
//  }
//    },
    onInput:function(event){
  this.textAreaVal=event.target.value
      // console.log("this.textAreaVal",this.textAreaVal)   
      // this.$store.dispatch('searchDataA',this.textAreaVal)
            this.$store.dispatch('searchDataA',this.textAreaVal)

      // this.$emit('termChange',event.target.value)
       console.log("onInput FIr",this.textAreaVal)
    }

    
  },
  mounted(){
  }
}
</script>

<style scoped>
input{
    width: 60%;
    line-height: 34px;
    height: 40px;
    border-radius: 4px;

    /* box-shadow: none; */
}

</style>
