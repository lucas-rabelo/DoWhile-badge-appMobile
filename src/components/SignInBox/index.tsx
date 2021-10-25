import React from 'react';
import { View } from 'react-native';

// hooks
import { useAuth } from '../../hooks/Auth';

// components
import { Button } from '../Button';

// styles
import { COLORS } from '../../theme';
import { styles } from './styles';

export function SignInBox(){

    const { signIn, isSignIng } = useAuth();

    return (
        <View style={styles.container}>
            <Button 
                backgroundColor={COLORS.YELLOW} 
                color={COLORS.BLACK_PRIMARY}
                title="ENTRAR COM O GITHUB" 
                icon="github"
                onPress={signIn}
                isLoading={isSignIng}
            />
        </View>
    );
}