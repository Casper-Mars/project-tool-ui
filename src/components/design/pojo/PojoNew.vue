<template>
    <el-container>
        <el-container>
            <el-main>
                <el-row>
                    <el-form v-model="curPojo" label-position="right" label-width="80px" style="width: 300px">
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
                            <el-select v-model="curPojo.type" :value="curPojo.type">
                                <el-option v-for="(item,index) in pojoTypeList" :value="item.code" :key="item.code"
                                           :label="item.name">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-divider>属性</el-divider>
                <el-row>
                    <el-button type="primary" @click="addingPanel=true">添加属性</el-button>
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
                                prop="classpath"
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
        <el-dialog
                title="添加属性"
                :visible.sync="addingPanel"
        >
            <el-container>
                <el-main>
                    <el-form v-model="curAttr" label-position="right">
                        <el-form-item label="名称">
                            <el-input v-model="curAttr.name"/>
                        </el-form-item>
                        <el-form-item label="描述">
                            <el-input v-model="curAttr.desc"/>
                        </el-form-item>
                        <el-form-item label="类型">
                            <el-input v-model="curAttr.classpath"/>
                            <el-button type="primary" size="small" round @click="refPanel=true">添加引用</el-button>
                        </el-form-item>
                        <el-form-item label="是否可空">
                            <el-radio-group v-model="curAttr.rule.notNull">
                                <el-radio :label="true">可空</el-radio>
                                <el-radio :label="false">非空</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="最大值">
                            <el-input v-model="curAttr.rule.max"/>
                        </el-form-item>
                        <el-form-item label="最小值">
                            <el-input v-model="curAttr.rule.min"/>
                        </el-form-item>
                        <el-form-item label="正则表达式">
                            <el-input v-model="curAttr.rule.pattern"/>
                        </el-form-item>
                    </el-form>
                </el-main>
                <el-footer>
                    <el-button type="primary" @click="addAttr">确认</el-button>
                </el-footer>
            </el-container>
        </el-dialog>
        <el-dialog
                title="添加属性引用"
                :visible.sync="refPanel"
        >
            <el-container>
                <el-main>
                    <el-table
                            :data="pojoRefList"
                    >
                        <el-table-column
                                prop="name"
                                label="名称"
                        ></el-table-column>
                        <el-table-column
                                prop="classpath"
                                label="类路径"
                        ></el-table-column>
                        <el-table-column
                                prop="desc"
                                label="描述"
                        ></el-table-column>
                        <el-table-column
                                label="操作"
                        >
                            <template slot-scope="scope">
                                <el-button type="primary" size="small" @click="selectRef(scope.row)">选择</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-dialog>
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
            this.initPojoRefList();
        },
        data() {
            return {
                curPojo: new PojoDto(),
                moduleLists: [],
                addingPanel: false,
                refPanel: false,
                props: {
                    value: "id",
                    label: "name"
                },
                pojoTypeList: [],
                pojoRefList: [],
                tableData: [
                    {
                        name: "test",
                        classpath: "String",
                        desc: "test",
                        refId: '',
                        rule: new RuleEntity(),
                    }
                ],
                curAttr: new AttrEntity(),
            }
        },
        methods: {
            addOrUpdatePojo: function () {
                this.curPojo.attrs = this.tableData;
                const moduleIds = this.curPojo.moduleId;
                this.curPojo.moduleId = moduleIds[moduleIds.length - 1];
                console.log(this.curPojo);
                this.$api.post(
                    '/api/pojo',
                    this.curPojo,
                    (data) => {
                        let code = data.code;
                        if (code !== 200) {
                            this.$message.error(data.msg);
                        }
                    },
                    (data) => {

                    },
                    (data) => {

                    }
                );
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

                this.tableData.push(this.curAttr);
                this.addingPanel = false;
                this.curAttr = new AttrEntity();
            },
            selectRef: function (ref) {
                this.curAttr.refId = ref.id;
                this.curAttr.classpath = ref.classpath;
                this.refPanel = false;
            },
            initPojoRefList: function () {
                this.$api.get(
                    '/api/pojo/ref/list',
                    null,
                    (data) => {
                    debugger;
                        let code = data.code;
                        if (code !== 200) {
                            // this.$message.error("");
                        } else {
                            this.pojoRefList = data.data;
                        }
                    },
                    (data) => {

                    },
                    (data) => {

                    },
                );
            }

        }

    }
</script>

<style scoped>

    .el-form {
        width: 400px;
    }

    .el-input {
        width: 200px;
    }

</style>