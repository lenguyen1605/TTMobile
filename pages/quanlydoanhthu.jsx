import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend, VictoryPie,
    VictoryContainer } from "victory-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import doanhthu from './doanhthu.json'
import { DataTable } from 'react-native-paper';
import doanhthufake from './doanhthu.json';
import SelectDropdown from 'react-native-select-dropdown'
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { HocVienService } from '../services/hocvien.service';

// const [quy, setQuy] = useState(1)
// const data = {
//     dt: doanhthu.map((d, idx) => ({x: d.ten, y: d.doanhThu})),
//     lg: doanhthu.map((d, idx) => ({x: d.ten, y: d.luong})),
//     ln: doanhthu.map((d, idx) => ({x: d.ten, y: d.loiNhuan}))
// }

// const updateQuy = (idx) => {
//   setQuy(idx + 1)
// }
// const quyList = [{ten: "Quý 1", ma: 1}, {ten: "Quý 2", ma: 2}, {ten: "Quý 3", ma: 3}, {ten: "Quý 4", ma: 4}]
// const quyList = ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
export default function Doanhthu() {
  const [quy, setQuy] = useState((new Date().getMonth() + 1) / 4 + 1)
  // const data = {
  //   dt: doanhthu.map((d, idx) => ({x: d.ten, y: d.doanhThu})),
  //   lg: doanhthu.map((d, idx) => ({x: d.ten, y: d.luong})),
  //   ln: doanhthu.map((d, idx) => ({x: d.ten, y: d.loiNhuan}))
  // }
  const [data, setData] = useState({
    thang: new Date().getMonth() + 1,
    nam: new Date().getFullYear()
  })

  const [tien, setTien] = useState([])

  const renderForm = async() => {
    // [...Array(3)].map((x, idx) => {
    //   let res = await HocVienService.HocPhi.GetHP()
    // })
   
    let res = await HocVienService.HocPhi.GetHP({thang: 1 + 3 * (quy - 1), nam: new Date().getFullYear})
    


  }



  // const quyList = ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
  const quyList = [{value: "Quý 1", key: 1}, {value: "Quý 2", key: 2}, {value: "Quý 3", key: 3}, {value: "Quý 4", key: 4}]
    return (
        <ScrollView contentContainerStyle={{backgroundColor: '#fff'}}>
        {/* <ScrollView> */}
            <View style={{ flexDirection: 'row', padding: 15}}>
            <Text style={{fontWeight: 'bold', marginRight: 10, marginTop: 25}}>Thời gian:</Text>
              <SelectList
                boxStyles={{width: 200, marginTop: 10, marginLeft: 0, height: 45}}
                setSelected={(val) => setQuy(val)}
                data={quyList} save="key">
              </SelectList>
            </View>
            <View style={styles.chart}>
                <VictoryChart style={{parent: {maxWidth: '100%', fontFamily: 'Helvetica Neue'}}}>
                    <VictoryAxis label="Tháng" style={{tickLabels: { fontSize: 14 }}}></VictoryAxis>
                    <VictoryAxis label="Tiền (triệu đồng)" dependentAxis style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
                    {/* <VictoryLegend orientation='horizontal' data={[
                    {name: "Doanh thu", symbol: {fill: '#E9967A', type: "square"}},
                    {name: "Lương", symbol: {fill: '#ADD8E6', type: "square"}},
                    {name: "Lợi nhuận", symbol: {fill: '#FFB6C1', type: "square"}},
                  ]}></VictoryLegend> */}
                    <VictoryGroup offset={20}>
                        <VictoryBar barRatio={1} data={data.dt.slice(0 + 3 * (quy - 1), 3 + 3 * (quy - 1))} 
                        style={{data: {fill: '#E9967A'}}} labels={({datum}) => datum.y}></VictoryBar>
                        <VictoryBar barRatio={1} data={data.lg.slice(0 + 3 * (quy - 1), 3 + 3 * (quy - 1))} style={{data: {fill: '#ADD8E6'}}}
                        labels={({datum}) => datum.y}></VictoryBar>
                        <VictoryBar barRatio={1} data={data.ln.slice(0 + 3 * (quy - 1), 3 + 3 * (quy - 1))} style={{data: {fill: '#FFB6C1'}}}
                        labels={({datum}) => datum.y}></VictoryBar>
                    </VictoryGroup>
                    <VictoryLegend orientation='horizontal' data={[
                    {name: "Doanh thu", symbol: {fill: '#E9967A', type: "square"}},
                    {name: "Lương", symbol: {fill: '#ADD8E6', type: "square"}},
                    {name: "Lợi nhuận", symbol: {fill: '#FFB6C1', type: "square"}},
                  ]}></VictoryLegend>
                        
                    

                </VictoryChart>
            </View>
            <DataTable>
            <DataTable.Header style={{marginTop: 20, backgroundColor: '#DCDCDC'}}>
                <DataTable.Title style={{flex: 0.5, justifyContent: 'center'}}>
                    <Text style ={styles.tableheader}>Tháng
                    </Text>
                </DataTable.Title>

                <DataTable.Title numeric>
                    <Text style ={styles.tableheader}>
                        Doanh thu
                    </Text>
                </DataTable.Title>

                <DataTable.Title numeric>
                    <Text style ={styles.tableheader}>
                        Lương
                    </Text>
                </DataTable.Title>

                <DataTable.Title numeric>
                    <Text style ={styles.tableheader}>
                        Lợi nhuận
                    </Text>
                </DataTable.Title>
            </DataTable.Header>

            {doanhthufake?.map ((x, idx)=>{
                return (
                    <DataTable.Row>
                        <DataTable.Cell numeric style={{flex: 0.5, justifyContent: 'center'}}>{x.thang}</DataTable.Cell>
                        <DataTable.Cell numeric>{x.doanhThu}</DataTable.Cell>
                        <DataTable.Cell numeric>{x.luong}</DataTable.Cell>
                        <DataTable.Cell numeric>{x.loiNhuan}</DataTable.Cell>
                    </DataTable.Row>
                )
            })}

        </DataTable>
        </ScrollView>
    )
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
      marginLeft: '3%',
      padding: 0,
      paddingTop: '5%',
      borderRadius: 0,
      width: '100%',
    },
    tableheader: {
        fontWeight: 'bold'
    }
  });
  

