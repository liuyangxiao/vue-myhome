<template>
    <el-row style="background:floralwhite;height: 100%;">
        <el-col :span="8">
            <div style="padding: 10px">
                <img class="uimgr"
                     src="https://upload.jianshu.io/users/upload_avatars/14717934/2ecead36-4542-4753-8ea8-5f51ede9d7f7?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp"/>
                <i style="font-weight: bolder">咻咻的知了 </i>
            </div>
        </el-col>
        <el-col :span="8">
            <div style="height: 100%;text-align: center;margin-top: 20px">
                <span style="font-weight: bolder;size: A3;">
                    title标题
                </span>
            </div>
        </el-col>
        <el-col :span="8" style="height: 100%;text-align: right">
            <div style="height: 100%;padding: 10px;">
                <el-button
                        @click="addlistRout"
                        style="font-weight: bolder;top: 50%" round type="danger">内容添加
                </el-button>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "HealdView",
    }
</script>

<style scoped>
    .uimgr {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 4px;
    }

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