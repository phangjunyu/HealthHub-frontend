import * as React from "react"
import { Container, Icon, Card, CardItem, Body, Text } from "native-base"
import { Col, Row, Grid } from "react-native-easy-grid"
import { observer } from "mobx-react-lite"
import { View, Alert } from "react-native"
import { Screen, Header, Wallpaper } from "../components"
// import { useStores } from "../models/root-store"
import styles from "../theme/styles"
import { NavigationScreenProp } from "react-navigation"
import { color } from "../theme"

export interface HomepageScreenProps {
  navigation: NavigationScreenProp<{}>
}

export const HomepageScreen: React.FunctionComponent<HomepageScreenProps> = observer(props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  // const { someStore } = useStores()
  return (
    <View style={styles.FULL}>
      <Wallpaper />
      <Screen style={styles.ROOT} preset="scroll">
        <Header
          headerText="HealthHub"
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
          leftIcon="back"
          onLeftPress={goBack}
        />
        <Container>
          <Grid>
            <Row style={{ height: "33%" }}>
              <Col>
                <Card style={styles.ProfileCard}>
                  <CardItem
                    button
                    onPress={() => Alert.alert("Profile Tab")}
                    style={{ backgroundColor: "red" }}
                  >
                    <Body>
                      <Text style={styles.CardTitle}>
                        <Icon type="FontAwesome" name="user" style={{ fontSize: 20 }} />
                        &nbsp;Profile
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Text style={{ color: "black" }}>lol</Text>
          </Grid>
        </Container>
      </Screen>
    </View>
  )
})
