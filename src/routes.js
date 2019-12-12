import {createAppContainer, createSwitchNavigator} from 'react-navigation'
//nossas paginas
import Login from './pages/Login'
import Register from './pages/Register'
import Perfil from './pages/Perfil'
import Friends from './pages/Friends'
import AddFriends from './pages/AddFriends'
import Conversation from './pages/Conversation'
import Chat from './pages/Chat'


 const routes = createAppContainer(
 createSwitchNavigator({
     Friends,
     Perfil,
     Login,
     Register,
     AddFriends,
     Conversation,
     Chat

    
    },{initialRouteName: 'Chat'}) 
 )
 export default routes