<template>
    <el-container>
        <el-header>
            <main-header/>
        </el-header>
        <el-main>
            <el-container>
                <el-aside>
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