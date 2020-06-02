import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pageviews/main';
import home from '../pageviews/home';
import addcomposition from '../pageviews/addcomposition';

export const constantRouterMap = [
    {
        path: '',
        //组件
        name: 'mian',
        component: home,
    },
    {
        path: '/writer',
        //组件
        name: 'mian',
        component: addcomposition,
    },

    {
        path: '/foo',
        //组件
        name: 'mian',
        component: Main,
        children: [
            {
                //字路由地址含父地址 独立存在
                path: '/foo/ddd',
                //组件
                name: 'mian',
                component: Main,
                children: [
                    {
                        path: '/foo/ddd/ccc',
                        //组件
                        name: 'mian',
                        component: Main,
                    }
                ]
            }
        ],
    },
]

const router = new VueRouter({
    routes: constantRouterMap // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter);
export default router;