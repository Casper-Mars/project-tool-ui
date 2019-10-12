<template>
    <el-container>
        <el-header>
            <h2>数据库配置</h2>
        </el-header>
        <el-main>
            <el-form v-model="databaseInfo">
                <el-form-item label="用户名">
                    <el-input v-model="databaseInfo.username"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="databaseInfo.password"/>
                </el-form-item>
                <el-form-item label="数据库地址">
                    <el-input v-model="databaseInfo.url"/>
                </el-form-item>
                <el-form-item label="数据库实例名称">
                    <el-input v-model="databaseInfo.databaseName"/>
                </el-form-item>
                <el-form-item label="链接参数">
                    <el-input v-model="databaseInfo.linkingParam"/>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <el-button type="primary" @click="save">保存</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import DatabaseSetting from "../../entity/setting/DatabaseSetting";

    export default {
        name: "Database",
        mounted() {
            this.$api.get(
                '/api/setting/database',
                null,
                (data) => {
                    let info = data.data;
                    let databaseInfo0 = new DatabaseSetting();
                    databaseInfo0.url = info.url;
                    databaseInfo0.username = info.username;
                    databaseInfo0.password = info.password;
                    databaseInfo0.databaseName = info.databaseName;
                    databaseInfo0.linkingParam = info.linkingParam;
                    this.databaseInfo = databaseInfo0;
                },
                (data) => {
                    this.$message.error("获取数据库配置有误");
                },
                (res) => {
                    this.$message.error("程序异常")
                }
            )
        },
        methods: {
            save: function () {
                this.$api.post(
                    '/api/setting/database',
                    this.databaseInfo,
                    (data) => {
                        this.$message.success("保存成功");
                    },
                    (data) => {
                        this.$message.error("保存失败");
                    },
                    (res) => {
                        this.$message.error("程序异常")
                    }
                )
            }
        },
        data() {
            return {
                databaseInfo: new DatabaseSetting(),
            }
        }
    }
</script>

<style scoped>

</style>