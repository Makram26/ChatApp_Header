import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Mediaview from '../../components/mediaview'
import Linkview from '../../components/Linkview';
import Docsview from '../../components/Docsview';
const Media = ({navigation}) => {
    const [media, setMedia] = useState(true)
    const [link, setLink] = useState(false)
    const [docs, setDocs] = useState(false)
    const GoToMedia = () => {
       setDocs(false)
        setLink(false)
        setMedia(true);
    }
    const GoToLink = () => {
        setDocs(false)
        setLink(true)
        setMedia(false);
    }
    const GoToDocs = () => {
        setLink(false)
        setMedia(false);
        setDocs(true)
    }
    const btncolor1 = media ? "#2e39c9" : "#fff";
    const btncolor2 = link ? "#2e39c9" : "#fff";
    const btncolor3 = docs ? "#2e39c9" : "#fff";
    const textcolor1=media? "#fff" : "#000";
    const textcolor2=link? "#fff" : "#000";
    const textcolor3=docs? "#fff" : "#000";
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.HeaderStyle}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/arrowpng.png')} style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', borderColor: "#000", justifyContent: 'space-between', borderWidth: 1 }}>
                    <View style={{ flex: 1, backgroundColor: btncolor1 }}>
                        <TouchableOpacity onPress={() => GoToMedia()}
                         style={{ borderWidth: 1, padding: 12, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: textcolor1 }}>Media</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: btncolor2 }}>
                        <TouchableOpacity onPress={() => GoToLink()}
                        style={{ borderWidth: 1, padding: 12, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color:textcolor2 }}>Link</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, backgroundColor: btncolor3 }}>
                        <TouchableOpacity onPress={() => GoToDocs()}
                        style={{ borderWidth: 1, padding: 12, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: textcolor3}}>Docs</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ marginTop: 10, fontSize: 18, color: "#2e39c9" }}>select</Text>
                </View>

            </View>
            <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
            {
                media ?
                    <Mediaview />
                    :
                    null
            }
            {
                link ?
                    <Linkview />
                    :
                    null
            }
            {
                docs ?
                    <Docsview />
                    :
                    null
            }

        </View>
    );
};
export default Media;
const styles = StyleSheet.create({
    HeaderStyle: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 15
    },
    logo: {
        width: 60,
        height: 25,
        margin: 10
        // tintColor: "#fff"
    },
});