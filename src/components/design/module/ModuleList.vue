<template>
    <el-container>
        <el-main>
            <el-table
                    :data="tableData"
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
                        <el-button type="primary" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "ModuleList",
        data() {
            return {
                tableData: []
            }
        }
    }
</script>

<style scoped>

</style>