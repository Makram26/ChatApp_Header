import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const Settings = () => {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
  return (
    <View style={{ flex:1,marginTop:10}}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox1}
          onValueChange={(Value) => setToggleCheckBox1(Value)}
        />
        <Text style={styles.label}>Only admin can see all participants and messages</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox2}
          onValueChange={(Value) => setToggleCheckBox2(Value)}
        />
        <Text style={styles.label}>Only admin can change group name,description,icon and add participants</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox3}
          onValueChange={(Value) => setToggleCheckBox3(Value)}
        />
        <Text style={styles.label}>All participants as admins</Text>
      </View>
    </View>

  );
};
export default Settings;
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems:'center',
    marginTop:20,
    marginLeft:10,
    marginRight:20
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});