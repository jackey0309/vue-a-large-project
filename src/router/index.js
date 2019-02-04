import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home/home'
import city from '@/page/city/city'
import msite from '@/page/msite/msite'

Vue.use(Router)

export default new Router({
  routes: [
    //首页城市列表页
    {
      path: '/',
      name: 'home',
      component: home
    },
      //当前选择城市页
      {
        path: '/city',
        component: city
    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite,
    }
  ]
})
