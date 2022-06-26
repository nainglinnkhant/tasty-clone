import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, Text, theme, useTheme } from 'native-base'
import { Ionicons, MaterialCommunityIcons } from '@native-base/icons'
import MyRecipes from '../screens/MyRecipes'
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    const { colors } = useTheme()

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: { height: 60 },
                    tabBarHideOnKeyboard: true,
                }}
            >
                <Tab.Screen
                    name='Stack Navigator'
                    component={StackNavigator}
                    options={{
                        title: 'Discover',
                        tabBarIcon: ({ size, color }) => (
                            <Icon
                                as={Ionicons}
                                name='search'
                                size={size}
                                color={color}
                            />
                        ),
                        tabBarLabel: ({ color }) => (
                            <Text
                                fontSize='md'
                                color={color}
                                fontWeight='extrabold'
                                style={{ marginBottom: -3 }}
                            >
                                Discover
                            </Text>
                        ),
                        tabBarItemStyle: styeles.tabBarItem,
                        tabBarActiveTintColor: colors.primary[100],
                    }}
                />
                <Tab.Screen
                    name='My Recipes'
                    component={MyRecipes}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Icon
                                as={MaterialCommunityIcons}
                                name='heart-outline'
                                size={size}
                                color={color}
                            />
                        ),
                        tabBarLabel: ({ color }) => (
                            <Text
                                fontSize='md'
                                color={color}
                                fontWeight='extrabold'
                                style={{ marginBottom: -3 }}
                            >
                                My Recipes
                            </Text>
                        ),
                        tabBarItemStyle: styeles.tabBarItem,
                        tabBarActiveTintColor: colors.primary[100],
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styeles = StyleSheet.create({
    tabBarItem: {
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#fff',
    },
})

export default BottomTab
