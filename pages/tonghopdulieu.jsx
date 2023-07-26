import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Leaderboard from 'react-native-leaderboard';
import Icon from 'react-native-vector-icons/FontAwesome';
import teachersfake from './teachersfake.json'
import { SelectList } from 'react-native-dropdown-select-list'
import usersfake from './usersfake.json'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import MonthPicker from 'react-native-month-year-picker';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
// import HorizontalBarGraph from '@chartiful/react-native-horizontal-bar-graph';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend, VictoryPie, VictoryTheme,
VictoryContainer } from "victory-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const data = {
  hs: [{x: 'Piano', y: 50}, {x: 'Thanh Nhạc', y: 10}, {x: 'Violin', y: 35}, 
    {x: 'Ghita', y: 27}, {x: 'KXA', y: 17}, {x: 'Trống', y: 13}],
  gv: [{x: 'Piano', y: 5}, {x: 'Thanh Nhạc', y: 1}, {x: 'Violin', y: 3}, 
    {x: 'Ghita', y: 2}, {x: 'KXA', y: 2}, {x: 'Trống', y: 1}]
}

const screenWidth = Dimensions.get('window').width;
const [leaderStats, setLeaderStats] = [
  {name: 'Lê Văn Lâm', hours: 40},
  {name: 'Lê Văn A', hours: 35},
  {name: 'Lê Văn B', hours: 30}
]

export default function DuLieu() {
  const [date, setDate] = useState(new Date())
  return (
    <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
      <Text style={styles.title}>Tổng số học sinh các môn học</Text>
      <View style={styles.chart}>
      <VictoryChart style={{parent: {maxWidth: '100%', fontFamily: 'Helvetica Neue'}}}>
        <VictoryAxis label="Môn học" style={{tickLabels: { fontSize: 11 }}}></VictoryAxis>
        <VictoryAxis label="Số lượng" dependentAxis style={{tickLabels: { fontSize: 11 }}} offsetX={50}></VictoryAxis>
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
      {/* <View style={{ flexDirection: 'row', padding: 15}}>
      <Text style={styles.title}>Bảng xếp hạng giáo viên</Text> */}
      {/* <SelectList
                boxStyles={{width: 200, marginTop: 10, marginLeft: 0, height: 45}}
                setSelected={(val) => setQuy(val)}
                data={quyList} save="key">  
              </SelectList> */}
      <MonthPicker value={date} minimumDate={new Date(2023, 0)} maximumDate={new Date(2024, 0)}
      locale="ko">

      </MonthPicker>
      {/* </View> */}
      <View style={styles.chart}>
        <VictoryChart style={{parent: {maxWidth: '100%', fontFamily: 'Helvetica Neue'}}}>
        <VictoryLegend orientation='horizontal' data={[{name: "Số giờ dạy", symbol: {fill: "#FFC7C2", type: "square"}}]}></VictoryLegend>
        {/* <Text style={styles.title}>Bảng xếp hạng giáo viên</Text> */}
        <VictoryAxis label="Tên giáo viên" style={{tickLabels: { fontSize: 12 }}}></VictoryAxis>
        <VictoryAxis label="Số giờ dạy" dependentAxis style={{tickLabels: { fontSize: 10 }}} offsetX={37}></VictoryAxis>
        <VictoryGroup offset={20}>
          <VictoryBar barRatio={1} data={usersfake.map((x, idx) => ({x: x.name, y: x.soGio[0].gio}))}
          style={{data: {width: 25, fill: "#FFC7C2"}}}></VictoryBar>
        </VictoryGroup>
        </VictoryChart>
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
    padding: 15,
    // marginTop: 50,
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14
  },
  chart: {
    // marginBottom: 200,
    marginLeft: '3%',
    padding: 0,
    paddingTop: '2%',
    borderRadius: 0,
    width: '100%',
  }
});
