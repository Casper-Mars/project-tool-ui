<template>
    <el-container>
        <el-header>
            <h2>接口文档设置</h2>
        </el-header>
        <el-main>
            <el-divider content-position="left">服务器资料设置</el-divider>
            <el-form v-model="docInfo">
                <el-form-item label="用户名">
                    <el-input v-model="docInfo.username"/>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="docInfo.password"/>
                </el-form-item>
                <el-form-item label="服务器地址">
                    <el-input v-model="docInfo.url"/>
                </el-form-item>
                <el-form-item label="端口">
                    <el-input v-model="docInfo.port"/>
                </el-form-item>
                <el-form-item label="服务器部署路径">
                    <el-input v-model="docInfo.serverDeployPath"/>
                </el-form-item>
            </el-form>
            <el-divider content-position="left">markdown文档配置</el-divider>
            <el-form v-model="docInfo">
                <el-form-item label="文件夹地址">
                    <el-input v-model="docInfo.markdownPath"/>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <el-button type="primary" @click="save">保存</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import DocSetting from "../../entity/setting/DocSetting";

    export default {
        name: "Document",
        mounted() {
            this.$api.get(
                '/api/setting/doc',
                null,
                (data) => {
                    let info = data.data;
                    let docInfo0 = new DocSetting();
                    docInfo0.markdownPath = info.markdownPath;
                    docInfo0.username = info.username;
                    docInfo0.password = info.password;
                    docInfo0.serverDeployPath = info.serverDeployPath;
                    docInfo0.url = info.url;
                    docInfo0.port = info.port;
                    this.docInfo = docInfo0;
                },
                (data) => {

                },
                (res) => {

                }
            );
        },
        methods: {
            save: function () {
                console.log(this.docInfo);
                this.$api.post(
                    '/api/setting/doc',
                    this.docInfo,
                    (data) => {
                        this.$message.success("保存成功");
                    },
                    (data) => {
                        this.$message.error("保存失败");
                    },
                    (res) => {
                        this.$message.error("程序异常");
                    }
                );
            }
        },
        data() {
            return {
                docInfo: new DocSetting()
            }
        }
    }
</script>

<style scoped>

</style>