import React from 'react'
import { Box, Icon, Pressable, Text } from 'native-base'
import { Ionicons } from '@native-base/icons'
import { useNavigation } from '@react-navigation/native'

const SearchBar = ({ scrolled }) => {
    const navigation = useNavigation()

    return (
        <Box shadow={scrolled ? '5' : 'null'} bgColor='white'>
            <Pressable
                mx='4'
                my='3'
                h='45'
                borderRadius='25'
                bgColor='gray.100'
                flexDirection='row'
                alignItems='center'
                justifyContent='center'
                onPress={() => navigation.navigate('Search')}
            >
                <Icon
                    as={Ionicons}
                    name='search-sharp'
                    size={5}
                    color='muted.500'
                    position='absolute'
                    left='5'
                />

                <Text
                    textAlign='center'
                    fontWeight='bold'
                    fontSize='lg'
                    color='muted.400'
                >
                    Search for recipes
                </Text>
            </Pressable>
        </Box>
    )
}

export default SearchBar
