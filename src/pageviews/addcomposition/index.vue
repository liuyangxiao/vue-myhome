<template>
    <div class="allbox">
        <el-row class="heightMax">
            <el-col class="heightMax" style="background: #404040;" :span="4">
                <div>
                    <cataloglist style="padding-top: 30px"/>
                </div>
            </el-col>
            <el-col style="background: #42b983" :span="6">
                <div>
                    33333
                </div>
            </el-col>
            <el-col :span="10">
                <div>
                    222
                </div>

            </el-col>
        </el-row>
    </div>

</template>

<script>
    import cataloglist from './CatalogList'

    export default {
        name: "index",
        components: {
            cataloglist,
        }
    }
</script>

<style scoped>
    .allbox {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
    }

    .heightMax {
        height: 100%
    }
</style>