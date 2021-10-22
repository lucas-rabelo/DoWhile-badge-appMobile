import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../theme';

import { Button } from '../Button';

import { styles } from './styles';

export function SignInBox(){
    return (
        <View style={styles.container}>
            <Button 
                backgroundColor={COLORS.YELLOW} 
                color={COLORS.BLACK_PRIMARY}
                title="ENTRAR COM O GITHUB" 
                icon="github"
            />
        </View>
    );
}