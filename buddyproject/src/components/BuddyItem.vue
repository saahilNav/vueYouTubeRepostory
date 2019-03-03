<template>
  <div>
    <div class="mainDiv"  v-if="buddyobj">
      <div class="tageName" >N</div>
      <div>
        <div class="buddyName">
          <div class="budyname1">{{buddyobj.name}}</div>
        </div>
        <div class="btnDiv">
          <button class="btn" @click="addBuddyMethod">Add Buddy</button>
        </div>
      </div>
    </div>

    <div class="mainDiv" v-else-if="mybuddyobjC">


      <div class="tageName">N</div>
        <div class="buddyName">
                    <div class="budyname1">{{mybuddyobjC.name}}</div>
</div>

      <!-- <div class="btnDiv"><button class="btn" @click="RemoveMethod">Remove Method</button>
   <button class="btn" @click="blockMethod">block Method</button></div>   -->


      <div class="btnFormat" style="float: right;">
            <b-dropdown
              id="ddown1"
              style="background-color: none;height: 30px;background: #f5f5f5;"
              no-caret
            >
              <template slot="button-content" id="btcontext">
                <i class="fa fa-ellipsis-h" style="font-size:36px"></i>
              </template>
              <b-dropdown-item @click="RemoveMethod">
                <i class="fa fa-trash-o" style="font-size: 16px;">
                  <span style="margin:0 5px;">Delete</span>
                </i>
              </b-dropdown-item>
              <b-dropdown-item @click="blockMethod">
                <i class="fa fa-edit" style="font-size: 16px;">
                  <span style="margin:0 5px;">Block</span>
                </i>
              </b-dropdown-item>
            </b-dropdown>
          </div>
    </div>

    <div class="mainDiv" v-else-if="blockObjItm">
      <ul style="list-style-type: none;">
        <li class="tageName">N</li>
        <li >{{blockObjItm.name}}</li>
       <div class="btnDiv"><button  class="btn" @click="unblockMethod">unblock</button></div> 
      </ul>
    </div>

    <!-- <div v-else>
      <ul>
        <li>{{!mybudiesTrue}}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "buddyItem",
  props: ["buddyobj", "mybuddyobjC", "blockObjItm"],
  computed: {
    mybudiesTrue: {
      get: function() {
        return this.$store.state.flgShowBuddyItem;
      },
      set: function(value) {
        return this.$store.dispatch("updateflgShowBuddyItem", value);
      }
    }
  },
  methods: {
    addBuddyMethod() {
      this.$store.dispatch("addBuddyItem", this.buddyobj);
      this.mybudiesTrue = false;
    },
    RemoveMethod() {
      this.$store.dispatch("addbudyLIstAgain", this.mybuddyobjC);
    },
    blockMethod() {
      this.$store.dispatch("blockList", this.mybuddyobjC);
    },
    unblockMethod() {
      this.$store.dispatch("unblockList", this.blockObjItm);
    }
  }
};
</script>

<style scoped>
.tageName {
  width: 66px;
  text-align: center;
  font-size: 38px;
  height: 64px;
  background: #f5f5f5;
  border-radius: 4px;
  line-height: 64px;
  color: #3f51b5;
  font-weight: 400;
  cursor: pointer;
      float: left;
}

.mainDiv {
  max-width: 400px;
  margin: 0 20px 15px 0;
  display: inline-block;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 15px 20px;
  color: #212121;
  font-size: 12px;
  position: relative;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.btnDiv{
  float: right;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;

  /* position: absolute;
    right: 10px; */
}
.btn {
  font-size: 12px;
  min-height: 30px;
  background-color: #fcca26;
  color: #212121;
  border-radius: 4px;
  font-weight: 400;
  padding: 2px 10px;
  min-width: 80px;
  border: none;
}
.buddyName{
        text-align: center;
        font-size: 20px;
}


.btn-secondary {
    color:none;
    background-color:none; 
   border-color:none;
}
#btcontext{
      background-color: white;
      
}
.btn-secondary{

 background-color:white  
 
}
</style>
