<template>
    <el-container>
        <el-header style="background-color: #EBEEF5">
            <main-header/>
        </el-header>
        <el-main>
            <el-container>
                <el-aside style="background-color: #E4E7ED">
                    <menu-view/>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
    import MenuView from "@/views/MenuView";
    import MainHeader from "@/components/main/MainHeader";

    export default {
        name: "MainView",
        components: {
            MenuView,
            MainHeader,
        }
    }
</script>

<style scoped>
</style>