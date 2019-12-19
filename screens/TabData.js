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
            <View style={{ flex: 1, padding: 10, backgroundColor: 'gray' }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, borderRadius: 5 }} >
                        <View style={{ backgroundColor: "#222", padding: 10, borderTopLeftRadius:5,borderTopRightRadius:5 }}>
                            <Text style={{ color: "#fff", fontWeight: '600' }}>20-12 | Cup nhà vua TBN</Text>
                        </View>

                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("MatchDetails")}} style={{ flexDirection: 'row', alignContent: "center", justifyContent: "center", backgroundColor: '#333', padding: 10,borderBottomWidth:0.5,borderBottomColor:'#444' }}>
                            <View style={{ flex: 2, justifyContent: "center" }}>
                                <Text style={{ color: "#fff" }}>00:00</Text>
                            </View>

                            <View style={{ flex: 8, justifyContent: 'center' }}>
                                <Text style={{ color: "#fff" }}>- Badalona</Text>
                                <Text style={{ color: "#fff" }}>- Real Oviedo</Text>
                            </View>
                        </TouchableOpacity>

                        

                    </View>
                </ScrollView>
            </View>
        )
    }
}
