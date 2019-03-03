<template>
  <div>
   <input @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  methods: {
    onInput:function(event){
      this.$emit('termChange',event.target.value)
      console.log(event.target.value)
    }
  }
}
</script>


<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
div {
  text-align: center;
  margin: 20px;
}
input {
  width:75%
}
</style>
