<template>
  <div>
      <h1>Users Detail</h1>
      <p>유저 번호 :{{userId}}</p>
      <v-btn @click="edit" small>수정</v-btn>
      
  </div>
</template>

<script>
    export default{
        computed:{
            userId(){
                return this.$route.params.id
            }
        },
        methods:{
            edit(){
                // this.$router.push({name:"users-edit"})
                this.$router.push({path:`${this.userId}/edit`})
                // path를 쓰면 약간 헷갈리기때문에 name으로 라우팅하는것을 선호.
            }
        }
    }
</script>
