import React, {FC} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { Color } from '../../../Utility';

interface props{
    requestAmmount?:string;
        category?:string;
        purpose?:string;
        status?:string;
}
export const RequestAmmount: FC<props> = ({
    category,
requestAmmount,
purpose,
status
}) => {
  return (
    <View style={styles.main}>
        <View style={styles.header}>
            <Text style={styles.headerText} >Request Ammount</Text>
        </View>
        <View style={{paddingHorizontal:20,paddingVertical:10}} >
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Request Ammount</Text>
            <Text style={styles.txtStyle} >{requestAmmount}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Category</Text>
            <Text style={styles.txtStyle} >{category}</Text>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.txtStyleHeading} >Purpose</Text>
            <Text style={styles.txtStyle} >{purpose}</Text>
        </View>
        <View style={styles.ammountStatus} >
            <Text style={styles.ammountStatusText} >{status}</Text>
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
  },
  ammountStatus:{
padding:10
  },
  ammountStatusText:{
    color:Color.danger,
    // fontSize:15,
    fontWeight:'900',
    textAlign:'center'
  }

});
