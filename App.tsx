import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from 'react-native-elements';

import { AuthScreen } from './screens/AuthScreen';
import { DeckScreen } from './screens/DeckScreen';
import { MapScreen } from './screens/MapScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

const ReviewFlow = createNativeStackNavigator();
const AuthFlow = createBottomTabNavigator();
const MainFlow = createBottomTabNavigator();

const ReviewNavScreen = () => {
    return (
        <ReviewFlow.Navigator screenOptions={{}}>
            <ReviewFlow.Screen
                name='Review'
                component={ReviewScreen}
                options={({ navigation }) => ({
                    headerRight: () => (
                        <Button
                            title='Settings'
                            onPress={() => navigation.navigate('Settings')}
                            type='clear'
                        />
                    ),
                })}
            />
            <ReviewFlow.Screen name='Settings' component={SettingsScreen} />
        </ReviewFlow.Navigator>
    );
};

const MainNavScreen = () => {
    return (
        <MainFlow.Navigator screenOptions={{}}>
            <MainFlow.Screen name='Deck' component={DeckScreen} />
            <MainFlow.Screen name='Map' component={MapScreen} />
            <MainFlow.Screen
                name='ReviewFlow'
                component={ReviewNavScreen}
                options={{
                    tabBarLabel: 'Review Jobs',
                }}
            />
        </MainFlow.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <AuthFlow.Navigator screenOptions={{}}>
                <AuthFlow.Screen name='Welcome' component={WelcomeScreen} />
                <AuthFlow.Screen name='Auth' component={AuthScreen} />
                <AuthFlow.Screen name='Main' component={MainNavScreen} />
            </AuthFlow.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
