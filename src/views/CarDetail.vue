<template>
    <div>
        <h1>carDetail</h1>
        <p>{{kindView}}</p>
        <v-btn @click="$router.push({name:'car-edit'})">수정</v-btn>
    </div>
</template>

<script>
export default {
    props:['local'],
    computed:{
        kindView(){
            return this.$route.params.id
        }
    }



}
</script>