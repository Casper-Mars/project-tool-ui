<template>
    <el-container>
        <el-header>
            <h2>基础设置</h2>
        </el-header>
        <el-main>
            <el-form v-model="baseInfo">
                <el-form-item label="基础包路径">
                    <el-input v-model="baseInfo.basePackagePath"/>
                </el-form-item>
                <el-form-item label="作者名称">
                    <el-input v-model="baseInfo.author"/>
                </el-form-item>
                <el-form-item label="工作目录">
                    <el-input v-model="baseInfo.workspace"/>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <el-button type="primary" @click="save">保存</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import BaseSetting from "../../entity/setting/BaseSetting";

    export default {
        name: "Base",
        methods: {
            save: function () {
                console.log(this.baseInfo);
                this.$api.post(
                    '/api/setting/base',
                    this.baseInfo,
                    (data) => {
                        this.$message.success("保存成功");
                    },
                    (data) => {
                        this.$message.error("保存失败");
                    },
                    (res) => {
                        this.$message.error("程序异常");
                    }
                )
            }
        },
        mounted() {
            this.$api.get(
                '/api/setting/base',
                null,
                (data) => {
                    let info = data.data;
                    let baseInfo0 = new BaseSetting();
                    baseInfo0.workspace = info.workspace;
                    baseInfo0.author = info.author;
                    baseInfo0.basePackagePath = info.basePackagePath;
                    this.baseInfo = baseInfo0;
                },
                (data) => {
                    this.$message.error("无法获取基本设置信息");
                },
                (res) => {
                    this.$message.error("程序异常");
                }
            )
        },
        data() {
            return {
                baseInfo: new BaseSetting(),
            }

        }

    }
</script>

<style scoped>

</style>