<template>
    <el-container>
        <el-header>
            <h3>模块管理</h3>
        </el-header>
        <el-main>
            <el-divider/>
            <div style="float: left;padding: 5px">
                <el-button type="primary">添加</el-button>

            </div>
            <el-table
                    :data="list"
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
                        <el-button type="warning" size="small">编辑</el-button>
                        <el-button type="success" size="small">添加子类</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    import ModuleList from "@/entity/module/ModuleList";
    export default {
        name: "ModuleView",
        mounted() {
            let test1 = new ModuleList();
            test1.desc = "测试1";
            test1.id=1;
            test1.name='测试属性';
            this.list.push(test1);
        },
        data() {
            return {
                list: []
            }
        }
    }
</script>

<style scoped>

</style>