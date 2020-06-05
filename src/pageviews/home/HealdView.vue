<template>
    <el-row>
        <el-col :span="12">
                <span style="font-size:60px;color: #409EFF" class=" iconfont icon-zhuye_wodebaobei">
                       <span style="font-size: 40px"> 😀</span>
                    </span>
        </el-col>
        <el-col :span="6">
            <i style="font-size:60px;color: #409EFF;text-align: left;background: red" class="iconfont">&#xe691;</i>
            <span style="font-size: 40px"> 粉</span>
        </el-col>
        <el-col :span="6" style="text-align: right;background: red">
            <span style="font-size: 40px;">😀</span>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "HealdView"
    }
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 1857815 */
        src: url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.eot');
        src: url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.woff') format('woff'),
        url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1857815_doylxn3ef9b.svg#iconfont') format('svg');
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>