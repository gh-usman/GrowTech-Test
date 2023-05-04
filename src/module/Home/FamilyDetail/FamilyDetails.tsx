import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Color } from '../../../Utility';

interface props{
    familyMemberName?:string;
    familyMemberCNIC?:string;
    religion?:number;
    isDisable?:string;
    businessAddress?:string
}
export const FamilyDetail: FC<props> = ({
familyMemberCNIC,
familyMemberName,
religion,
isDisable,
businessAddress
}) => {
  return (
    <View style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerText} >Family Details</Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:10}} >
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Family Member Name</Text>
            <Text style={styles.txtStyle} >{familyMemberName}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Family Member CNIC</Text>
            <Text style={styles.txtStyle} >{familyMemberCNIC}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Religion</Text>
            <Text style={styles.txtStyle} >{religion===22?'Islam':'Non-Muslim'}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Is Disable</Text>
            <Text style={styles.txtStyle} >{isDisable}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Business Address</Text>
            <Text style={styles.txtStyle} >{businessAddress}</Text>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor:Color.White,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  header:{
    backgroundColor:Color.Black,
    width:'100%',
    height:50,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    justifyContent:'center',
    paddingLeft:20
  },
  headerText:{
    color:Color.White,
    fontSize:15,
    fontWeight:'500'
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingBottom:10
  },
  txtStyleHeading:{
    fontSize:12,
    textAlign:'left',
    fontWeight:'400'
  },
  txtStyle:{
    fontSize:13,
    fontWeight:'500',
    color:Color.Black,
    textAlign:'right'
  }
});
