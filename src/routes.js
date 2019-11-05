import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//nossas paginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'


 const routes = createAppContainer(
 createSwitchNavigator({
     Perfil,
     Login,
     Register,
    })
 )
 export default routes