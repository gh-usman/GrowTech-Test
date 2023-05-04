import React, { FC } from "react";
import {View,Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Color } from "../Utility";
import { _Icon } from "./Icon";

interface props{
HeadingText?:string;
discriptionText?:string;
headingColor?:string;
discriptionColor?:string;
onPressRightButton?:()=>void
}

export const _Header:FC<props> = ({
HeadingText='GROWTECH',
discriptionText='Application Varification',
headingColor='green',
discriptionColor='gray',
onPressRightButton,


}) =>{

    return(
        <View style={styles.container} >
            <View style={styles.titleContainer} >
                <Text style={[styles.headingText,{color:headingColor}]} >{HeadingText}</Text>
                <Text style={[styles.discriptionText,{color:discriptionColor}]} >{discriptionText}</Text>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.btnTouch} >
                <_Icon name="bell-ring-outline" family="MaterialCommunityIcons" size={25} color={Color.Gray} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>onPressRightButton?.()} style={styles.btnTouch}  >
                <_Icon name="menu" family="Feather" size={25} color={Color.Gray} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    backgroundColor:Color.Primary,
    width:'95%',
    alignSelf:'center',
    height:120,
    flexDirection:'row',
    paddingTop:20

},
titleContainer:{
    width:'75%',
    paddingLeft:20
},
headingText:{
        fontSize:35,
        fontWeight:'900',
},
discriptionText:{
    fontSize:16,
    fontWeight:'900',
    marginLeft:5,
    marginTop:-5
},
iconContainer:{
    flexDirection:'row',
    width:'20%',
    justifyContent:'space-between',
    padding:10,
},
btnTouch:{
    height:30,
}
})