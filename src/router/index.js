import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Gather from '@/components/gather'
import Task from '@/components/task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{ path: 'gather', name: 'gather', component: Gather }, { path: 'task', name: 'task', component: Task }]
    }
  ]
})
