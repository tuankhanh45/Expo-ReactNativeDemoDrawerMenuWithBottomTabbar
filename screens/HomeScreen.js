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
    routes: []
  }
  componentWillMount() {
    let root = [];
    for (i = 0; i < 11; i++) root.push(
      { key: `tab${i}`, title: `Tab ${i}`, data: i, index: i }
    )

    this.setState({
      routes: root,
      index: parseInt(root.length / 2)
    })
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     this.loadData()
  //   }, 5000);
  // }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  loadData() {
    let root = [];
    for (i = 0; i < 11; i++) root.push(
      { key: `tab${i}`, title: `Tab ${i}`, data: i + 10, index: i }
    )
    this.setState({
      index: this.state.index > 10 ? 0 : this.state.index + 1,
      routes: root
    })
  }


  _handleIndexChange = index => this.setState({ index });

  _renderLabel(props) {
    {
      return ({ route }) => {
        const focused = route.index === props.navigationState.index;
        return (
          <View>
            <Text
              style={{
                textAlign: "center",
                color: focused ? "#f60" : "#fff"
              }}>
              {route.title}</Text>
          </View>
        )
      }

    }

  }
  _renderTabBar = props =>
    <TabBar {...props}
      scrollEnabled
      indicatorStyle={{ backgroundColor: 'transparent' }}
      style={styles.header}
      tabStyle={styles.tabBarTab}
      // labelStyle={
      //   style = {
      //     fontSize: 14,
      //     textAlign: "center",
      //     color: '#000'
      //   }

      // }

      renderLabel={this._renderLabel(props)}
    />;

  _renderScene = (route) => {
    return (
      <TabData navigation={this.props.navigation} />
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabView
          style={{ height: 300 }}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          render
          lazy={true}
          scrollEnabled={true}
          bounces={true}
        />

        <View>
          <Text>hello</Text>
        </View>
      </View>

    );

  }
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,

  },
  header: {
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  tabBarTab: {
    height: 50,
    width: screenWidth / 5
  },
});