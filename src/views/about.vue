<template>
    <div>
        <div>count: {{count}}</div>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    // data(){
    //     return {
    //         count: 0
    //     }
    // },
    // computed: {
    //     count(){
    //         return this.$store.state.count
    //     }
    // },
    computed: mapState({
        count: state => state.count
    }),
    methods:{
        add() {
            this.$store.commit('increment')
        },
        reduce() {
            // this.count--
        }
    }
}
</script>