<template>
    <div>
        <h1>car를 변경할수있씁니다.</h1>
        {{kindView}}    
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