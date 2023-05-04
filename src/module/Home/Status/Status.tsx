import React,{FC} from "react";
import { View,Text } from "react-native";
import { Color } from "../../../Utility";

export const Status:FC =()=>{
    return(
        <View style={{
            height:160,
            justifyContent:'center',
            alignItems:'center'
        }} >
            <Text style={{
                fontSize:20,
                color:Color.Secondry
            }} >{'Loading...'}</Text>
        </View>
    )
}