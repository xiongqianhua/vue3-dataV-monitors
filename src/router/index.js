import { createRouter, createWebHashHistory } from "vue-router";
import monitor from '@/view/monitor/index';

const routes = [
  {
      path: "/",
      redirect: "/monitor",
  },
  { path: "/monitor", component: monitor },
  { path: "/energy", component: monitor },
  { path: "/smart", component: monitor },
  { path: "/secure", component: monitor },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

export default router