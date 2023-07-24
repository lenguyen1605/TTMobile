import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import Leaderboard from 'react-native-leaderboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
// import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend, VictoryPie,
VictoryContainer } from "victory-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
// import Header from './Header';

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
const [leaderStats, setLeaderStats] = [
  {name: 'Lê Văn Lâm', hours: 40},
  {name: 'Lê Văn A', hours: 35},
  {name: 'Lê Văn B', hours: 30}
]

export default function DuLieu() {
  return (
    <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
      {/* <Header></Header> */}
      {/* <View style={styles.container1}> */}
      <Text style={styles.title}>Tổng số học sinh các môn học</Text>
      <View style={styles.chart}>
      <VictoryChart style={{parent: {maxWidth: '100%', fontFamily: 'Helvetica Neue'}}}>
        <VictoryAxis label="Subject" style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
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
        <VictoryLegend orientation='horizontal' data={[
          {name: "Học sinh", symbol: {fill: '#E9967A', type: "square"}},
          {name: "Giáo viên", symbol: {fill: '#ADD8E6', type: "square"}},
        ]}></VictoryLegend>
      </VictoryChart>
      
      </View>

      {/* </View> */}
      {/* <View style={styles.leaderBoard}>
        <Text>hihi</Text>
        
      </View> */}
      {/* <View style={styles.leaderBoard}>
        <Text></Text>
        </View> */}
        <Text style={{fontWeight: 'bold', marginBottom: 20}}>Bảng xếp hạng giáo viên</Text>
        <View style={styles.leaderBoard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginLeft: 30}}>
          <View style={styles.circle}></View>
          <View style={styles.info}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginLeft: 30}}>
          <View style={styles.circle}></View>
          <View style={styles.info}></View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginLeft: 30}}>
          <View style={styles.circle}></View>
          <View style={styles.info}></View>
        </View>
      </View>
      <VictoryContainer>
        <VictoryPie colorScale={["#8FBC8F", "#ADD8E6", "#FFC7C2"]}
        data={[
          {x: "30 phut", y: 63},
          {x: "45 phut", y: 97},
          {x: "60 phut", y: 40}
        ]} labels={({datum}) => `${datum.y}`}
        
  ></VictoryPie>
      </VictoryContainer>
              {/* <View>
        <Leaderboard data={leaderStats} sortBy='hours' labelBy='name'></Leaderboard></View> */}
      
      {/* <View>
        <Text>Hello</Text>
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginBottom: 400
  },
  container1: {
    marginBottom: 400
  },
  button: {
    position: 'absolute',
    top: 45,
    left: 10,
    padding: 10,
    zIndex: 1,
    // fontSize: 27
  },
  leaderBoard: {
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white', 
  },
  info: {
    width: 200,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  title: {
    marginTop: 50,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14
  },
  chart: {
    // marginBottom: 200,
    padding: 0,
    paddingTop: '10%',
    borderRadius: 0,
    width: '100%',
  }
});
