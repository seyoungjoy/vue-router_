<template>
    <div>
        <h1>test</h1>
        <!-- <p>test 번호는 {{testNumver}} 입니다.</p> -->
        <v-text-field
            v-model="kind"
            label="차종을 선택해주세요"
        ></v-text-field>

        <v-btn @click="$router.push({
            name:'car-detail',
            params:{
                id:kind
            }
        })">확인</v-btn>
        <hr>
        <hr>
        <hr>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
     data(){
        return{
            kind:null,
            local:null
        }
    },
    computed:{
        // testNumver(){
        //     return this.$route.params.testNumver;
        // },

    },
    methods:{
                modelTest(){
            console.log(this.kind);
            console.log(this.local);
        }
    }

}
</script>
