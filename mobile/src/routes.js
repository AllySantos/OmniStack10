import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
    createStackNavigator( {
        Main: {
            screen: Main,
            navigationOptions: {
<<<<<<< HEAD
                title: 'DevRadar'
=======
                title: 'DevRadaaar'
>>>>>>> d6b48299ee70e5c3c6414aa3b7fa4a2cd23fb903
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        }
    }, {
        defaultNavigationOptions: {
<<<<<<< HEAD
            headerTintColor: '#FFF',
=======
            headerTintColor: '#FFFFFF',
>>>>>>> d6b48299ee70e5c3c6414aa3b7fa4a2cd23fb903
            headerStyle: {
                backgroundColor: '#7D40E7'
            }
        }
    })
);

export default Routes;