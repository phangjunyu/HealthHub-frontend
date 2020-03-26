import { createStackNavigator } from "react-navigation-stack"
import {
  WelcomeScreen,
  DemoScreen,
  HomepageScreen,
  WeightScreen,
  DietScreen,
  ExerciseScreen,
  SleepScreen,
} from "../screens"

export const PrimaryNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    demo: { screen: DemoScreen },
    homepage: { screen: HomepageScreen },
    diet: { screen: DietScreen },
    exercise: { screen: ExerciseScreen },
    sleep: { screen: SleepScreen },
    weight: { screen: WeightScreen },
  },
  {
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["welcome"]
