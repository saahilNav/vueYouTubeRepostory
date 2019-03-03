import axios from 'axios'

export default{


   users:[
       {
           id:"1" ,
           name:"sahil", 
           image : "", 
           language: "javascript" ,
                   
           },
       { 
           id:"2" ,name:"sahrma ", image : "",language: "javascript"
        },
       {
           id:"3" ,name:"Dew solution", image : "", language: "javascript"         
            },
       {
           id:"4" ,name: " Navinice", image: "", language: "javascript"         
           },
       { 
           id:"5" ,name:"Dew solution", image : "", language: "javascript"         
       }
    ],
   fetchData(){
         return axios.get('http://demo6656858.mockable.io/')
   },
   searchData(data){
    return axios.get('http://demo6656858.mockable.io/?q='+data)
}
}