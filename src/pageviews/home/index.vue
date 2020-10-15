<template>
    <el-container>
        <el-header class="nomp">
            <Head/>
        </el-header>
        <el-main class="content" style="overflow:hidden">
            <router-view/>
        </el-main>
        <el-footer>
            底下的东西
        </el-footer>
    </el-container>
</template>

<script>
    import Head from './HealdView'

    export default {
        name: "home",
        components: {
            Head
        },
        methods: {
            testNNN() {
                //document.title="测试"
                /*/\.vue$/*/
                //return require('./')
                const allComponents = require.context('@/pageviews/', true, /index.vue$/)
                let res_components = {}
                let res_data = []
                allComponents.keys().forEach(fileName => {
                    let comp = allComponents(fileName)
                    res_components[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default
                    // res_data.push(comp.default.__file)
                    let fName = fileName.replace('/index.vue', '').replace('./', '');
                    res_data.push(fName)
                })
                return res_data
            },
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
        display: flex;
        min-height: 520px;
        justify-content: center;
        align-items: center;
    }
</style>