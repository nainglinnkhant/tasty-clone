import React from 'react'
import { ActivityIndicator, useWindowDimensions } from 'react-native'
import { Box, Heading, useTheme } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import MasonryList from '@react-native-seoul/masonry-list'
import RecipeItem from './RecipeItem'

const RecentRecipes = ({ recipes, maxItem }) => {
    const { colors } = useTheme()
    const navigation = useNavigation()

    const { width } = useWindowDimensions()
    const isMobile = width < 480

    return (
        <MasonryList
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            data={recipes}
            numColumns={isMobile ? 2 : 3}
            removeClippedSubviews
            renderItem={({ item }) => (
                <RecipeItem
                    onPress={() => navigation.navigate('Recipe Details', item)}
                    item={item}
                />
            )}
            ListHeaderComponent={
                <Heading
                    size='md'
                    mx='2'
                    fontWeight='extrabold'
                    color='text.100'
                >
                    Recent
                </Heading>
            }
            ListFooterComponent={
                recipes.length > 0 && maxItem.current > recipes.length ? (
                    <Box mt={2} mb={5}>
                        <ActivityIndicator
                            color={colors.primary[100]}
                            size={35}
                        />
                    </Box>
                ) : null
            }
        />
    )
}

export default RecentRecipes
