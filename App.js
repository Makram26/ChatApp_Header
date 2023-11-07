import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import GroupSettings from './src/screens/GroupSettings';
import Invitaion from './src/screens/Invitation';
import Settings from './src/screens/Settings';
import Media from './src/screens/Media'
const Stack = createStackNavigator();
export default function App() {
  
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName="GroupSettings"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name='GroupSettings' component={GroupSettings} />
          <Stack.Screen name="Invitaion" options={{ headerShown:true,title:"Invite Link" }} component={Invitaion} />
          <Stack.Screen name="Settings" options={{ headerShown: true,title:"Group setting"}} component={Settings} />
          <Stack.Screen name="Media" options={{ headerShown: false }} component={Media} />
        </Stack.Navigator>
      </NavigationContainer>
    );
 
}
