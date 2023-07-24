import {View, Text} from 'react-native';
import {React, useState} from 'react';
import usersfake from './usersfake.json';
import { Card, Divider} from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Overlay } from 'react-native-elements';

export default function Bangchamcong() {
    const [visible, setVisible] = useState(false);
    return (
        <View>
            
            {usersfake.map((x,idx) => {
                return (
                    <TouchableOpacity onPress={() => setVisible(!visible)}>
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
                onBackdropPress={() =>setVisible(false)}>
                <Text>Hello from Overlay!</Text>
            </Overlay>
        </View>
        
    )
}