<template>
    <div class="bg">
        <!-- <el-image
                 style="width: 100%"
                 :src="b_url"/>-->
        Home
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                b_url: require('../../assets/mainbg.jpg'),
                bwtlogo_url: "https://dist-sandbox.bzzworld.com/static/bzzworld/frontend-view/icons/bwt-icon.png"
            }
        }
    }
</script>

<style scoped>
    .bg {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: red;
        background-image: url('../../assets/mainbg.jpg');
        background-size: 100% 100%;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
    }

</style>