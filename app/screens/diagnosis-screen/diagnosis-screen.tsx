import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Header } from "../../components"
// import { useStores } from "../models/root-store"
import styles from "../../theme/styles"
import { NavigationScreenProp } from "react-navigation"

export interface DiagnosisScreenProps {
  navigation: NavigationScreenProp<{}>
}

export const DiagnosisScreen: React.FunctionComponent<DiagnosisScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])

  return (
    <Screen style={styles.ROOT} preset="scroll">
      <Header
        headerText="Diagnosis Checker"
        style={styles.HEADER}
        titleStyle={styles.TabTitle}
        leftIcon="back"
        onLeftPress={goBack}
      />
    </Screen>
  )
})
