import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';

const mediaview = () => {

    return (
        <ScrollView style={{ flex: 1 }}>
            <Text style={{margin:20,fontWeight:'bold',fontSize:15}}>This Month</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>



            <Text style={{margin:20,fontWeight:'bold',fontSize:15}}>August</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>
            <Text style={{margin:20,fontWeight:'bold',fontSize:15}}>August</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20,}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginRight:20}}>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1,}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>
                 <View style={{flex:1}}>
                 <Image source={require('../assets/image.jpg')} style={styles.logo} />
                 </View>

            </View>
            
      
        </ScrollView>

    );
};
export default mediaview;
const styles = StyleSheet.create({
    logo: {
        width: 95,
        height: 70,
        marginLeft: 10,
        marginTop:3
        // tintColor: "#fff"
    },
});