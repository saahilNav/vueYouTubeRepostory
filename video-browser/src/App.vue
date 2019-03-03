<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
 <SearchBar @termChange="OnTermChange"></SearchBar> 
 <div class="row">
   <VideoDetails  :video="selectedVideo"/>
   <VideoList @VedioSelect="OnVideoSelect"  :videosObjFromApp="videos"></VideoList>
   </div>
   </div>

</template>

<script>
import axios from 'axios';
import VideoDetails from './components/VideoDetails.vue';
import VideoList from './components/VideoList.vue'
import SearchBar from './components/SearchBar.vue'
const YOUTUBE_API_KEY = "AIzaSyB0ToJFPdt3Dp2stb8ynXqHkNe9U0ivB0c"; 

export default {
  name: 'app',
  components: {
    SearchBar,
    VideoList,
    VideoDetails
  },
  data(){
    return{videos:[],selectedVideo:null};
  },
  methods:{

 OnVideoSelect(video){
   this.selectedVideo=video;
console.log(video,"this in app.vue")
 },

   OnTermChange:function(searchTerm){
   axios.get('https://www.googleapis.com/youtube/v3/search',{
   params:{
     key:YOUTUBE_API_KEY,
     type:'vedio',
     part:'snippet',
     q:searchTerm,
   }
   }).then(response=>{this.videos=response.data.items;console.log(response)})
      
      console.log(searchTerm)
   }

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
