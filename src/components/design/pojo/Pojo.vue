<template>
    <el-container>
        <el-header
                style="font-size: x-large"
        >
            pojo类管理
        </el-header>

        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import SearchCondition from "@/components/SearchCondition";
    import FormSearch from "@/components/FormSearch";
    import PojoList from "@/components/design/pojo/PojoList";

    export default {
        name: "Pojo",
        components: {
            SearchCondition,
            FormSearch,
            PojoList,
        },
        data() {
            return {
                searchConditions: [
                    {
                        name: "名称",
                        value: "",
                        type: "string"
                    },
                    {
                        name: "类型",
                        value: "",
                        type: "select",
                        list: [
                            {
                                name: "bo",
                                value: "bo"
                            },
                            {
                                name: "vo",
                                value: "vo"
                            },
                            {
                                name: "dto",
                                value: "dto"
                            },
                        ]
                    },
                    {
                        name: "描述（模糊查询）",
                        value: "",
                        type: "string"
                    },
                    {
                        name: "创建时间",
                        value: "",
                        type: "datetime"
                    }
                ],
                tableData: [
                    {
                        name: "testBo",
                        type: "bo",
                        desc: "测试用bo",
                        createTime: "2019-10-01"

                    }
                ]

            }
        }

    }
</script>

<style scoped>
</style>