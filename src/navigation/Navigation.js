import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationDrawer from './NavigationDrawer';

export default function Navigation() {
    return(
        <NavigationContainer>
            <NavigationDrawer/>
        </NavigationContainer>
    )
} 