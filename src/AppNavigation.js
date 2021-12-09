import {createStackNavigator} from 'react-navigation-stack'
import { HomeScreen,SecondScreen,ThirdScreen,CuartaScreen } from './screens/index'
import{createAppContainer} from 'react-navigation'

const AppNavigator = createStackNavigator(
    {
        HomeScreen,
        SecondScreen,
        ThirdScreen,
        CuartaScreen
    },
    {
        InitialRouteName:'HomeScreeen',
        headerMode:'none'
    }
);

export default createAppContainer(AppNavigator);