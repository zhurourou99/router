import Vue from 'vue'
import Router from 'vue-router'
import Gather from '@/components/gather'
import Task from '@/components/task'
import List from '@/components/list'
import Allot from '@/components/allot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/gather',
      name: 'gather',
      component: Gather
    },
    {
      path: '/task',
      name: 'task',
      component: Task,
      children: [{ path: 'list', name: 'list', component: List }, { path: 'allot', name: 'allot', component: Allot }]
    }
  ]
})
