import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions , Button} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Font from '../../constants/Font';
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
import {ChartDot, ChartPath, ChartPathProvider, monotoneCubicInterpolation} from '@rainbow-me/animated-charts';

const History = () => {
  const [filter, setFilter] = useState('week');

  const handleFilterChange = (value) => {
    setFilter(value);
  };
 
//  const {width: SIZE} = Dimensions.get('window');
// const screenWidth = Dimensions.get('window').width
 const dataa = [
  {x: 1453075200, y: 1.47}, {x: 1453161600, y: 1.37},
  {x: 1453248000, y: 1.53}, {x: 1453334400, y: 1.54},
  {x: 1453420800, y: 1.52}, {x: 1453507200, y: 2.03},
  {x: 1453593600, y: 2.10}, {x: 1453680000, y: 2.50},
  {x: 1453766400, y: 2.30}, {x: 1453852800, y: 2.42},
  {x: 1453939200, y: 2.55}, {x: 1454025600, y: 2.41},
  {x: 1454112000, y: 2.43}, {x: 1454198400, y: 2.20},
];
 const { width: SIZE } = Dimensions.get('window');

const points = monotoneCubicInterpolation({dataa, range: 40});

const BasicExample = () => (
  <View style={{ backgroundColor: 'black' }}>
    <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
    <ChartPath height={SIZE / 2} stroke="yellow" width={SIZE} />
    <ChartDot style={{ backgroundColor: 'blue' }} />
    </ChartPathProvider>
  </View>
);
  // const LineChartComponent = ()  => {
  //   return(
  //     <View style={{flex: 1, background: 'purple'}}>
        
  //        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
  //       <Button title="Week" onPress={() => handleFilterChange('week')} />
  //       <Button title="Month" onPress={() => handleFilterChange('month')} />
  //       <Button title="Day" onPress={() => handleFilterChange('day')} />
  //     </View>
  //     <LineChart
  //     data={{
  //       labels: ["January", "February", "March", "April", "May", "June"],
  //       datasets: [
  //         {
  //           data: [
  //             Math.random() * 100,
  //             Math.random() * 100,
  //             Math.random() * 100,
  //             Math.random() * 100,
  //             Math.random() * 100,
  //             Math.random() * 100
  //           ]
  //         }
  //       ]
  //     }}
      
  //     width={Dimensions.get("window").width} // from react-native
  //     height={220}
  //     yAxisLabel=""
  //       yAxisSuffix=""
  //       yAxisInterval={1}
  //     // yAxisLabel="$"
  //     // yAxisSuffix="k"
  //     // yAxisInterval={1} // optional, defaults to 1
  //     chartConfig={{
  //       // backgroundColor: "#e26a00",
  //       // backgroundGradientFrom: "#fb8c00",
  //       // backgroundGradientTo: "#ffa726",
  //       // backgroundColor: "lightgrey", // Update background color here
  //       //   backgroundGradientFrom: "black",
  //       //   backgroundGradientTo: "#fff",
  //       backgroundColor: null, // Set background color to null
  //       backgroundGradientFrom: "black",
  //       backgroundGradientTo: "#fff",
  //       decimalPlaces: 2, // optional, defaults to 2dp
  //       color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //       labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  //       style: {
  //         borderRadius: 16
  //       },
  //       propsForDots: {
  //         r: "6",
  //         strokeWidth: "2",
  //         stroke: "#ffa726"
  //       }
  //     }}
  //     bezier
  //     style={{
  //       marginVertical: 8,
  //       borderRadius: 16
  //     }}
  //   />
  //   </View>
  //   )
  // }
    const TransactionButtons = () => {
      return(
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
        <SafeAreaView  >
            {/* -------- Component displaying transaction buttons for expense and income. -----*/}
            <TransactionButtons />
            {/* <LineChartComponent /> */}
            <BasicExample />
        </SafeAreaView>
    )
}

export default History
