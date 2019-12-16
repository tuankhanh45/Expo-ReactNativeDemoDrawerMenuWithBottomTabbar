import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Dimensions
} from 'react-native';
export default class TabData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {
        return (
            <View><Text> data: {this.state.data}  </Text></View>
        )
    }
}
