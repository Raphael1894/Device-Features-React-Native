import { StatusBar } from "expo-status-bar";
import { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import { Colors } from "./constants/colors";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Fragment>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500}, headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700}
        }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({navigation}) => ({
              title: 'Your favorite places',
              headerRight: ({ tintColor }) => (
                <IconButton icon={"add"} size={24} color={tintColor} onPress={() => navigation.navigate('AddPlace')}/>
              ),
            })}
          />
          <Stack.Screen name="AddPlace" options={{title: 'Add a new place'}} component={AddPlace} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}
