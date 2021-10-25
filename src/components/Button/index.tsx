import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ColorValue, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// styles
import { styles } from './styles';

type Props = TouchableOpacityProps & {
    color: string;
    title: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    isLoading?: boolean; 
}

export function Button({ 
    color,
    title,
    backgroundColor,
    icon,
    isLoading = false,
    ...rest }: Props
){
    return (
        <TouchableOpacity 
            style={[
                styles.button, { backgroundColor }
            ]}
            activeOpacity={.7}
            disabled={isLoading}
            {...rest}
        >
            { isLoading ? 
                <ActivityIndicator color={color}/>
                :
                <>
                    <AntDesign name={icon} size={24} style={styles.icon}/>
                    <Text style={[
                        styles.title, { color }
                    ]}>
                        { title }
                    </Text>
                </>
            }
        </TouchableOpacity>
    );
}