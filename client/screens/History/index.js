import React from 'react'
import { View, Text, SafeAreaView, Dimensions } from 'react-native'
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
const History = () => {
    const TransactionButtons = () => {
        <View style={{ marginVertical: 72, marginHorizontal: 32 }}>
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
    }
    const LineChart = ()=> {
        <View style={{flex: 1}}>
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
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
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
    }
    return (
        <SafeAreaView  >
            {/* -------- Component displaying transaction buttons for expense and income. -----*/}
            <TransactionButtons />
            <LineChart />
        </SafeAreaView>
    )
}

export default History
