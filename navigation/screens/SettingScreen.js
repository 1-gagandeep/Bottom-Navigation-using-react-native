import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingScreen({navigation}) {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text
            onPress={() => navigation.navigate('Home')}
            style={{fontSize:26, fontWeight:'bold', }}>Setting Screen</Text>

        </View>
    )
}