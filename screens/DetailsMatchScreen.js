import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from "react-native";
export default class DetailsMatchScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            backgroundColor: "black",
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            paddingTop: 20
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Go back</Text>
          </TouchableOpacity>
          <Text
            style={{
              flex: 8,
              textAlign: "center",
              fontSize: 30,
              color: "white"
            }}
          >
            Details Match
          </Text>
        </View>
      )
    };
  };
  render() {
    return (
      <View style={{ flex: 1, padding: 10, backgroundColor: "gray" }}>
        <Text>DetailsMatchScreen</Text>
      </View>
    );
  }
}
