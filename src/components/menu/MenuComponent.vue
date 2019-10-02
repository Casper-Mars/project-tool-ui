<template>
    <el-menu
            default-active="1"
            :router="true"
            :unique-opened="true"
    >
        <el-submenu v-for="(item,index) in menuList" :key="index" :index="index+''">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item v-for="(item1,index1) in item.children" :key="index1" :index="item1.index">
                {{item1.name}}
            </el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    // menuList: [
    //     {
    //         name: "系统设置",
    //         icon: "el-icon-setting",
    //         children: [
    //             {
    //                 index: "/sys/doc/setting",
    //                 name: "接口文档设置",
    //             },
    //             {
    //                 index: "/sys/code/setting",
    //                 name: "代码生成设置"
    //             },
    //             {
    //                 index: "/sys/database/setting",
    //                 name: "数据库设置"
    //             }
    //         ]
    //     }
    // ]
    export default {
        name: "MenuComponent",
        props: {
            menuList: Array
        },
    }
</script>

<style scoped>

</style>