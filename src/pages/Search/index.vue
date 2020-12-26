<template>
    <div>
        <TypeNav></TypeNav>
        <h3>search组件</h3>
        <h4>{{$route.params.keyword}}</h4>
        <h4>{{$route.query.keyword2}}</h4>
        <h4>{{keyword3}}</h4>
        <h4>{{keyword4}}</h4>
    </div>
</template>

<script>
export default {
    name: 'Search',
    props:['keyword3','keyword4'],

}
</script>
 
<style lang="less" scoped>

</style>
