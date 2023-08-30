import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserProfileScreen from './screens/UserProfileScreen'
import GoalSettingScreen from './screens/GoalSettingScreen'
import WorkoutLoggingScreen from './screens/WorkoutLoggingScreen'
import ProgressTrackingScreen from './screens/ProgressTrackingScreen'

const Stack = createStackNavigator()

function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserProfile'>
        <Stack.Screen name='UserProfile' component={UserProfileScreen} />
        <Stack.Screen name='GoalSetting' component={GoalSettingScreen} />
        <Stack.Screen name='WorkoutLogging' component={WorkoutLoggingScreen} />
        <Stack.Screen
          name='ProgressTracking'
          component={ProgressTrackingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
