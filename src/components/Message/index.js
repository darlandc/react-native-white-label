import React from 'react';
import { View, Text } from 'react-native';

export default function Message(props){
    return(
        <View>
            <Text>{props.typeMessage}</Text>
            <Text>{props.message}</Text>
        </View>
    )
}
