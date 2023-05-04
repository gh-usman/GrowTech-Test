import React, {FC} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Color} from '../../../Utility';

interface props {
  selectedTab?: boolean;
  setSelectedTab?: (x: boolean) => void;
}
export const TopTab: FC<props> = ({selectedTab, setSelectedTab}) => {
  return (
    <View style={styles.tabContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
        onPress={()=>setSelectedTab?.(false)}
          style={!selectedTab?{
            borderBottomWidth: 3,
            borderColor: Color.Secondry,
          }:null}>
          <Text style={[styles.tabText, {color: selectedTab?Color.Black:Color.Secondry}]}>
            Application Details
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
         style={selectedTab?{
            borderBottomWidth: 3,
            borderColor: Color.Secondry,
          }:null}
        onPress={()=>setSelectedTab?.(true)}
        >
          <Text style={[styles.tabText, {color: selectedTab?Color.Secondry:Color.Black}]}>Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Color.Primary,
    width: '100%',
    height: 150,
    justifyContent: 'flex-end',
  },
  tabText: {
    fontSize: 15,
    paddingBottom: 8,
  },
});
