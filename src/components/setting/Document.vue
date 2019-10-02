<template>
    <el-container>
        <el-header>
            <h2>接口文档设置</h2>
        </el-header>
        <el-main>
            <el-divider></el-divider>
            <el-row>
                <h3>服务器资料设置</h3>
            </el-row>
            <el-row :gutter="10" style="margin: 10px">
                <el-col :span="6"><span>用户名</span></el-col>
                <el-col :span="18">
                    <el-input v-model="serviceInfo.username"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin: 10px">
                <el-col :span="6"><span>密码</span></el-col>
                <el-col :span="18">
                    <el-input v-model="serviceInfo.password"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin: 10px">
                <el-col :span="6"><span>ip</span></el-col>
                <el-col :span="18">
                    <el-input v-model="serviceInfo.ip"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="10" style="margin: 10px">
                <el-col :span="6"><span>远端路径</span></el-col>
                <el-col :span="18">
                    <el-input v-model="serviceInfo.path"></el-input>
                </el-col>
            </el-row>
            <el-divider></el-divider>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Document",
        data() {
            return {
                serviceInfo: {
                    username: "",
                    password: "",
                    ip: "",
                    port: "",
                    path: ""
                }
            }
        }
    }
</script>

<style scoped>

</style>