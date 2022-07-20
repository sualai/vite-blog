import Register from '../views/user/register.vue'
import My from "../views/user/my.vue"
const routes = [
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'myCenter',
        path: '/myCenter',
        component: My
    }
];
export default routes
