import * as React from "react"
import { observer } from "mobx-react-lite"
import { View, Dimensions, FlatList, Alert } from "react-native"
import { Screen, Header } from "../../components"
import { Container, Row, Col, Icon, Fab, Text, Button } from "native-base"
import { LineChart } from "react-native-chart-kit"

// import { useStores } from "../models/root-store"
import styles from "../../theme/styles"
import chart_mockdata from "./chart_mockdata"
import list_mockdata from "./list_mockdata"

import { NavigationScreenProp } from "react-navigation"

export interface WeightScreenProps {
  navigation: NavigationScreenProp<{}>
}

export const WeightScreen: React.FunctionComponent<WeightScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  function Item({ weight, date }) {
    return (
      <Row style={styles.ListItem}>
        <Col size={3}>
          <Text style={styles.ListDate}>{date}</Text>
        </Col>
        <Col>
          <Text style={styles.ListWeight}>{weight}KG</Text>
        </Col>
      </Row>
    )
  }
  return (
    <View style={styles.FULL}>
      <Screen style={styles.ROOT}>
        <Header
          headerText="Weight Tracker"
          style={styles.HEADER}
          titleStyle={styles.TabTitle}
          leftIcon="back"
          onLeftPress={goBack}
        />
        <Container>
          <LineChart
            data={chart_mockdata}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            // yAxisLabel="KG"
            yAxisSuffix="KG"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              // backgroundColor: "#000091",
              backgroundGradientFrom: "#00bfff",
              // backgroundGradientTo: "#000091",
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

              propsForDots: {
                r: "4",
                strokeWidth: "2",
                stroke: "#8ae8ff",
              },
            }}
            bezier
          />
          <FlatList
            ItemSeparatorComponent={() => <View style={styles.ListSeparator} />}
            ListFooterComponent={() => <View style={styles.ListSeparator} />}
            data={list_mockdata}
            renderItem={({ item }) => <Item weight={item.weight.toString()} date={item.date} />}
            keyExtractor={item => list_mockdata.indexOf(item)}
          />
          <Fab
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: "#00bfff" }}
            position="bottomRight"
            onPress={() => Alert.alert("Record new weight")}
          >
            <Icon type="FontAwesome5" name="plus" />
          </Fab>
        </Container>
      </Screen>
    </View>
  )
})
