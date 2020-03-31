import { createStackNavigator } from "react-navigation-stack"
import {
  WelcomeScreen,
  HomepageScreen,
  ProfileScreen,
  WeightScreen,
  DietScreen,
  ExerciseScreen,
  SleepScreen,
  ReminderScreen,
  DiagnosisScreen,
  SettingsScreen,
} from "../screens"

export const PrimaryNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    homepage: { screen: HomepageScreen },
    diet: { screen: DietScreen },
    exercise: { screen: ExerciseScreen },
    sleep: { screen: SleepScreen },
    weight: { screen: WeightScreen },
    reminder: { screen: ReminderScreen },
    diagnosis: { screen: DiagnosisScreen },
    settings: { screen: SettingsScreen },
    profile: { screen: ProfileScreen },
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
