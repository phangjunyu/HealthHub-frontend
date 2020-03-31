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
  ReminderScreen,
  DiagnosisScreen,
  SettingsScreen,
} from "../screens" // eslint-disable-line @typescript-eslint/no-unused-vars

export const RootNavigator = createStackNavigator(
  {
    settingsScreen: { screen: SettingsScreen },
    diagnosisScreen: { screen: DiagnosisScreen },
    reminderScreen: { screen: ReminderScreen },
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
