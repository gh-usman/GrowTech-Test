import React,{FC} from "react";
import { View,Text, StyleSheet } from "react-native";
import { _Icon } from "../../../Components";
import { Color } from "../../../Utility";

interface props{
gender?:string;
maritalStatus?:string;
perentage?:string;
mobile?:string;
dateOfBirth?:string;
education?:string;
}
export const ApplicationModule:FC<props> = ({
gender,
maritalStatus,
perentage,
mobile,
dateOfBirth,
education
})=>{
    return(
        <View style={{
            height:160,
        }} >
            <View style={styles.conatianer}  >
                <View style={styles.iconContainer} >
                    <_Icon name="user" family="Feather" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{gender}</Text>
                    <Text style={styles.lableText}>Gender</Text>
                </View>

                <View style={styles.iconContainer} >
                    <_Icon name="ring" family="MaterialCommunityIcons" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{maritalStatus}</Text>
                    <Text style={styles.lableText}>Marital Status</Text>
                </View>

                <View style={styles.iconContainer} >
                    <_Icon name="family-restroom" family="MaterialIcons" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{perentage}</Text>
                    <Text style={styles.lableText}>{'Perentage(Father)'}</Text>
                </View>
            </View>
            <View style={styles.conatianer}  >
            <View style={styles.iconContainer} >
                    <_Icon name="phone-call" family="Feather" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{mobile}</Text>
                    <Text style={styles.lableText}>Mobile</Text>
                </View>

                <View style={styles.iconContainer} >
                    <_Icon name="calendar" family="MaterialCommunityIcons" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{dateOfBirth}</Text>
                    <Text style={styles.lableText}>Date of Birth</Text>
                </View>

                <View style={styles.iconContainer} >
                <_Icon name="user" family="Feather" size={25} color={Color.Secondry} />
                    <Text style={styles.mianText}>{education}</Text>
                    <Text style={styles.lableText}>{'Education'}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conatianer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingTop:20,
    },
    mianText:{
        color:Color.Black,
        fontWeight:'500',
        fontSize:12,
        paddingLeft:5
    },
    lableText:{
        color:Color.Black+99,
        fontSize:12,
        paddingLeft:5
    },
    iconContainer:{
        width:'30%'
    }
})