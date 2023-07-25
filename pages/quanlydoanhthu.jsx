import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend, VictoryPie,
    VictoryContainer } from "victory-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import doanhthu from './doanhthu.json'
import { DataTable } from 'react-native-paper';
import doanhthufake from './doanhthu.json';


const data = {
    dt: doanhthu.map((d, idx) => ({x: d.ten, y: d.doanhThu})),
    lg: doanhthu.map((d, idx) => ({x: d.ten, y: d.luong})),
    ln: doanhthu.map((d, idx) => ({x: d.ten, y: d.loiNhuan}))
}
export default function Doanhthu() {
    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header style={{marginTop: 20}}>
                    <DataTable.Title >
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
                            <DataTable.Cell numeric>{x.thang}</DataTable.Cell>
                            <DataTable.Cell numeric>{x.doanhThu}</DataTable.Cell>
                            <DataTable.Cell numeric>{x.luong}</DataTable.Cell>
                            <DataTable.Cell numeric>{x.loiNhuan}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })}
            </DataTable>

            <View style={styles.chart}>
                <VictoryChart style={{parent: {maxWidth: '100%', fontFamily: 'Helvetica Neue'}}}>
                    <VictoryAxis label="Tháng" style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
                    <VictoryAxis label="Tiền (triệu đồng)" dependentAxis style={{tickLabels: { fontSize: 10 }}}></VictoryAxis>
                    {console.log(doanhthu.slice(0, 3))}
                    <VictoryGroup offset={20}>
                        <VictoryBar barRatio={1} data={data.dt.slice(0, 3)} style={{data: {fill: '#E9967A'}}}></VictoryBar>
                        <VictoryBar barRatio={1} data={data.lg.slice(0,3)} style={{data: {fill: '#ADD8E6'}}}></VictoryBar>
                        <VictoryBar barRatio={1} data={data.ln.slice(0, 3)} style={{data: {fill: '#FFB6C1'}}}></VictoryBar>
                    </VictoryGroup>
                </VictoryChart>
            </View>
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
      padding: 0,
      paddingTop: '10%',
      borderRadius: 0,
      width: '100%',
    },
    tableheader: {
        fontWeight: 'bold'
    }
  });
  

