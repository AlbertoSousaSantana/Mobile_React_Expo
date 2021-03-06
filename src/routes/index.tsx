import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../pages/Login';
import SignUpPage from '../pages/SignUp';
import ProductList from '../pages/ProductList';

export type TypeRoutes = {
    Post: undefined;
    SignUp: undefined;
    Login: undefined;
    Home: undefined;
    ProductList: undefined;
}

const Stack = createNativeStackNavigator<TypeRoutes>();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="SignUp" component={SignUpPage} />   
                <Stack.Screen name="Product" component={ProductList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}