<template>
<li  class="list-group-item" @click="onVedioSelect">
<img class="mr-3" :src="thumbnailUrl"/>
<div class="media-body">
{{ videoObjItem.snippet.title }}
</div>
</li>
</template>
<script>
export default{
    name:'VideosListItem',
    props:['videoObjItem'],
    computed:{
        thumbnailUrl(){
       return this.videoObjItem.snippet.thumbnails.default.url;
    }},
    methods:{
       onVedioSelect(){

           this.$emit('videoSelect',this.videoObjItem)
       } 
    }
};
</script>
<style scoped>
li{
    display:flex;
    cursor:pointer
}
li:hover{
    background-color:#eee;
}
</style> 