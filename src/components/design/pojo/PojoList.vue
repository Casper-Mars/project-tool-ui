<template>
    <el-container>
       <el-main>
           <el-divider/>
           <!--            <SearchCondition :condition="searchConditions" :num="3"/>-->
           <FormSearch :condition="searchConditions"/>
           <el-divider/>
           <router-link to="/design/pojo/new">新增</router-link>
           <el-container>
               <el-main>
                   <el-table
                           :data="tableData"
                           border
                   >
                       <el-table-column
                               prop="name"
                               label="名称"
                       >
                       </el-table-column>
                       <el-table-column
                               prop="type"
                               label="类型"
                       >
                       </el-table-column>
                       <el-table-column
                               prop="desc"
                               label="描述"
                       >
                       </el-table-column>
                       <el-table-column
                               prop="createTime"
                               label="创建时间"
                       ></el-table-column>
                       <el-table-column
                               label="操作"
                       >
                           <template slot-scope="scope">
                               <el-button circle icon="el-icon-search" ></el-button>
                               <el-button type="primary" circle icon="el-icon-edit" ></el-button>
                               <el-button type="danger" circle icon="el-icon-delete" ></el-button>
                           </template>
                       </el-table-column>
                   </el-table>
               </el-main>
           </el-container>
       </el-main>
    </el-container>
</template>

<script>
    import FormSearch from "@/components/FormSearch";
    export default {
        name: "PojoList",
        components:{
            FormSearch,
        },
        data(){
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