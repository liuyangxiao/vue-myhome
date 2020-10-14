<template>
    <div id="app">
        <router-view/>
        <!---https://www.fotor.com.cn/templates/blogcover/?page=1 ----->
    </div>
</template>

<script>
    // import {getFileByindex} from '../src/router/RoutUtils'

    export default {
        name: 'App',
        mounted() {
            // getFileByindex('@/pageviews/')
        },
    }
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    /*    background-image: url("assets/mybg.jpg");*/
        /*   background-color: red;*/
        /* background-image: url("@/assets/mybg.jpg");*/
    }
</style>
