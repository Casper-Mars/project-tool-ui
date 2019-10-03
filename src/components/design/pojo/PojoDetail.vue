<template>
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
                        <el-button type="primary">查看规则</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "PojoDetail",
        data() {
            return {
                pojoInfo: {
                    name: "",
                    type: "",
                    desc: ""
                },
                typeList: this.$store.getters.pojoTypeList,
                testTableData: [
                    {
                        name: "test",
                        type: "String",
                        desc: "测试使用",
                        rule: {
                            pattern: "",
                            max: "",
                            min: "",
                            notNull: false
                        }
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>