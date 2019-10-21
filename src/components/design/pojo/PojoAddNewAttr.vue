<template>
    <el-container>
        <el-main>
            <el-form v-model="newAttr" label-position="right">
                <el-form-item label="名称">
                    <el-input v-model="newAttr.name"/>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input v-model="newAttr.desc"/>
                </el-form-item>
                <el-form-item label="类型">
                    <el-input v-model="newAttr.type"/>
                    <el-button type="primary" size="small" round @click="refPanel=true">添加引用</el-button>
                </el-form-item>
                <el-form-item label="是否可空">
                    <el-radio-group v-model="newAttr.rule.notNull">
                        <el-radio :label="true">可空</el-radio>
                        <el-radio :label="false">非空</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="最大值">
                    <el-input v-model="newAttr.rule.max"/>
                </el-form-item>
                <el-form-item label="最小值">
                    <el-input v-model="newAttr.rule.min"/>
                </el-form-item>
                <el-form-item label="正则表达式">
                    <el-input v-model="newAttr.rule.pattern"/>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer>
            <div style="float: right">
                <el-button type="primary" @click="addNewAttr">确认</el-button>
            </div>
        </el-footer>
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
                                prop="id"
                                label="id"
                        ></el-table-column>
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
                        >
                        </el-table-column>
                        <el-table-column
                                label="操作"
                        >
                            <template slot-scope="scope">
                                <el-button size="mini" type="primary" round>选择</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-dialog>
    </el-container>
</template>

<script>
    import AttrEntity from "@/entity/AttrEntity";

    export default {
        name: "PojoAddNewAttr",
        props: {
            callBack: Function,
        },
        mounted() {
            this.initTypeList();
        },
        methods: {
            addNewAttr: function () {
                if (this.callBack instanceof Function) {
                    this.callBack(this.newAttr);
                }
            },
            initTypeList: function () {
                this.$api.get(
                    '/api/pojo/ref/list',
                    null,
                    (data) => {
                        let code = data.code;
                        if (code !== 200) {
                            this.$message.error(data.msg);
                        } else {
                            this.pojoRefList = data.data;
                        }
                    }
                );
            },
        },
        data() {
            return {
                newAttr: new AttrEntity(),
                refPanel: false,
                pojoRefList: [],
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