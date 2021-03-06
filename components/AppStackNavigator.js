import Splash from './Splash'
import AccountUser from './AccountUser'
import Loading from './Loading'
import Mainscreen from './Mainscreen'

import {createStackNavigator, createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator ({
  Splash: Splash,
  Loading: Loading,
  AccountUser: AccountUser,
  Mainscreen: Mainscreen,
}, {
  initalRouteName: 'Splash',
  header: null,
  headerMode: 'none',
  navigationOptions: {
    header: null
  }
})

export default createAppContainer(AppNavigator)
