import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { DrawerActions } from 'react-navigation-drawer'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{ flexDirection: "row", paddingLeft: 10, backgroundColor: "black", borderBottomColor: "gray", borderBottomWidth: 0.2, paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } >
              <Image style={{ width: 30, height: 30 }} source={require('../assets/images/robot-dev.png')}></Image>
          </TouchableOpacity>
          <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: "white" }}>Home</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <View>
        <Text>Hello screen 1</Text>
      </View>
    )

  }
}


