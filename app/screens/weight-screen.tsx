import * as React from "react"
import { observer } from "mobx-react-lite"
import { View, Dimensions, FlatList } from "react-native"
import { Screen, Header } from "../components"
import { Container, Icon, Card, CardItem, Body, Text } from "native-base"
import { LineChart } from "react-native-chart-kit"

// import { useStores } from "../models/root-store"
import styles from "../theme/styles"
import { NavigationScreenProp } from "react-navigation"

export interface WeightScreenProps {
  navigation: NavigationScreenProp<{}>
}

export const WeightScreen: React.FunctionComponent<WeightScreenProps> = observer(props => {
  // const { someStore } = useStores()
  const goBack = React.useMemo(() => () => props.navigation.goBack(null), [props.navigation])
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  }
  return (
    <Screen style={styles.ROOT} preset="scroll">
      <Header
        headerText="Weight Tracker"
        style={styles.HEADER}
        titleStyle={styles.TabTitle}
        leftIcon="back"
        onLeftPress={goBack}
      />
      <Container>
        <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisLabel="KG"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          {/* <FlatList data={data.datasets} renderItem={({ item }) => <Item title={item.data} />} /> */}
        </View>
      </Container>
    </Screen>
  )
})
