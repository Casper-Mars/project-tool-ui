import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/sys/setting/doc',
            name: 'document',
            component: () => import('./components/setting/Document')
        },
        {
            path: '/sys/setting/base',
            name: 'document',
            component: () => import('./components/setting/Base')
        },
        {
            path: '/sys/setting/database',
            name: 'document',
            component: () => import('./components/setting/Database')
        },
        {
            path: "/design/pojo",
            name: "pojo",
            component: () => import('./components/design/pojo/Pojo'),
            children: [
                {
                    path: "",
                    name: "pojoList",
                    component: () => import('./components/design/pojo/PojoList'),
                },
                {
                    path: "detail",
                    name: "pojoDetail",
                    component: () => import('./components/design/pojo/PojoDetail')
                },
                {
                    path: "new",
                    name: "pojoCreate",
                    component: () => import("./components/design/pojo/PojoNew")
                }
            ]
        },
        {
            path: "/design/module",
            name: "module",
            component: () => import("./views/ModuleView"),
            children: [
                {
                    path: "",
                    name: "moduleList",
                    component: () => import("./components/design/module/ModuleList"),
                    props: {
                        id: "0",
                    }
                }
            ]
        }
    ]
})
