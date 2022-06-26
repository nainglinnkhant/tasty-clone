import React, { useRef, useEffect } from 'react'
import { Box, Input, Icon, ScrollView } from 'native-base'
import { Ionicons, MaterialIcons } from '@native-base/icons'
import useScrolled from '../hooks/useScrolled'

const Search = ({ navigation }) => {
    const searchBar = useRef()

    const { scrolled, handleOnScroll } = useScrolled()

    useEffect(() => {
        searchBar.current.focus()
    }, [])

    return (
        <Box safeArea bgColor='white' flex='1'>
            <Box
                px='4'
                py='3'
                flexDirection='row'
                alignItems='center'
                bgColor='white'
                shadow={scrolled ? '5' : 'null'}
            >
                <Icon
                    as={MaterialIcons}
                    name='arrow-back'
                    size={7}
                    color='primary.100'
                    mr='3'
                    onPress={() => navigation.goBack()}
                />

                <Box
                    h='45'
                    flex='1'
                    borderRadius='25'
                    bgColor='gray.100'
                    flexDirection='row'
                    alignItems='center'
                >
                    <Icon
                        as={Ionicons}
                        name='search-sharp'
                        size={5}
                        color='muted.500'
                        position='absolute'
                        left='5'
                    />

                    <Input
                        ref={searchBar}
                        fontSize='lg'
                        fontWeight='extrabold'
                        borderWidth='0'
                        _focus={{ bgColor: 'transparent' }}
                        pl='50px'
                        selectionColor='primary.100'
                    />
                </Box>
            </Box>

            <ScrollView onScroll={handleOnScroll}></ScrollView>
        </Box>
    )
}

export default Search
