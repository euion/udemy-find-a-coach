import { createRouter, createWebHistory } from "vue-router";

import CoachDetail from "./pages/coaches/CoachDetail.vue";
import CoachRegisteration from "./pages/coaches/CoachRegistration.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import RequestReceived from "./pages/requests/RequestsReceived.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      children: [
        { path: "/contact", component: ContactCoach }, // /coaches/cl/contact
      ],
    },
    { path: "/register", component: CoachRegisteration },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound }, // 동적 세그먼트를 사용하고 뒤에 원하는 텍스트를 넣는다.()뒤에는 정규표현식이 들어감
  ],
});

export default router;
