import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/prepaid-recharge.png'),
    text: 'recharge',
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/paid-bill.png'),
    text: 'pay bills',
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-Thanks-Message-thank-you-others-pike-picture-3.png'),
    text: 'thanks benifit'
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-plus-sign-web-smashingstocks-glyph-smashing-stocks.png'),
    text: 'add existing connection'
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/paid-bill.png'),
    text: 'top up data'
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-Thanks-Message-thank-you-others-pike-picture-3.png'),
    text: 'international roaming'
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-plus-sign-web-smashingstocks-glyph-smashing-stocks.png'),
    text: 'upgrade to postpade'
  },
  {
    image: require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-plus-sign-web-smashingstocks-glyph-smashing-stocks.png'),
    text: 'airtel backup'
  }
]

export default class MainScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.wholeScreen}>
        <View style={styles.header}>
          <Image
            style={styles.accountLogo}
            source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/user.png')} />
          <Text style={styles.Text}>manage</Text>
          <Image
            style={styles.bellLogo}
            source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/appointment-reminders.png')} />
        </View>

        <View style={styles.travelWorld}>
          <View style={styles.lineThree}>
            <View style={styles.prepaid}>
              <Text style={styles.prepaidText}>PREPAID</Text>
              <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
            </View>

            <Text style={styles.services}>5 Services</Text>
            <TouchableOpacity style={styles.viewDetail}>
              <Text style={styles.viewDetailText}>VIEW DETAILS</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lineThreeSecond}>
            <View style={styles.money}>
              <Text style={styles.prepaidText}>MONEY</Text>
              <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
            </View>
            <View style={styles.tapdetails}>
              <Text style={styles.services}>₹.......</Text>
              <Text style={styles.prepaidText}>in your wallet</Text>
            </View>
            <TouchableOpacity style={styles.showbalanceDetail}>
              <Text style={styles.showbalanceDetailText}>SHOW BALANCE</Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.enable}>
          <Image style={styles.fiveGPlusLogo} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-5G-in-Hyderabad.png')} />
          <Text style={styles.checkText}>Check if your phone is 5G enabled</Text>
          <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
        </View>

        <View style={styles.callAlerts}>
          <View style={styles.call}>
            <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/download(2).jpeg')} />
            <Text>missed</Text>
            <Text>call alerts</Text>
          </View>
          <View style={styles.call}>
            <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/external-gift-valentines-day-flatart-icons-lineal-color-flatarticons-3.png')} />
            <Text>rewards &</Text>
            <Text>coupons</Text>
          </View>
          <View style={styles.call}>
            <Image style={styles.missedCall} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/user-design-260nw-236977519.webp')} />
            <Text>refer</Text>
            <Text>prepaid</Text>
          </View>
        </View>

        <View style={styles.shortcut}>
          <Text style={styles.shortcutText}>SHORTCUTS</Text>
          <FlatList
            horizontal={false}
            data={data}
            numColumns={4}
            renderItem={({ item }) =>
              <View style={styles.wholeFlatList}>
                <View style={styles.backgrd}>
                  <Image style={styles.flatListImages} source={item.image} />
                </View>
                <View style={styles.textStyle}>
                  <Text style={styles.textImage}>{item.text}</Text>
                </View>
              </View>
            }
          />
        </View>

        <View style={styles.newServices}>
          <Text style={styles.shortcutText}>BUY NEW SERVICES</Text>
          <FlatList
            horizontal={false}
            data={data}
            numColumns={4}
            renderItem={({ item }) =>
              <View style={styles.wholeFlatList}>
                <View style={styles.backgrd}>
                  <Image style={styles.flatListImages} source={item.image} />
                </View>
                <View style={styles.textStyle}>
                  <Text style={styles.textImage}>{item.text}</Text>
                </View>
              </View>
            }
          />
        </View>

        <View style={styles.travelWorld}>
          <View style={styles.lineThree}>
            <View style={styles.bagArrow}>
              <Image resizeMode={'contain'} style={styles.bagImage} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/images(7).png')} />
              <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
            </View>
            <View style={styles.travel}>
              <Text style={styles.travelText}>travel the world</Text>
              <Text style={styles.travelText}>with airtel</Text>
            </View>
            <View style={styles.roaming}>
              <Text>exploring international</Text>
              <Text>roaming packs</Text>
            </View>
          </View>

          <View style={styles.lineThreeSecond}>
            <View style={styles.lineThree}>
              <View style={styles.bagArrow}>
                <Image resizeMode={'contain'} style={styles.OttImage} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/top-10-ott-platforms-in-india-1200x675.jpeg')} />
                <Image style={styles.greaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
              </View>
              <View style={styles.travel}>
                <Text style={styles.travelText}>15 OTTs in 1 app</Text>
              </View>
              <View style={styles.roaming}>
                <Text>get Xstream Premium</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.firstHorizontalView}>
          <ScrollView horizontal={true}>
            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
            <Image resizeMode={'contain'} style={styles.imageHorizontal} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-vs-Jio-vs-Vi-56-Days-Prepaid-Plans-Compared.webp')} />
          </ScrollView>
        </View>

        <View style={styles.recommended}>
          <View style={styles.dottedLine}>
            <Text style={styles.recommendedText}>recommended for you</Text>
            <Text>- - ---</Text>
          </View>
          <Text style={styles.explore}>explore more from airtel</Text>
          <View style={styles.firstHorizontalView}>
            <ScrollView horizontal={true}>
              <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
              <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
              <Image resizeMode={'contain'} style={styles.imageRecommended} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/Airtel-Rs.-6000-cashback-offer.jpg')} />
            </ScrollView>
          </View>
        </View>

        <View style={styles.unlockBenifits}>
          <Text style={styles.unlockText}>unlock benifits at ₹1,599</Text>
          <View style={styles.benifitImages}>
            <Image resizeMode={'contain'} style={styles.imagewWfi} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/375-3757892_black-wifi-logo-transparent-image-free-icon-wifi.png')} />
            <View>
              <Text>up to 300</Text>
              <Text>Mbps wi-fi</Text>
            </View>
            <Image resizeMode={'contain'} style={styles.wifiImage} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/png-clipart-brown-crt-tv-illustration-television-show-icon-tv-television-rectangle.png')} />
            <View>
              <Text>350+ Tv</Text>
              <Text>channels</Text>
            </View>
            <Image resizeMode={'contain'} style={styles.wifiImage} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/download(1).jpeg')} />
            <View>
              <Text>17 OTT</Text>
              <Text>apps</Text>
            </View>
            <Image resizeMode={'contain'} style={styles.imagegreaterthan} source={require('/Users/shakeebkhan/Desktop/Assessment/src/Icon/more-than.png')} />
          </View>
          <Text style={styles.hardwareText}>get  hardware & installation at ₹0</Text>
        </View>
      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  firstHorizontalView:{
    paddingLeft:27
  },
  OttImage:{
    height:50,
    width:50
  },
  roaming: {
    top: 30
  },
  travel: {
    top: 25
  },
  travelText: {
    fontSize: 20,
  },
  bagArrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bagImage: {
    height: 50,
    width: 50
  },
  missedCall: {
    height: 40,
    width: 40,
    borderRadius: 10
  },
  fiveGPlusLogo: {
    height: 50,
    width: 80,
  },
  showbalanceDetailText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  showbalanceDetail: {
    width: 150,
    backgroundColor: 'black',
    height: 40,
    borderRadius: 10,
    top: 40,
    padding: 9,
    alignSelf: 'center',
  },
  viewDetailText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  viewDetail: {
    height: 40,
    backgroundColor: 'black',
    borderRadius: 10,
    top: 70,
    padding: 9
  },
  prepaidText: {
    color: 'gray'
  },
  services: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 17
  },
  shortcutText: {
    padding: 10,
    color: 'gray',
    paddingLeft: 20
  },
  textStyle: {
    width: 90,
    paddingTop: 5,
    paddingBottom: 20,
  },
  textImage: {
    textAlign: 'center',
    fontSize: 11,
    color: 'black'
  },
  wholeFlatList: {
    paddingRight: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5
  },
  backgrd: {
    border: 0,
    borderRadius: 100,
    padding: 12,
    backgroundColor: 'lavender'
  },
  flatListImages: {
    height: 24,
    width: 24,
  },
  hardwareText: {
    bottom: 22,
    paddingLeft: 10,
    color: 'dodgerblue'
  },
  imagegreaterthan: {
    height: 20,
    width: 20,
    top: 10
  },
  unlockText: {
    fontWeight: 'bold',
    padding: 15
  },
  imagewWfi: {
    height: 40,
    width: 50
  },
  wifiImage: {
    height: 50,
    width: 50
  },
  benifitImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    bottom: 15
  },
  unlockBenifits: {
    backgroundColor: 'white',
    height: 120,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    top: 45
  },
  imageRecommended: {
    height: 250,
    width: 200,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 8,
    resizeMode: 'stretch'
  },
  recommendedText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  explore: {
    paddingLeft: 15,
    bottom: 10,
    color: 'gray'
  },
  dottedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  recommended: {
    backgroundColor: 'white',
    height: 350,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    top: 25
  },
  imageHorizontal: {
    height: 200,
    width: 300,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 8,
    resizeMode: 'stretch'
  },
  call: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    padding: 17,
    borderRadius: 13,
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  callAlerts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    bottom: 20
  },
  greaterthan: {
    resizeMode: 'contain',
    height: 15,
    width: 20,
  },
  accountLogo: {
    resizeMode: 'contain',
    height: 50,
    width: 50,
    marginLeft:30
  },
  bellLogo: {
    resizeMode: 'contain',
    height: 40,
    width: 50,
  },
  Text: {
    paddingTop: 11,
    fontWeight: 'bold',
    fontSize: 20
  },
  header: {
    paddingTop: 30,
    backgroundColor: 'rgb(239,241,253)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:400
  },
  wholeScreen: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'rgb(239,241,253)'
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
  shortcut: {
    backgroundColor: 'white',
    height: 250,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    bottom: 25,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  newServices: {
    backgroundColor: 'white',
    backgroundColor: 'white',
    height: 250,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  gapOne: {
    height: 50
  },
  travelWorld: {
    flexDirection: 'row',
    padding: 30,
    justifyContent: 'space-between',
    bottom:10
  },
  lineThree: {
    backgroundColor: 'white',
    height: 200,
    width: 175,
    borderRadius: 15,
    padding: 13,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  lineThreeSecond: {
    backgroundColor: 'white',
    height: 200,
    width: 175,
    borderRadius: 15,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  prepaid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  daysLeft: {
    paddingTop: 25
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 13
  },
  tapdetails: {
    paddingLeft: 13,
    bottom: 10
  },
  enable: {
    backgroundColor: 'white',
    height: 50,
    width: 380,
    alignSelf: 'center',
    borderRadius: 10,
    bottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  checkText: {
    fontWeight: 'bold',
  }
})