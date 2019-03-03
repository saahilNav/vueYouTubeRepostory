
<template>
<!-- style="width: 20%;float: left;" -->
    <div class="option" style="background-color: rgb(56, 64, 115);width: 20%;float: left;" >
        hel
        <div style="margin-left:10px">
            
            <ul style="list-style-type:none">
                <li><router-link :to="'/mybuddies/'">
                <div><i class="fa fa-users" style="font-size:24px"></i></div><span>My Buddies</span>  </router-link>  </li>
                <li><router-link :to="'/addBuddy/'"><i class="fa fa-user-plus" style="font-size:24px"></i>
 <span>  Add Buddy</span>
              </router-link> </li>
                <li><router-link :to="'/block'">
                <div><i class="fa fa-user-times" style="font-size:24px"></i></div>
                <span>Blocked Buddies</span>   </router-link></li>
            </ul>
            
            </div> 
        

    </div>
</template>

<script>
export default {
name:"optionItem",
}
</script>

<style scoped>
li{  
        display: block;
    padding: 10px 0 30px;
    position: relative;
}
span{
        display: block;
    padding: 10px 0 30px;
    position: relative;
}

</style>
