import Signup from './components/Signup.js' 
import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'



const routes = [

    {path: '/' , component: Signup} ,
    {path: '/login' , component: Login} , 
    {path: '/dashboard' , component: Dashboard ,props: true}        

]


export default new VueRouter({
    routes , 
})