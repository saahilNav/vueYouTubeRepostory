import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/index1'
import _ from 'lodash'
Vue.use(Vuex);
export const store = new Vuex.Store({
   state: {
       
      searchI:'',
      flgShowBuddyItem: false,
      flgShowCloseBtn: false,
      flgObjectEdited: false,
      blockList:[],
      postList: [],
      budyItem:[],
      response:null
      
   },
   actions: {

      searchI({commit},data){
       commit('setsearchI',data)
      },

       searchDataA({commit},keyWord){
         let value=api.searchData(keyWord);
         value.then(response=>{
            let value1= response.data.users;
            value1 = _.filter(value1, user => _.startsWith(user.name,keyWord) )
            console.log("value1",value1)
            //  value1=value1.filter(function(user){
            //    user.name===keyWord;
            //})
            commit('SetSearchData',value1);
         })
            },


      fetchDataFrmApi({ commit }, respdata) {
     respdata = api.fetchData();  
         respdata.then(response=>{  
      let respdata1= response.data.users;
      commit('SetFetchData',respdata1);
})
         
      },


      // fetchDataFrmApi({ commit }, respdata) {
      //    let response1 = api.searchData(respdata);  
      //    response1.then(response=>{  
      //     let response2= response.data.users;
      //     if(response2.length>0){
      //       response2 = _.filter(response2, user => _.startsWith(user.name,respdata) )

      //       commit('SetFetchData',response2); 
      //     }else{

      //       commit('SetFetchData',response2);
      //     }
      // let response3=response2.filter(function(user){
      //        user.name===respdata;
             
          
    //})
        //  },

      blockList({commit},data){
   commit('setBlockList',data)
      },

      unblockList({commit},data){
         commit('setUnblockList',data)
      },
addbudyLIstAgain({ commit }, data){

   commit('setaddListAgain',data)
},
      addBuddyItem({ commit }, data) {
         commit('setaddBuddyItem',data)
      },

      updateflgShowBuddyItem({ commit }, value) {
         commit('setflgShowBuddyItem', value)
      },

      flgShowCloseBtn({commit},value){
    commit('setFlgShowCloseBtn',value)
      },
      flgObjectEdited({ commit }, value) {
         commit('SetflgObjectEdited', value)
      }
   },
   mutations: {
      setsearchI(state,data){
      state.searchI=data
      },

   SetSearchData(state,data){
         console.log("mutation",data)
         // state.budyItem=data;
      state.postList=data
      },

      SetFetchData(state, data) {
      // state.postList.filter(post => {
      //       return post.toLowerCase().includes(data.toLowerCase())})
         state.postList = data;
      },
      setfetchTextArea(state,data){
    state.response=data
      },
     
      setaddListAgain(state,value){

state.budyItem.splice(state.budyItem.indexOf(value), 1);
       
                  state.postList.push(value)
       },
       setUnblockList(state,data){
         state.blockList.splice(state.budyItem.indexOf(data), 1);
       
         state.budyItem.push(data)
       },
       setBlockList(state,value){
         state.budyItem.splice(state.budyItem.indexOf(value), 1);
       
         state.blockList.push(value)
       }

       ,
      setflgShowBuddyItem(state, value) {
         state.flgShowTextArea = value;
      },
      setFlgShowCloseBtn(state, value) {
         state.flgShowCloseBtn = value;
      },
      SetflgObjectEdited(state, value) {
         state.flgObjectEdited = value;
      }, 
      setaddBuddyItem(state, data) {
//        let lenP= state.postList.length
//          console.log("postList",lenP)
 state.postList.splice(state.postList.indexOf(data), 1);
//    let len= state.budyItem.length
//    console.log("length",len)
         state.budyItem.push(data)
      },
   }, 

   getters: {
      getsearchI(state){
         return state.searchI;
      }
      ,
      getSearchData(state){
         // if(state.budyItem){
         // return state.budyItem;
         // }else{
     return state.postList;
      }
      ,
      getUnblockList(state){
        return  state.budyItem;
      },
      getBlockList(state){
       return state.blockList;
      },
      getaddBuddyItem(state) {
         return state.budyItem;
      },
      getFetchData(state) {
        
         return state.postList;
      },

      getisSHowPost(state) {
         state.isSHowPost = true
      },

      getflgShowBuddyItem(state) {
         return state.flgShowBuddyItem=true;
      },
      getEnablePTextAreaFlag(state) {
         return state.flgShowTextArea;
      },
      getFetchDatId(state, id) {
         state.postList.find(user => user.id === id)
      },

      getflgObjectEdited(state) {
         return state.flgObjectEdited;
      }
   },
},
)

export default store;




