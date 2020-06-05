import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pageviews/main';
import home from '../pageviews/home';
import addcomposition from '../pageviews/addcomposition';

export const constantRouterMap = [
    {
        path: '/foo',
        //组件
        name: 'mian1',
        component: Main,
    },
    {
        path: '/boo',
        //组件
        name: 'home',

        component: home,
    },
    /* 000000001, 000000010, 00000000011, 0000000100, 0000000101, 0000000110, 0000000111, 0000001000, 0000001001, 0000001010
     .......
     1111111111
     */
]
