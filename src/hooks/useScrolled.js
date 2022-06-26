import { useState } from 'react'

const useScrolled = () => {
    const [scrolled, setScrolled] = useState(false)

    const handleOnScroll = e => setScrolled(e.nativeEvent.contentOffset.y > 0)

    return {
        scrolled,
        handleOnScroll,
    }
}

export default useScrolled
