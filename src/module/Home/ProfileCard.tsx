import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Color} from '../../Utility';
import {_Icon} from '../../Components';

interface props {
  image?: string;
  name?:string;
  cinc?:string
}
export const ProfileCard: FC<props> = ({image,name,cinc}) => {
    console.log('-=-=-=- image --- ',image);
    
  return (
    <View style={styles.mainCard}>
      <View style={styles.imageContainer}>
        <Image
        source={{uri:`data:image/jpeg;base64,${image}`}}
          resizeMode="center"
          style={styles.imageStyle}
        />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 20,
            color: Color.Black,
            fontWeight: '500',
          }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems:'center',
            marginLeft:10,
            marginTop:10
          }}>
          <_Icon
            name="card-account-details-outline"
            family="MaterialCommunityIcons"
            color={Color.Secondry}
            size={20}
          />
          <Text
            style={{
              marginLeft: 10,
              fontSize: 16,
              color: Color.Secondry,
              fontWeight: '500',
            }}>
            {cinc}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCard: {
    height: 140,
    width: '90%',
    backgroundColor: Color.White,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: -80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 60,
  },
});
