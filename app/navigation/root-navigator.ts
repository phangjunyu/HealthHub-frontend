import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"

// prettier-ignore
import {
  HomepageScreen,
  ProfileScreen,
  WeightScreen,
  ExerciseScreen,
  SleepScreen,
  DietScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    primaryStack: { screen: PrimaryNavigator },
    dietScreen: { screen: DietScreen },
    sleepScreen: { screen: SleepScreen },
    exerciseScreen: { screen: ExerciseScreen },
    weightScreen: { screen: WeightScreen },
    profileScreen: { screen: ProfileScreen },
    homepageScreen: { screen: HomepageScreen },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
