import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//nossas paginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Friends from './pages/Friends'


 const routes = createAppContainer(
 createSwitchNavigator({
     Friends,
     Perfil,
     Login,
     Register,
    },{initialRouteName: 'Perfil'}) 
 )
 export default routes