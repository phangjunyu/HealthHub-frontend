import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Header } from "../components"
import { Container, Icon, Card, CardItem, Body, Text } from "native-base"

// import { useStores } from "../models/root-store"
import { color } from "../theme"
import styles from "../theme/styles"
import { NavigationScreenProp } from "react-navigation"

export interface ExerciseScreenProps {
  navigation: NavigationScreenProp<{}>
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export const ExerciseScreen: React.FunctionComponent<ExerciseScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])

  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        headerText="Exercise Tracker"
        style={styles.HEADER}
        titleStyle={styles.TabTitle}
        leftIcon="back"
        onLeftPress={goBack}
      />
      <Container></Container>
    </Screen>
  )
})
