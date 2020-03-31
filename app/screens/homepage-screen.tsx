import * as React from "react"
import { Container, Icon, Card, CardItem, Body, Text } from "native-base"
import { Col, Row, Grid } from "react-native-easy-grid"
import { observer } from "mobx-react-lite"
import { View, Alert } from "react-native"
import { Screen, Header } from "../components"
// import { useStores } from "../models/root-store"
import styles from "../theme/styles"
import { NavigationScreenProp } from "react-navigation"

export interface HomepageScreenProps {
  navigation: NavigationScreenProp<{}>
}

export const HomepageScreen: React.FunctionComponent<HomepageScreenProps> = observer(props => {
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const loadProfileTab = React.useMemo(() => () => props.navigation.navigate("profile"), [
    props.navigation,
  ])
  const loadWeightTab = React.useMemo(() => () => props.navigation.navigate("weight"), [
    props.navigation,
  ])
  const loadExerciseTab = React.useMemo(() => () => props.navigation.navigate("exercise"), [
    props.navigation,
  ])
  const loadSleepTab = React.useMemo(() => () => props.navigation.navigate("sleep"), [
    props.navigation,
  ])
  const loadDietTab = React.useMemo(() => () => props.navigation.navigate("diet"), [
    props.navigation,
  ])
  const loadReminderTab = React.useMemo(() => () => props.navigation.navigate("reminder"), [
    props.navigation,
  ])
  const loadDiagnosisTab = React.useMemo(() => () => props.navigation.navigate("diagnosis"), [
    props.navigation,
  ])
  const loadSettingsTab = React.useMemo(() => () => props.navigation.navigate("settings"), [
    props.navigation,
  ])
  // const { someStore } = useStores()
  return (
    <View style={styles.FULL}>
      <Screen style={styles.ROOT}>
        <Header
          headerText="HealthHub"
          style={styles.HEADER}
          titleStyle={styles.HEADER_TITLE}
          leftIcon="back"
          onLeftPress={goBack}
        />
        <Container>
          <Grid>
            <Row>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadProfileTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome" name="user" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Profile</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadWeightTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome5" name="weight" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Weight</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadExerciseTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome5" name="running" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Exercise</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadSleepTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome" name="bed" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Sleep</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadDietTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome5" name="utensils" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Diet</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadReminderTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome" name="bell" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Set Reminder</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadDiagnosisTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome5" name="comment-medical" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Diagnosis</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
              <Col>
                <Card>
                  <CardItem style={styles.CardItem} button onPress={loadSettingsTab}>
                    <Body style={styles.CardContent}>
                      <Icon type="FontAwesome" name="cog" style={styles.CardIcon} />
                      <Text style={styles.CardTitle}>Settings</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Container>
      </Screen>
    </View>
  )
})
