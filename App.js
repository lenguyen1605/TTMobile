import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from "victory-native"
import Header from './Header';

// const barData = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//   datasets: [
//     {
//       data: [20, 45, 28, 80, 99, 43],
//     },
//   ],
// };
const data = {
  hs: [{x: 'Piano', y: 50}, {x: 'Thanh Nhạc', y: 10}, {x: 'Violin', y: 35}, 
    {x: 'Ghita', y: 27}, {x: 'Ký Xướng Âm', y: 17}, {x: 'Trống', y: 13}],
  gv: [{x: 'Piano', y: 5}, {x: 'Thanh Nhạc', y: 1}, {x: 'Violin', y: 3}, 
    {x: 'Ghita', y: 2}, {x: 'Ký Xướng Âm', y: 2}, {x: 'Trống', y: 1}]
}
const screenWidth = Dimensions.get('window').width;
const chartConfig = {
  // backgroundGradientFrom: '#FFFFFF',
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: '#FFFFFF',
  // backgroundGradientToOpacity: 0.5,
  // // color: (opacity = 1) => `#FF0000`,
  // barColors: ['#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000', '#FF0000'],
  // dataLabelColor: 'black',
  // lineColors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
  // strokeWidth: 2,
  // useShadowColorFromDataset: true,

  // chartiful config
  hasYAxisBackgroundLines: false,
  xAxisLabelStyle: {
    rotation: 0,
    fontSize: 12,
    width: 78,
    yOffset: 4,
    xOffset: -25
  },
  yAxisLabelStyle: {
    rotation: 30,
    fontSize: 13,
    // prefix: '$',
    position: 'bottom',
    xOffset: 15,
    decimals: 2,
    height: 100
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
    <Text style={styles.title}>Tổng số học sinh các môn học</Text>
      <View style={styles.chart}>
      <VictoryChart style={{parent: {maxWidth: '100%'}}}>
        <VictoryAxis label="Môn học" style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
        <VictoryAxis label="Số lượng" dependentAxis style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
        <VictoryGroup offset={20}>
          <VictoryBar barRatio={1} data={data.hs} style={{
            data: {
              fill: '#E9967A'
            }, 

          }}></VictoryBar>
          <VictoryBar barRatio={1} data={data.gv} style={{
            data: {
              fill: '#ADD8E6'
            }
          }}></VictoryBar>
        </VictoryGroup>
      </VictoryChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    top: 45,
    left: 10,
    padding: 10,
    zIndex: 1,
    // fontSize: 27
  },
  bar: {
    fontSize: 27
  },
  header: {
    position: 'absolute',
    top: 35, 
    padding: 20,
    fontSize: 23,
    fontWeight: 'bold'  
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: 500,
    position: 'absolute',
    top: 100
  },
  title: {
    marginTop: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14
  },
  chart: {
    marginBottom: 200,
    padding: 0,
    paddingTop: 20,
    borderRadius: 0,
    width: 375,
  }
});
