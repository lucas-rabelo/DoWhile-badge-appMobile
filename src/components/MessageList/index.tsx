import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { io } from 'socket.io-client';

// utils
import { MESSAGES_EXAMPLE } from '../../utils/messages';

// components
import { Message, MessageProps } from '../../components/Message';
import { api } from '../../services/api';

// styles
import { styles } from './styles';

let messagesQueue: MessageProps[] = MESSAGES_EXAMPLE;

const socket = io(String(api.defaults.baseURL));
socket.on('new_message', (newMessage) => {
    messagesQueue.push(newMessage);
});

export function MessageList(){

    const [ currentMessages, setCurrentMessage ] = useState<MessageProps[]>([]);

    useEffect(() => {
        async function fetchMessage() {
            const messagesResponse = await api.get<MessageProps[]>('/messages/last3');
            setCurrentMessage(messagesResponse.data);
        }

        fetchMessage()
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if(messagesQueue.length > 0) {
                setCurrentMessage(prevState => [
                    messagesQueue[0],
                    prevState[0],
                    prevState[1]
                ])
                messagesQueue.shift()
            }
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            { currentMessages.map((message) => {
                <Message key={message.id} data={message} />
            }) }
        </ScrollView>
    );
}