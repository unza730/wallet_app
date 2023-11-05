import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Font from '../../constants/Font';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import RecentHistory from '../../components/RecentHistory';
const History = () => {
  const [filter, setFilter] = useState('week');

  const handleFilterChange = (value) => {
    setFilter(value);
  };
  const LineChartComponent = () => {
    return (
      <View style={{ flex: 1, background: 'purple', marginBottom: 240, marginHorizontal: 20 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Button title="Week" onPress={() => handleFilterChange('week')} />
          <Button title="Month" onPress={() => handleFilterChange('month')} />
          <Button title="Day" onPress={() => handleFilterChange('day')} />
        </View>
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
                  Math.random() * 100
                ]
              }
            ]
          }}
          //   width={200} // from react-native

          width={Dimensions.get("window").width - 40} // from react-native
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          // yAxisLabel="$"
          // yAxisSuffix="k"
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            // backgroundColor: "#e26a00",
            // backgroundGradientFrom: "#fb8c00",
            // backgroundGradientTo: "#ffa726",
            // backgroundColor: "lightgrey", // Update background color here
            //   backgroundGradientFrom: "black",
            //   backgroundGradientTo: "#fff",
            backgroundColor: null, // Set background color to null
            backgroundGradientFrom: "black",
            backgroundGradientTo: "#808080",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
    )
  }
  const TransactionButtons = () => {
    return (
      <View style={{ marginTop: 72, marginHorizontal: 32, marginBottom: 12 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', backgroundColor: 'black', borderRadius: 10, padding: 10 }}>
              <View style={{ margin: 10 }}>
                <AntDesign name="arrowup" size={24} color="white" />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: 'white', fontSize: 17 }}>Expense</Text>
                <Text style={{ color: 'white', fontFamily: Font['poppins-bold'], fontSize: 18 }}>$7.890</Text>
              </View>
            </View>
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, padding: 10 }}>
              <View style={{ margin: 10 }}>
                <AntDesign name="arrowdown" size={24} color="black" />
              </View>
              <View style={{ marginHorizontal: 15 }}>
                <Text style={{ color: 'black', fontSize: 17 }}>Income</Text>
                <Text style={{ color: 'black', fontFamily: Font['poppins-bold'], fontSize: 18 }}>$5.670</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ backgroundColor: '#E5E4E2', flex: 1 }} >
      {/* -------- Component displaying transaction buttons for expense and income. -----*/}
      <TransactionButtons />
      <LineChartComponent />
      <View style={{ justifyContent: 'flex-end', padding: 24 }}>
        <RecentHistory />
      </View>

    </View>
  )
}

export default History
