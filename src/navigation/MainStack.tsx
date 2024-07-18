import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { MainAppStackTypes } from "./navigation-types"
import PostDetailsScreen from "../presentaion/screens/PostDetailsScreen/PostDetailsScreen"
import HomeScreen from "../presentaion/screens/HomeScreen/HomeScreen"
import SplashScreen from "../presentaion/screens/SplashScreen/SplashScreen"

const Stack = createStackNavigator<MainAppStackTypes>()

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostDetailsScreen" component={PostDetailsScreen} />
    </Stack.Navigator>
  )
}

export default MainStack
