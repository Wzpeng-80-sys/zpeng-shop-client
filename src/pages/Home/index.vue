<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <!-- <Floor/> -->
        <Floor v-for="floor in floors" :key="floor.id" :floor='floor'/>
        <Brand/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListContainer from './ListContainer'
import TodayRecommend from './TodayRecommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import Floor from './Floor'


export default {
    name: 'Home',
    mounted(){
        this.$store.dispatch('getRecommends')
        this.$store.dispatch('getFloors')
    },
    computed:{
        ...mapState({
            Floors:state => state.home.floors
        })
    },
    components:{
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brand
    }
}
</script>

<style lang="less" scoped>

</style>
