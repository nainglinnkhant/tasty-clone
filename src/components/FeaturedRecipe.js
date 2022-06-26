import React from 'react'
import { Box, Heading, Text } from 'native-base'
import FastImage from 'react-native-fast-image'

const Featured = ({ recipe }) => {
    return (
        <Box mx='2'>
            <Heading size='md' fontWeight='extrabold' color='text.100'>
                What We're Loving Now
            </Heading>

            <Box>
                <FastImage
                    source={{ uri: recipe.thumbnail_url }}
                    resizeMode={FastImage.resizeMode.cover}
                    style={{ width: '100%', height: 410, borderRadius: 5 }}
                />

                <Text fontSize='2xl' fontWeight='extrabold' color='text.100'>
                    {recipe.name}
                </Text>
            </Box>
        </Box>
    )
}

export default Featured
