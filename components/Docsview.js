import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    Linking

} from 'react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';

const Docsview = () => {

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ margin: 20, fontWeight: 'bold', fontSize: 15 }}>This Month</Text>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            <View style={{ flexDirection: 'row',margin:10}}>


                <Text style={{  padding: 5, }}>
                    <Icon1 name="md-document-outline" size={50} color="#000" />
                </Text>
                <View style={{marginLeft:10}}>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Filename.jpg</Text>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>34.6 MB * jpg</Text>
                </View>

            </View>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            <View style={{ flexDirection: 'row',margin:10}}>


                <Text style={{  padding: 5, }}>
                    <Icon1 name="md-document-outline" size={50} color="#000" />
                </Text>
                <View style={{marginLeft:10}}>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Filename.jpg</Text>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>34.6 MB * jpg</Text>
                </View>

            </View>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            <View style={{ flexDirection: 'row',margin:10}}>


                <Text style={{  padding: 5, }}>
                    <Icon1 name="md-document-outline" size={50} color="#000" />
                </Text>
                <View style={{marginLeft:10}}>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Filename.jpg</Text>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>34.6 MB * jpg</Text>
                </View>

            </View>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            <View style={{ flexDirection: 'row',margin:10}}>


                <Text style={{  padding: 5, }}>
                    <Icon1 name="md-document-outline" size={50} color="#000" />
                </Text>
                <View style={{marginLeft:10}}>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Filename.jpg</Text>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>34.6 MB * jpg</Text>
                </View>

            </View>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            <View style={{ flexDirection: 'row',margin:10}}>


                <Text style={{  padding: 5, }}>
                    <Icon1 name="md-document-outline" size={50} color="#000" />
                </Text>
                <View style={{marginLeft:10}}>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Filename.jpg</Text>
                <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>34.6 MB * jpg</Text>
                </View>

            </View>
        </View>
    );
};
export default Docsview;
const styles = StyleSheet.create({
    logo: {
        width: 95,
        height: 70,
        marginLeft: 10,
        marginTop: 3
        // tintColor: "#fff"
    },
});