import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import home from '../pageviews/home';
import {getFileByindex} from '../router/RoutUtils'

export const constantRouterMap = [
    {
        path: '/',
        //组件
        name: 'mian111',
        component: home,
        meta: {
            testStr: '测试---内容----testStr----',
        },
    },
    {path: '*', redirect: '/404', hidden: true}
]

const router = new VueRouter({
    routes: constantRouterMap
})
router.beforeEach((to, from, next) => {
    let toPath = to.path;
    if (toPath.indexOf("cc") !== -1) {
        toPath = to.path.replace("//", "/")
        //  next('')
    } else {
        next()
        // next('/Personinfo')
    }

})
router.addRoutes(getFileByindex());
Vue.use(VueRouter);
export default router;