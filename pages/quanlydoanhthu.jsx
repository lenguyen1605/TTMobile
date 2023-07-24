import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLegend, VictoryPie,
    VictoryContainer } from "victory-native"
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { DataTable } from 'react-native-paper';
import doanhthufake from './doanhthu.json';


export default function Doanhthu() {
    return (
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
                        <DataTable.Cell>{x.thang}</DataTable.Cell>
                        <DataTable.Cell>{x.doanhThu}</DataTable.Cell>
                        <DataTable.Cell>{x.luong}</DataTable.Cell>
                        <DataTable.Cell>{x.loiNhuan}</DataTable.Cell>
                    </DataTable.Row>
                )
            })}

        </DataTable>
    )
}
const styles = StyleSheet.create({
    tableheader: {
        fontWeight: 'bold'
    }
})