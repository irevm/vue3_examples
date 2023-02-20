import Hello from "./components/Hello.js";
import Goodbye from "./components/Goodbye.js";

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

let router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', name: "Home", component: Home },
    { path: '/hello', component: Hello },
    { path: '/about', name: "About", component: About },
    { path: '/goodbye/:message', name: "Goodbye", component: Goodbye },
    { path: '/goodbye/:message', name: "Goodbye2", component: Goodbye }
  ]
});

export default router