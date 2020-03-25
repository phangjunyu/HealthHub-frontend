import * as React from "react"
import { View, Image, SafeAreaView, ViewStyle } from "react-native"
import { NavigationInjectedProps } from "react-navigation"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import styles from "../../theme/styles"
// const bowserLogo = require("./bowser.png")
const healthhubLogo = require("./Healthhub.png")

export interface WelcomeScreenProps extends NavigationInjectedProps<{}> {}

export const WelcomeScreen: React.FunctionComponent<WelcomeScreenProps> = props => {
  const nextScreen = React.useMemo(() => () => props.navigation.navigate("demo"), [
    props.navigation,
  ])
  const loadHomePage = React.useMemo(() => () => props.navigation.navigate("homepage"), [
    props.navigation,
  ])

  const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
    alignContent: "center",
    justifyContent: "center",
  }

  return (
    <View style={styles.FULL}>
      <Wallpaper />
      <Screen style={CONTAINER} backgroundColor={color.transparent}>
        {/* <Header
          headerTx="welcomeScreen.poweredBy"
          style={Styles.HEADER}
          titleStyle={Styles.HEADER_TITLE}
        /> */}
        {/* <Text style={Styles.TITLE_WRAPPER}>
          <Text style={Styles.TITLE} text="Your new app, " />
          <Text style={Styles.ALMOST} text="almost" />
          <Text style={Styles.TITLE} text="!" />
        </Text> */}
        {/* <Text style={Styles.TITLE} preset="header" tx="welcomeScreen.readyForLaunch" /> */}
        {/* <Image source={bowserLogo} style={Styles.BOWSER} /> */}
        <Image source={healthhubLogo} style={styles.BOWSER} resizeMode="contain" />
        {/* <Text style={Styles.CONTENT}>
          This probably isn't what your app is going to look like. Unless your designer handed you
          this screen and, in that case, congrats! You're ready to ship.
        </Text>
        <Text style={Styles.CONTENT}>
          For everyone else, this is where you'll see a live preview of your fully functioning app
          using Ignite.
        </Text> */}
      </Screen>
      <SafeAreaView style={styles.FOOTER}>
        <View style={styles.FOOTER_CONTENT}>
          <Button
            style={styles.CONTINUE}
            textStyle={styles.CONTINUE_TEXT}
            text="Login"
            // tx="welcomeScreen.continue"
            onPress={loadHomePage}
          />
        </View>
        {/* <View style={Styles.FOOTER_CONTENT}>
          <Button
            style={Styles.CONTINUE}
            textStyle={Styles.CONTINUE_TEXT}
            text="Demo"
            tx="welcomeScreen.continue"
            onPress={nextScreen}
          />
        </View> */}
      </SafeAreaView>
    </View>
  )
}
