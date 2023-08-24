import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import Calculator from "./Calculator";
import History from "./History";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="History" component={History} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}