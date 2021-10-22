import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto'; 

import { AuthProvider } from './src/hooks/Auth';

import { Home } from './src/pages/Home';

export default function App() {

    const [fontsLoaded] = useFonts({
        Roboto_700Bold,
        Roboto_400Regular
    });

    if(!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <AuthProvider>
            <StatusBar
                style="light"
                backgroundColor="transparent" 
                translucent
            />
            <Home />
        </AuthProvider>
    );
}