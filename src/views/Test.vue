<template>
    <div>
        <h1>test</h1>
        <p>test 번호는 {{testNumver}} 입니다.</p>
    </div>
</template>
<script>
export default {
    computed:{
        testNumver(){
            return this.$route.params.testNumver;
        }
    }

}
</script>
