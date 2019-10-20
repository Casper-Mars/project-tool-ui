<template>
    <el-container>
        <el-container>
            <el-main>
                <el-row>
                    <el-form v-model="curPojo" label-position="right">
                        <el-form-item label="名称">
                            <el-input v-model="curPojo.name"/>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input v-model="curPojo.desc"/>
                        </el-form-item>
                        <el-form-item label="所属模块">
                            <el-cascader :options="moduleLists" v-model="curPojo.moduleId" :props="props" separator=".">
                            </el-cascader>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-select v-model="curPojo.type">
                                <el-option v-for="(item,index) in pojoTypeList" :value="item.code" :key="item.code"
                                           :label="item.name">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-divider>属性</el-divider>
                <el-row style="float: left">
                    <el-button type="primary">添加属性</el-button>
                </el-row>
                <el-row>
                    <el-table
                            :data="tableData"
                    >
                        <el-table-column
                                label="名称"
                                prop="name"
                        ></el-table-column>
                        <el-table-column
                                label="类型"
                                prop="type"
                        ></el-table-column>
                        <el-table-column
                                label="描述"
                                prop="desc"
                        ></el-table-column>
                        <el-table-column
                                label="操作"
                        >
                            <template slot-scope="scope">
                                <el-button type="danger" @click.native.prevent="deleteAttr(scope.$index)">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </el-main>
            <el-footer>
                <el-button type="primary" @click="addOrUpdatePojo">保存</el-button>
            </el-footer>
        </el-container>
        <el-container>
            <el-dialog
                title="添加属性"
                :visible.sync="addingPanel"
            >
                <el-form v-model="curAttr">
                    <el-form-item label="名称">
                        <el-input v-model="curAttr.name"/>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="curAttr.desc"/>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="curAttr.refId">

                        </el-select>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </el-container>
    </el-container>
</template>

<script>
    import PojoDto from "@/entity/pojo/PojoDto";
    import AttrEntity from "@/entity/AttrEntity";
    import RuleEntity from "@/entity/RuleEntity";

    export default {
        name: "PojoNew",
        mounted() {
            this.initModuleList();
            this.initTypeList();
        },
        data() {
            return {
                curPojo: new PojoDto(),
                moduleLists: [],
                addingPanel:false,
                props: {
                    value: "id",
                    label: "name"
                },
                pojoTypeList: [],
                tableData: [
                    {
                        name: "test",
                        type: "String",
                        desc: "test",
                        refId:'',
                        rule: new RuleEntity(),
                    }
                ],
                curAttr: new AttrEntity(),
            }
        },
        methods: {
            addOrUpdatePojo: function () {
                console.log(this.curPojo);
            },
            initModuleList: function () {
                this.$api.get(
                    '/api/module/tree',
                    {
                        parentId: 0
                    },
                    (data) => {
                        let code = data.code;
                        if (code !== 200) {
                            this.$message.error(data.msg);
                        } else {
                            this.moduleLists = data.data;
                        }
                    },
                    (data) => {

                    },
                    (res) => {

                    }
                );
            },
            initTypeList: function () {
                this.$api.get(
                    '/api/pojo/type/list',
                    null,
                    (data) => {
                        let code = data.code;
                        if (code !== 200) {
                            this.$message.error(data.msg);
                        } else {
                            this.pojoTypeList = data.data;
                        }
                    }
                );
            },
            deleteAttr: function (index) {
                this.tableData.splice(index, 1);
            },
            addAttr: function () {

            }

        }

    }
</script>

<style scoped>

    .el-form-item {
        width: 200px;
    }
</style>