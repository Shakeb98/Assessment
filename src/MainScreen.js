import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Manage from './Component/manage';
import BalanceDetail from './Component/BalanceDetail';
import Enable from './Component/enable';
import CallAlert from './Component/callAlert';
import Shortcut from './Component/shortcut';
import NewServices from './Component/newServices';
import TravelOtt from './Component/travelOtt';
import FirstHorizontal from './Component/firstHorizontal';
import Recommended from './Component/recommended';
import UnlockBenifits from './Component/unlockBenifits';

export default class MainScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wholeScreen} stickyHeaderIndices={[0]}>
          <Manage />
          <BalanceDetail />
          <Enable />
          <CallAlert />
          <Shortcut />
          <NewServices />
          <TravelOtt />
          <FirstHorizontal />
          <Recommended />
          <UnlockBenifits />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  wholeScreen: {
    flex: 1,
    backgroundColor: 'rgb(239,241,253)'
  },
})