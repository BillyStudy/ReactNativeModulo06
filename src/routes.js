import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(

    createStackNavigator(
        {
            Main,
            User,
        },
        {
            headerMode: 'none'
        }
        // {
        //     headerLayoutPreset: 'center',
        //     defaultNavigationOptions: {
        //         headerStyle:{
        //             backgroundColor: '#3d51bf',
        //             elevation: 20,
        //         },
        //         headerTintColor: '#fafafa',
        //     }
        // }
    )

);

export default Routes;