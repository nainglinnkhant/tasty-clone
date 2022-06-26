import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Discover from '../screens/Discover'
import RecipeDetails from '../screens/RecipeDetails'
import Search from '../screens/Search'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Discover'
                component={Discover}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen name='Recipe Details' component={RecipeDetails} />

            <Stack.Screen
                name='Search'
                component={Search}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator
