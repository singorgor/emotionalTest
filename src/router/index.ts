import { createRouter, createWebHistory } from 'vue-router'
import Introduction from '@/views/Introduction.vue'
import Questionnaire from '@/views/Questionnaire.vue'
import Results from '@/views/Results.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Introduction',
    component: Introduction,
    meta: {
      title: 'FBI 情绪疲惫度测试'
    }
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire,
    meta: {
      title: '答题 - FBI 情绪疲惫度测试'
    }
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    meta: {
      title: '测试结果 - FBI 情绪疲惫度测试'
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '页面未找到'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫 - 设置页面标题
router.beforeEach((to) => {
  // 设置页面标题
  if (to.meta?.title) {
    document.title = to.meta.title as string
  }
})

export default router