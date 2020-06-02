<template>
    <div class="grad">
        <Head/>
        <router-view/>
    </div>
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
    .grad {
     /*// background-image: linear-gradient(#e66465, #9198e5);*/
    }
</style>