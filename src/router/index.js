/*
 * @Author: Caldm 1832400547@qq.com
 * @Date: 2024-10-31 12:25:15
 * @LastEditors: Caldm 1832400547@qq.com
 * @LastEditTime: 2024-10-31 18:34:54
 * @FilePath: \期末作业\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('../views/Categories')
    },
    {
      path: '/archivist',
      name: 'Archivist',
      component: () => import('../views/Archivist')
    },
    {
      path: '/connect',
      name: 'Connect',
      component: () => import('../views/Connect')
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('../views/NotFound')
    }
  ]
})
