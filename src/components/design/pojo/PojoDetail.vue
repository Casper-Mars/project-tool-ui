<template>
    <div>
        <el-container>
            <el-header style="align-items: flex-start;font-size: x-large">
                <span>新建</span>
            </el-header>
            <el-main>
                <el-divider content-position="left">基本信息</el-divider>
                <el-form v-model="pojoInfo" :inline="true">
                    <el-form-item label="名称">
                        <el-input v-model="pojoInfo.name"></el-input>
                    </el-form-item>
                    <el-form-item label="类型">
                        <el-select v-model="pojoInfo.type" value="">
                            <el-option v-for="(item,index) in typeList" :key="index" :label="item.name"
                                       :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="描述">
                        <el-input v-model="pojoInfo.desc"></el-input>
                    </el-form-item>
                </el-form>
                <el-divider content-position="left">属性信息</el-divider>
                <div style="justify-content: flex-start;float: left">
                    <el-button type="primary" style="align-self:flex-start;margin-bottom: 10px"
                               @click="initAddAttrPanel">新增属性
                    </el-button>
                </div>
                <el-table
                        border
                        :data="testTableData"
                >
                    <el-table-column
                            prop="name"
                            label="名称"
                    >
                    </el-table-column>
                    <el-table-column
                            prop="type"
                            label="类型"
                    ></el-table-column>
                    <el-table-column
                            prop="desc"
                            label="描述"
                    ></el-table-column>
                    <el-table-column
                            label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button type="primary" @click="showRule(scope.row)">查看规则</el-button>
                            <el-button type="danger" @click="deleteAttr(scope.row)">删除属性</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
        <el-dialog
                title="属性限制"
                :visible.sync="rulePanel"
        >
            <PojoRule :attr="curAttr"/>
        </el-dialog>
        <el-dialog
                title="新增属性"
                :visible.sync="attrPanel"
        >
            <pojo-add-new-attr :call-back="addNewAttr"/>
        </el-dialog>
    </div>

</template>

<script>
    import PojoRule from "./PojoRule";
    import PojoAddNewAttr from "./PojoAddNewAttr";

    export default {
        name: "PojoDetail",
        components: {
            PojoRule,
            PojoAddNewAttr
        },
        methods: {
            showRule: function (row) {
            debugger;
                this.curAttr = row;
                this.rulePanel = true;
            },
            deleteAttr(attr) {
                let index = this.testTableData.indexOf(attr);
                if (index !== -1) {
                    this.testTableData.slice(index, 1)
                }
            },
            initAddAttrPanel: function () {
                this.attrPanel = true;
            },
            addNewAttr: function (data) {
                console.log(data);
                this.testTableData.push(data);
                this.attrPanel = false;
            }
        },
        data() {
            return {
                pojoInfo: {
                    name: "",
                    type: "",
                    desc: ""
                },
                typeList: this.$store.getters.pojoTypeList,
                rulePanel: false,
                testTableData: [
                    {
                        name: "test",
                        type: "String",
                        desc: "测试使用",
                        rule: {
                            pattern: "",
                            max: "",
                            min: "",
                            notNull: 0
                        }
                    }
                ],
                curAttr: {},
                attrPanel: false,
            }
        },
    }
</script>

<style scoped>

</style>