<template>
  <div>
      <h1>Users</h1>
      <p>유저를 검색해 주세요</p>
      <v-text-field
        v-model="userId"
        label="유저 번호를 입력하세요."
      ></v-text-field>
      <!-- <v-btn @click="$router.push({path:`users/${userId}`})">검색</v-btn> -->
      <v-btn @click="$router.push({
          name:'users-detail',
          params:{
              id:userId
          }
          })">검색</v-btn>
      <router-view></router-view>
      <!-- User의 하위경로를 설정하면 여기에 출력되게됨. -->
  </div>
</template>
<script>
export default {

    data(){
        return{
            userId:null
        }
    },
    
    // computed:{
    //     userId(){
    //         // console.log(this.$route)
    //         // console.log(this.$router)
    //         return this.$route.params.userId
    //     }
    // }
}
</script>
