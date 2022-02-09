<template>
  <div>
      <h1>Users</h1>
      <p>이 유저는 현재 유저 번호가{{userId}}입니다.</p>
      <p>{{$route.query.group}}</p>
  </div>
</template>
<script>
export default {
    computed:{
        userId(){
            // console.log(this.$route)
            // console.log(this.$router)
            return this.$route.params.userId
        }
    }
}
</script>
