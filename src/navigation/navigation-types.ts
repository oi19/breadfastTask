import { IconsName } from "../assets/svgs"
import { Post } from "../domain/posts"

export type MainNavigationTypes = MainAppStackTypes

export type MainAppStackTypes = {
  SplashScreen: undefined
  HomeScreen: undefined
  PostDetailsScreen: { postID: number }
}

export type MainNavigationAllScreensTypes = MainAppStackTypes
export type MainNavigationKeys = keyof MainAppStackTypes
