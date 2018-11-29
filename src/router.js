import VueRouter from 'vue-router';

// 导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopCarContainer from './components/tabbar/ShopCarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'


const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer }
  ],
  linkActiveClass: 'mui-active', // 使用MUI提供的active样式类名覆盖路由项的自定义类名
})

export default router