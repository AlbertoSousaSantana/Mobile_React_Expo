import React from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

import Routes from './src/routes';

export default function App() {
    ScreenOrientation.unlockAsync();
    return <Routes />;
}