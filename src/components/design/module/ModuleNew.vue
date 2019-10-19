<template>
    <el-container>
        <el-main>
            <el-form v-model="dto">
                <el-form-item label="名称">
                    <el-input v-model="dto.name"/>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="dto.desc"/>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer style="float: right">
            <el-button type="primary" @click="submitNew">提交</el-button>
        </el-footer>
    </el-container>
</template>

<script>
    import ModuleDto from '@/entity/module/ModuleDto'

    export default {
        name: "ModuleNew",
        props: {
            parentId: String,
            saveModule: Function
        },
        methods: {
            submitNew: function () {
                this.$api.post(
                    '/api/module',
                    this.dto,
                    (data) => {
                        this.$message.success(data.data);
                    },
                    (data) => {

                    },
                    (res) => {

                    }
                );
                if (this.saveModule instanceof Function) {
                    this.saveModule(this.dto);
                }
            }
        },
        data() {
            return {
                dto: new ModuleDto
            }
        }

    }
</script>

<style scoped>

</style>