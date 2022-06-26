import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, RefreshControl } from 'react-native'
import { ScrollView, StatusBar, useTheme } from 'native-base'
import useScrolled from '../hooks/useScrolled'
import useLoading from '../hooks/useLoading'
import { getFeeds, getRecentRecipes } from '../apis'
import RecentRecipes from '../components/RecentRecipes'
import SearchBar from '../components/SearchBar'
import FeaturedRecipe from '../components/FeaturedRecipe'

const Discover = () => {
    const [featuredRecipe, setFeaturedRecipe] = useState({})
    const [recipes, setRecipes] = useState([])
    const [pulled, setPulled] = useState(false)

    const { colors } = useTheme()
    const { loading, error, setError, fetchData } = useLoading()
    const { scrolled, handleOnScroll: setScrolled } = useScrolled()

    const scrolledCount = useRef(0)
    const maxItem = useRef()

    const fetchRecipes = async (onlyRecent = false) => {
        try {
            scrolledCount.current++
            const ignoredOffset = scrolledCount.current * 20

            const promises = [getRecentRecipes(ignoredOffset)]

            if (!onlyRecent) promises.push(getFeeds())

            const [recentRecipes, feeds] = await Promise.all(promises)

            if (!onlyRecent) {
                setFeaturedRecipe(feeds.results[0].item)
            }

            maxItem.current = recentRecipes.count

            setRecipes(prevRecipes => {
                const recipes = [...prevRecipes, ...recentRecipes.results]
                return recipes
            })
        } catch (err) {
            setError('Something went wrong! Try again later.')
        }
    }

    const handlePullToRefresh = async () => {
        setFeaturedRecipe({})
        setRecipes([])
        scrolledCount.current = 0

        setPulled(true)
        await fetchData(fetchRecipes)
        setPulled(false)
    }

    useEffect(() => {
        handlePullToRefresh()
    }, [])

    const isCloseToBottom = ({
        layoutMeasurement,
        contentOffset,
        contentSize,
    }) => {
        return (
            layoutMeasurement.height + contentOffset.y >=
            contentSize.height - 50
        )
    }

    const fetchMoreRecentRecipes = () => {
        if (loading) return

        if (maxItem.current && recipes.length >= maxItem.current) return

        fetchData(() => fetchRecipes(true))
    }

    const handleOnScroll = e => {
        setScrolled(e)

        if (isCloseToBottom(e.nativeEvent)) fetchMoreRecentRecipes()
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar backgroundColor='#fff' barStyle='dark-content' />

            <SearchBar scrolled={scrolled} />

            <ScrollView
                contentContainerStyle={{ marginHorizontal: 8 }}
                onScroll={e => handleOnScroll(e)}
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={loading && pulled}
                        onRefresh={handlePullToRefresh}
                        colors={[colors.primary[100]]}
                        tintColor={colors.primary[100].toString()}
                    />
                }
            >
                <FeaturedRecipe recipe={featuredRecipe} />

                <RecentRecipes
                    recipes={recipes}
                    loading={loading}
                    maxItem={maxItem}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Discover
