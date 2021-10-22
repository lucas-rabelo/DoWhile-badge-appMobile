import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){

    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

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
            />
        </View>
    );
}