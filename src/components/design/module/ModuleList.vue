<template>
    <el-container>
        <el-main>
            <el-divider/>
            <el-form v-model="curModule" v-if="curModule.id !=='0'">
                <el-form-item>
                    <el-button @click="backTo">返回上一页</el-button>
                    <el-button type="primary">保存</el-button>
                </el-form-item>
                <el-form-item label="名称" style="width: 200px">
                    <el-input v-model="curModule.name"/>
                </el-form-item>
                <el-form-item label="描述" style="width: 200px">
                    <el-input v-model="curModule.desc"/>
                </el-form-item>
                <el-divider>子模块</el-divider>
            </el-form>
            <div style="float: left;padding: 5px">
                <el-button type="primary" @click="addPanel=true">添加</el-button>
            </div>
            <el-table
                    :data="curModule.children"
                    border
            >
                <el-table-column
                        prop="id"
                        label="id"
                ></el-table-column>
                <el-table-column
                        prop="name"
                        label="名称"
                >
                </el-table-column>
                <el-table-column
                        prop="desc"
                        label="描述"
                ></el-table-column>
                <el-table-column
                        label="操作"
                >
                    <template slot-scope="scope">
                        <el-button type="warning" size="small" @click="modifyModule(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog
                :visible.sync="addPanel"
                title="添加模块"
        >
            <el-form v-model="newModule">
                <el-form-item label="名称">
                    <el-input v-model="newModule.name"/>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="newModule.desc"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitAdding">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-container>
</template>

<script>
    import ModuleEntity from '@/entity/module/ModuleEntity'
    import ModuleDto from "@/entity/module/ModuleDto";

    export default {
        name: "ModuleList",
        props: {
            id: String
        },
        mounted() {
            this.refresh(this.id);
        },
        data() {
            return {
                curModule: new ModuleEntity(),
                addPanel: false,
                newModule: new ModuleDto()
            }
        },
        methods: {
            refresh: function (id) {
                this.$api.get(
                    '/api/module/detail',
                    {
                        id: id
                    },
                    (data) => {
                        // debugger;
                        console.log("refresh");
                        let code = data.code;
                        if (code === 200) {
                            this.curModule = data.data;
                        }
                    },
                    (data) => {

                    },
                    (data) => {

                    }
                );
            },
            submitAdding: function () {
                this.newModule.parentId = this.curModule.id;
                this.$api.post(
                    '/api/module',
                    this.newModule,
                    (data) => {
                        let code = data.code;
                        if (code !== 200) {
                            this.$message.error("添加失败");
                        } else {
                            this.$message.success("添加成功");
                            this.refresh(this.curModule.id);
                            this.addPanel = false;
                        }
                    },
                    (data) => {

                    },
                    (res) => {

                    }
                );
                this.newModule = new ModuleDto();
            },
            modifyModule: function (module) {
                this.refresh(module.id);
            },
            backTo: function () {
                this.refresh(this.curModule.parentId);
            }

        }
    }
</script>

<style scoped>

</style>