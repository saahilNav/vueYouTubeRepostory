<template>
<ul  class="list-group col-md-4" >

<VideosListItem  v-for="video in videosObjFromApp"   
  :videoObjItem="video" 
 @videoSelect="onvideoSelect" v-bind:key="video.id"> </VideosListItem>
</ul>
</template>
 
<script>
import VideosListItem from './VideosListItem';
export default{
    name:'VideoList',
    components: {
        VideosListItem
    },
    props:['videosObjFromApp'],
    methods:{
        onvideoSelect(vedio){
            this.$emit('VedioSelect',vedio)
        }
    }   
};
</script>
<style>
</style>