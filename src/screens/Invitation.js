import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking
} from 'react-native';
import LinkIcon from 'react-native-vector-icons/Entypo';
const Invitaion = () => {
    return (
        <View style={{ flex: 1, }}>
            <Text style={{ fontSize: 18, margin: 14 }}>Any with wobb can follow this link to join this group only share it with people you trust</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100, }}>
                    <LinkIcon name="link" size={50} color="#fff" />
                </Text>
                <View style={{ alignItems: 'center', marginTop: 18, width: "55%" }}>
                    <Text style={{ marginLeft: 20, alignItems: 'center', color: 'blue' }} onPress={() => Linking.openURL('https://meet.google.com/vwb-isnr-cje')}>
                        https://meet.google.com/vwb-isnr-cje
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10, marginLeft: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: "#2e39c9", padding: 10 }} >
                        <Text style={{ alignItems: 'center', color: "#fff" }}>Copy Link</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default Invitaion;
const styles = StyleSheet.create({
});