import {View, Text} from 'react-native';
import {React, useState} from 'react';
import usersfake from './usersfake.json';
import { Card, DataTable, Dialog, Divider} from 'react-native-paper'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Overlay, Header } from 'react-native-elements';


export default function Bangchamcong() {
    const [visible, setVisible] = useState(false);
    const [tempid, setTempId] = useState(0);
    
    // const num_days = data?.nam && data?.thang ? (new Date(data?.nam, data?.thang, 0)).getDate() : 0;
    const num_days = (new Date(2023,5,0)).getDate()

    return (
        <View>
            
            {usersfake.map((x,idx) => {
                return (
                    <TouchableOpacity onPress={() => {
                        setVisible(!visible)
                        setTempId(idx)
                        }}>
                        <Card style = {{marginLeft: 10, marginRight: 10, marginTop: 10}}>
                            <Card.Title style ={{ backgroundColor: '#ADD8E6'}} titleStyle ={{fontWeight: 'bold', color: '#B22222', textAlign: 'justify'}} title ={x.name +' - '+ x.id}/>
                            <Divider style={{backgroundColor: '#ADD8E6'}}/>
                            <Card.Content style = {{marginTop: 10}}>
                                <Text > Số tiết 30 phút: {x.chamcong.bamuoiphut} </Text>
                                <Text> Số tiết 45 phút: {x.chamcong.bonlamphut} </Text>
                                <Text> Số tiết 60 phút: {x.chamcong.saumuoiphut}</Text>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                )
            })}

            <Overlay
                isVisible={visible}
                onBackdropPress={() =>setVisible(false)}
                style={{width: '100%'}}>
                    <Header 
                        placement='left'
                        containerStyle = {{backgroundColor: '#ADD8E6'}} 
                        leftComponent={{ text: usersfake[tempid].name +'  -  '+ usersfake[tempid].id, style: { color: 'black', fontWeight: 'bold' } }}
                        rightComponent=
                            {{text: 'Tổng số tiết dạy: ' + `${usersfake[tempid].chamcong.bamuoiphut + usersfake[tempid].chamcong.bonlamphut + usersfake[tempid].chamcong.saumuoiphut}` }}
                        >
                    </Header>

                    {usersfake[tempid].listlop.map ((x, idx_class) => {
                        return (
                            <View>
                                <Text style ={{marginTop: 10, fontWeight: 'bold'}}> Mã lớp: {x?.malop} -  Môn học: {x?.monhoc} 
                                </Text>
                                <Text style ={{marginTop: 10}}> Học viên: {x?.hocvien} 
                                </Text>

                                <ScrollView horizontal>
                                    <DataTable>
                                    {/* <ScrollView horizontal> */}
                                        <DataTable.Header>
                                        {[...Array(num_days)].map((a, index) => {
                                            return <DataTable.Title > {index + 1} </DataTable.Title>
                                        })}
                                        </DataTable.Header>
                                        <DataTable.Row>
                                            {[...Array(num_days)].map((ngay, i) => {
                                        return (
                                            <DataTable.Cell key={``} numeric>                                            
                                            {x?.gioday[i]?.cahoc}
                                            
                                            </DataTable.Cell>
                                        )
                                        })}
                                        </DataTable.Row>
                                        {/* </ScrollView> */}
                                    </DataTable>
                                </ScrollView>

                            </View>
                            
                        )
                    })}

                    
                
            </Overlay>
        </View>
        
    )
}