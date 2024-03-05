import Home from "./Home.js";
import Post from "./Post.js";

let router = VueRouter.createRouter({
 
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', name:"Home", component: Home },
    { path: '/post', name:"Post", component: Post },
    { path: '/post/:id', name:"Edit", component: Post },
    
  ]
});

export default router