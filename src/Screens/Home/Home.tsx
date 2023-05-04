import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Color} from '../../Utility';
import {_Header} from '../../Components';
import {
  ApplicationModule,
  FamilyDetail,
  ProfileCard,
  RequestAmmount,
  Status,
  TopTab,
} from '../../module';
import {useApi} from '../../Utility/Api';
import {UrlConstrant} from '../../Utility/Api/urlConstrant';
import {dataProps} from './interface';
import {styles} from './style';
export const Home = () => {
  const [data, setData] = useState<dataProps>();
  const [selectedTab,setSelectedTab]=useState<boolean>(false)
  const api = useApi();
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = () => {
    api.getData(`${UrlConstrant.getUser}223`)?.then(res => {
      setData(res?.member_personal_details);
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Color.White} />
        <_Header
          onPressRightButton={() => {
            console.log('Menue Pressed..');
          }}
        />
        <View style={styles.profileContainer}>
          <ProfileCard
            image={data?.profile_pic}
            name={`${data?.first_name} ${data?.last_name}`}
            cinc={data?.cnic}
          />
        </View>
        <TopTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {
          selectedTab?
          <Status />
          :
          <ApplicationModule
          dateOfBirth={data?.dob}
          education={data?.education}
          gender={data?.gender}
          maritalStatus={data?.marital_status}
          mobile={data?.phone}
          perentage={data?.parantage_type}
        />}
        <FamilyDetail
          businessAddress={`${data?.address?.city},${data?.address?.country}`}
          familyMemberCNIC={data?.family[0]?.mf_cnic}
          familyMemberName={data?.family[0]?.mf_name}
          isDisable={data?.is_disable}
          religion={data?.family[0]?.mf_religion}
        />
        <RequestAmmount
          requestAmmount={data?.income}
          category={'Category'}
          purpose={'Purpose'}
          status={'Pending'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
