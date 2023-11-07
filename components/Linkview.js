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

const Linkview = () => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{ margin: 20, fontWeight: 'bold', fontSize: 15 }}>This Month</Text>
            <View style={{ borderWidth: 1, borderColor: "#000", padding: 10, margin: 10 }}>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://meet.google.com/vwb-isnr-cje')}>
                    https://meet.google.com/vwb-isnr-cje
                </Text>
                <Text>To join the video meeting.click this link"https://meet.google.com/vwb-isnr-cje" Using your browser,share your videos</Text>

            </View>
            <View style={{ borderWidth: 1, borderColor: "#000", padding: 10, margin: 10 }}>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://meet.google.com/vwb-isnr-cje')}>
                    https://meet.google.com/vwb-isnr-cje
                </Text>
                <Text>To join the video meeting.click this link"https://meet.google.com/vwb-isnr-cje" Using your browser,share your videos</Text>

            </View>
            <View style={{ borderWidth: 1, borderColor: "#000", padding: 10, margin: 10 }}>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://meet.google.com/vwb-isnr-cje')}>
                    https://meet.google.com/vwb-isnr-cje
                </Text>
                <Text>To join the video meeting.click this link"https://meet.google.com/vwb-isnr-cje" Using your browser,share your videos</Text>

            </View>
            <View style={{ borderWidth: 1, borderColor: "#000", padding: 10, margin: 10 }}>
                <Text style={{ color: 'blue' }}
                    onPress={() => Linking.openURL('https://meet.google.com/vwb-isnr-cje')}>
                    https://meet.google.com/vwb-isnr-cje
                </Text>
                <Text>To join the video meeting.click this link"https://meet.google.com/vwb-isnr-cje" Using your browser,share your videos</Text>

            </View>
        </ScrollView>
    );
};
export default Linkview;
const styles = StyleSheet.create({
    logo: {
        width: 95,
        height: 70,
        marginLeft: 10,
        marginTop: 3
        // tintColor: "#fff"
    },
});