<template>
  <div >
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'         
// import {getCategoryList} from './api'

export default {
  name: 'App',

  mounted(){
/*     getCategoryList().then(result => {
      console.log('result',result)
    }) */

    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
