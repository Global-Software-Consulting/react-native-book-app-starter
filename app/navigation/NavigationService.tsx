import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

function navigate(name: string, params?: any) {
    navigationRef.current?.navigate(name, params);
}

function goBack() {
    navigationRef.current?.goBack();
}

export default {
    navigate,
    goBack,
};
