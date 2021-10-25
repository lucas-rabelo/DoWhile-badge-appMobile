import React, { useState } from 'react';
import { TextInput, View, Alert, Keyboard } from 'react-native';

// components
import { Button } from '../Button';

// styles
import { COLORS } from '../../theme';
import { styles } from './styles';
import { api } from '../../services/api';

export function SendMessageForm(){

    const [ message, setMessage ] = useState('');
    const [ sendingMessage, setSendingMessage ] = useState(false);

    async function handleMessageSubmit() {
        const messageFormatted = message.trim();

        if( messageFormatted.length > 0 ) {
            setSendingMessage(true);
            
            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);
            Alert.alert('Aviso', 'Mensagem enviado com sucesso');
        } else {
            Alert.alert('Aviso', 'Escreva a mensagem para enviar.');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento?"
                placeholderTextColor={COLORS.WHITE}
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendingMessage}
            />

            <Button 
                color={COLORS.WHITE}
                backgroundColor={COLORS.PINK} 
                title="ENVIAR MENSAGEM"
                isLoading={!sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    );
}