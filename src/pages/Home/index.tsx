import React from 'react';
import { View } from 'react-native';

// pages
import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/Auth';
import { SendMessageForm } from '../../components/SendMessageForm';

import { styles } from './styles';

export function Home(){

    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Header />
            <MessageList />
            { user ? <SendMessageForm /> : <SignInBox /> }
        </View>
    );
}