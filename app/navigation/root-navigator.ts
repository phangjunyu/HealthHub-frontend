import { createStackNavigator } from "react-navigation-stack"
import { PrimaryNavigator } from "./primary-navigator"

// prettier-ignore
import {
  HomepageScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    homepageScreen: { screen: HomepageScreen },
    primaryStack: { screen: PrimaryNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
