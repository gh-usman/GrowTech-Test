import { StyleSheet } from "react-native";
import { Color } from "../../Utility";

export const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: Color.White,
    },
    profileContainer: {
      width: '100%',
      height: 80,
      zIndex: 10,
    },
    tabContainer:{
      backgroundColor: Color.Primary,
      width: '100%',
      height: 150,
      justifyContent:'flex-end'
    },
    tabText:{
      fontSize:15,
      paddingBottom:8,
    }
  
  });