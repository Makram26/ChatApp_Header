import React, { useState, useContext } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Alert,
  Modal
} from 'react-native';
import CameraICon from 'react-native-vector-icons/Entypo';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/Feather';
import Icon5 from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function GroupSettings({navigation}) {
  const [users, setUsers] = useState([])
  const [count, setCount] = useState(0)
  // const image = ;
  const [image, setImage] = useState({ uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/upwk61813380-wikimedia-image.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=35040e9874b05a262b0e5ffdd27806cf" });
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModelshow, setFirstModelshow] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [notificationIcon, setNotificationIcon] = useState(true);
  const addUsers = () => {
    users.push({
      name: count
    })
    setCount(count + 1)
  }
  const ChangeToggle = (isOn) => {
    setToggle(isOn)
    if (toggle == true) {
      setNotificationIcon(false)
    }
    else {
      setNotificationIcon(true)
    }
  }
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setImage(response);
    });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Image source={require('../../assets/arrowpng.png')} style={styles.logo} />
          <View style={styles.CameraView}>
            <TouchableOpacity onPress={() => chooseFile('photo')}>
              <Text style={{ backgroundColor: "#e8e6e1", padding: 15, borderRadius: 100 }}>

                <CameraICon name="camera" size={25} color="#000" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={styles.DetailContainer}>
        <View  >
          <Modal
            animationType="slide"
            transparent={true}
            visible={firstModelshow}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setFirstModelshow(!firstModelshow);
            }}>
            <View style={styles.FirstmodelView}>
              <View style={styles.FirstmodalView}>
                <TouchableOpacity style={{ alignItems: "flex-end", marginRight: 10 }} onPress={() => setFirstModelshow(!firstModelshow)}>
                  <Text><CameraICon name="cross" size={20} color="#000" /></Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 20 }}>Message you</Text>
                <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 20 }}>View Your's Profile</Text>
                <View style={styles.underline} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 20 }}>Make group admin</Text>
                <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
                <Text style={{ fontWeight: 'bold', fontSize: 15, padding: 15 }}>Remove You</Text>
                {/* <View style={{borderColor: "#c4c2bc",borderWidth: 1,}} /> */}
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.GroupName}>
          <Text style={styles.groupText}>Groupchat Name</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text><EditIcon name="mode-edit" size={20} color="#000" /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.underline} />
        <View style={styles.GroupName}>
          <Text style={styles.groupDescription}>Add Description</Text>
          <TouchableOpacity onPress={() => setFirstModelshow(true)}>
            <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text>
          </TouchableOpacity>
        </View>
        <View style={styles.underline} />
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              <Icon3 name="document" size={20} color="#fff" />
            </Text>
            <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Media,Links,Docs</Text>
          </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Media")}>
          <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              {
                notificationIcon ?
                  <EditIcon name="notifications-off" size={20} color="#fff" />
                  :
                  <EditIcon name="notifications-on" size={20} color="#fff" />
              }
            </Text>
            <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Mute notification</Text>
          </View>
          <ToggleSwitch
            isOn={toggle}
            onColor="#2e39c9"
            offColor="#c4c2bc"
            size="small"
            onToggle={isOn => ChangeToggle(isOn)}
          />
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              <Icon4 name="settings" size={20} color="#fff" />
            </Text>
            <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Group Setting</Text>
          </View>
          <TouchableOpacity  onPress={() => navigation.navigate("Settings")}>
          <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              <Icon5 name="delete" size={20} color="#fff" />
            </Text>
            <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Delete Group</Text>
          </View>
          {/* <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text> */}
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        <View style={styles.GroupName}>
          <Text style={[styles.groupText], { color: "#2e39c9" }}>8 participants</Text>
          <Text><Icon4 name="search" size={20} color="#2e39c9" /></Text>
        </View>
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              <Icon3 name="person" size={20} color="#fff" />
            </Text>
            <TouchableOpacity onPress={() => addUsers()}>
              <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Add New Participants</Text>
            </TouchableOpacity>
          </View>
          {/* <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text> */}
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        <View style={styles.GroupName}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ backgroundColor: "#2e39c9", padding: 5, borderRadius: 100 }}>
              <CameraICon name="link" size={20} color="#fff" />
            </Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Invitaion")}>
            <Text style={{ marginLeft: 5, marginTop: 8, fontWeight: 'bold', fontSize: 15 }}>Invite via link</Text>
            </TouchableOpacity>
          </View>
          {/* <Text><CameraICon name="chevron-thin-right" size={20} color="#999793" /></Text> */}
        </View>
        <View style={{ borderColor: "#c4c2bc", borderWidth: 1, }} />
        {users.map((item, index) => {
          return (
            <View style={{ flexDirection: 'row', padding: 12 }}>
              {/* <Image source={require('../assets/image.jpg')} style={{width:"40",height:"40%",borderRadius:100}} /> */}
              <Image source={require('../../assets/image.jpg')} style={{ width: 45, height: 45, borderRadius: 100 }} />
              <View style={{ marginLeft: 10 }}>
                <Text>Iram</Text>
                <Text>iram@gmail.com</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View  >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.GroupName}>
                <Text style={styles.groupText}>Group Name</Text>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text><CameraICon name="cross" size={20} color="#000" /></Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={{ margin: 15, borderColor: "#c4c2bc", borderWidth: 1 }}
                placeholder="Type group name here.."
              />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                  style={{ backgroundColor: "#2e39c9", width: "93%", alignItems: 'center', padding: 12 }}>
                  <Text style={{ alignItems: 'center', fontSize: 20, fontWeight: 'bold', color: "#fff" }}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  imageContainer: {
    flex: 0.5,
  },
  DetailContainer: {
    flex: 2,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    // justifyContent: "center"
  },
  logo: {
    width: 60,
    height: 25,
    margin: 20
    // tintColor: "#fff"
  },
  CameraView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 30
  },
  GroupName: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor:"#000",
    padding: 15
  },
  groupText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  underline: {
    borderColor: "#c4c2bc",
    borderWidth: 0.5,
  },
  groupDescription: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#c4c2bc"
  },
  FirstmodelView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    margin: 25
  },
  FirstmodalView: {
    margin: 20,
    width: "100%",
    height: "40%",
    backgroundColor: "white",
    padding: 12,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    width: "100%",
    height: "32%",
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 12,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10
  },
  button: {
    width: "100%",
    padding: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});