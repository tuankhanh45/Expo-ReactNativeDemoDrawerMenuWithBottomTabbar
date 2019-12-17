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
    }

    render() {
        return (
            <View><Text> data: { this.props.data} </Text></View>
        )
    }
}
