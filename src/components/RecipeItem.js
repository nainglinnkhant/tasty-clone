import React from 'react'
import { Pressable, Text } from 'native-base'
import FastImage from 'react-native-fast-image'

const RecipeItem = ({ item, onPress }) => {
    return (
        <Pressable onPress={onPress} mx='2' my='3'>
            <FastImage
                source={{ uri: item.thumbnail_url }}
                resizeMode={FastImage.resizeMode.cover}
                style={{ width: '100%', height: 170, borderRadius: 5 }}
            />
            <Text
                fontWeight='extrabold'
                mt='2'
                fontSize='md'
                color='text.100'
                lineHeight='sm'
            >
                {item.name}
            </Text>
        </Pressable>
    )
}

export default RecipeItem
