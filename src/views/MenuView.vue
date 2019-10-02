<template>
    <menu-component :menuList="menuList"/>
</template>

<script>
    import MenuComponent from '../components/menu/MenuComponent'

    export default {
        name: "MenuView",
        components: {
            MenuComponent,
        },
        data() {
            return {
                menuList: [
                    {
                        name: "系统设置",
                        icon: "el-icon-setting",
                        children: [
                            {
                                index: "/sys/setting/doc",
                                name: "接口文档",
                            },
                            {
                                index: "/sys/setting/code",
                                name: "代码生成"
                            },
                            {
                                index: "/sys/setting/database",
                                name: "数据库"
                            }
                        ]
                    },
                    {
                        name: "设计开发",
                        icon: "el-icon-s-management",
                        children: [
                            {
                                name: "接口设计",
                                index: "/design/interface"
                            },
                            {
                                name: "pojo管理",
                                index: "/design/pojo"
                            },
                            {
                                name: "数据库设计",
                                index: "/design/database"
                            }
                        ]
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>