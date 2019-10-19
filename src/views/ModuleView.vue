<template>
    <el-container>
        <el-header>
            <h3>模块管理</h3>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import ModuleList from "@/entity/module/ModuleList";
    import ModuleNew from "@/components/design/module/ModuleNew";

    export default {
        name: "ModuleView",
        components: {
            ModuleNew
        },
        mounted() {
            let test1 = new ModuleList();
            test1.desc = "测试1";
            test1.id = 1;
            test1.name = '测试属性';
            this.list.push(test1);
        },
        data() {
            return {
                list: [],
                curParentId: "0"
            }
        },
        methods: {
            addNewModule: function (dto) {

            }
        }

    }
</script>

<style scoped>

</style>