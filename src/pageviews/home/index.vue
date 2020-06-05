<template>
    <el-container>
        <el-header class="nomp">
            <Head/>
        </el-header>
        <el-main class="content" style="overflow:hidden">
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import Head from './HealdView'

    export default {
        name: "index",
        components: {
            Head
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .nomp {
        padding: 0;
        margin: 0;
    }

    .content {
        width: 100%;
        text-align: center;
        /*  background: #409EFF;*/
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>