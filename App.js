import 'react-native-gesture-handler'
import React from 'react'
import BottomTab from './src/navigators/BottomTab'
import { extendTheme, NativeBaseProvider } from 'native-base'

const theme = extendTheme({
    colors: {
        primary: {
            100: '#e40754',
        },
        secondary: {
            100: '#79dcf1',
        },
        tertiary: {
            100: '#0c8097',
        },
        text: {
            100: '#222',
        },
        gray: {
            100: '#f4f4f4',
        },
    },
    fontConfig: {
        ProximaNova: {
            100: {
                normal: 'ProximaNova-Thin',
            },
            200: {
                normal: 'ProximaNova-Thin',
            },
            300: {
                normal: 'ProximaNova-Light',
            },
            400: {
                normal: 'ProximaNova-Regular',
            },
            500: {
                normal: 'ProximaNova-Regular',
            },
            600: {
                normal: 'ProximaNova-Bold',
            },
            700: {
                normal: 'ProximaNova-Bold',
            },
            800: {
                normal: 'ProximaNova-Extrabold',
            },
            900: {
                normal: 'ProximaNova-Black',
            },
        },
    },
    fonts: {
        heading: 'ProximaNova',
        body: 'ProximaNova',
        mono: 'ProximaNova',
    },
})

const App = () => {
    return (
        <NativeBaseProvider theme={theme}>
            <BottomTab />
        </NativeBaseProvider>
    )
}

export default App
