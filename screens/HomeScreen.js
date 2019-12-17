import React from 'react';
import { DrawerActions } from 'react-navigation-drawer'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View, Dimensions
} from 'react-native';

import { TabBarTop, TabView, TabBar, SceneMap } from 'react-native-tab-view';

import TabData from './TabData'

const screenWidth = Dimensions.get('window').width;
export default class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{ flexDirection: "row", paddingLeft: 10, backgroundColor: "black", borderBottomColor: "gray", borderBottomWidth: 0.2, paddingTop: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
            <Image style={{ width: 30, height: 30 }} source={require('../assets/images/robot-dev.png')}></Image>
          </TouchableOpacity>
          <Text style={{ flex: 8, textAlign: "center", fontSize: 30, color: "white" }}>Home</Text>
        </View>
      )
    }
  }

  state = {
    index: 0,
    routes: [
    ]
  }
  componentWillMount() {
    this.setState({
      routes: [
        { key: 'tab1', title: 'Tab1', data: 1 },
        { key: 'tab2', title: 'Tab2', data: 2 },
        { key: 'tab3', title: 'Tab3', data: 3 },
        { key: 'tab4', title: 'Tab4', data: 4 },
        { key: 'tab5', title: 'Tab5', data: 5 },
        { key: 'tab6', title: 'Tab6', data: 6 },
      ]
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.loadData()
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadData() {
      this.setState({
        index: this.state.index + 1,
        routes: [
          { key: 'tab1', title: 'Tab1', data: 8 },
          { key: 'tab2', title: 'Tab2', data: 9 },
          { key: 'tab3', title: 'Tab3', data: 13 },
          { key: 'tab4', title: 'Tab4', data: 14 },
          { key: 'tab5', title: 'Tab5', data: 15 },
          { key: 'tab6', title: 'Tab6', data: 16 },
        ]
      })
  }


  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props =>
    <TabBar {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: '#fff' }}
      style={styles.header}
      tabStyle={styles.tabBarTab}
      labelStyle={style = {
        fontSize: 14,
        textAlign: "center",
      }

      }
    />;

  _renderScene = (route) => {
    return (
      <TabData data={route.route.data} />
    )
  }
  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}

      />
    );

  }
}


const styles = StyleSheet.create({
  scene: {
    flex: 1

  },
  header: {
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  tabBarTab: {
    height: 50,
    width: screenWidth / 5,

  },
});