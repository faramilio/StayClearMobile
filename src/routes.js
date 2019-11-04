import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//nossas paginas
import Login from './pages/Login'
import Register from './pages/Register'


 const routes = createAppContainer(
 createSwitchNavigator({
     Login,Register
    })
 )
 export default routes