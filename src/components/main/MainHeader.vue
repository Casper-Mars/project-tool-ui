<template>
    <div>
        <img src="../../assets/logo.png" class="logo" alt="">
<!--        <span style="float:left;">{{title}}</span>-->
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
        data(){
            return {
                title:"xxxxxx"
            }
        }

    }
</script>

<style scoped>

    .logo {
        justify-self: left;
        float: left;
        width: 60px;
        height: 60px;
    }


</style>