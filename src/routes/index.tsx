import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from '../components/TabBar'
import { Home } from '../screens/Home'
import { Add } from '../screens/Add'
import { Config } from '../screens/Config'
import { Detail } from '../screens/Detail'
import { Shopping } from '../screens/Shopping'

const AppTab = createBottomTabNavigator()

export function Routes () {
  return (
    <NavigationContainer>
      <AppTab.Navigator
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >

        <AppTab.Screen
          name="home"
          component={Home}
        />

        <AppTab.Screen
          name="detail"
          component={Detail}
        />

        <AppTab.Screen
          name="add"
          component={Add}
        />

        <AppTab.Screen
          name="config"
          component={Config}
        />

        <AppTab.Screen
          name="shopping"
          component={Shopping}
        />  

      </AppTab.Navigator>
    </NavigationContainer>
  )
}
