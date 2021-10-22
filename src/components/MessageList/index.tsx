import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../../components/Message';

import { styles } from './styles';

export function MessageList(){

    const message = {
        id: '1',
        text: 'Mensagem de texto',
        user: {
            name: 'Lucas Rabelo',
            avatar_url: 'https://github.com/lucas-rabelo.png'
        }
    }

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
            <Message data={message} />
        </ScrollView>
    );
}