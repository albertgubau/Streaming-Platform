import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function useContentTrailer() {
    // Retrieve the content ID from the URL parameters
    const {id} = useParams()
    // Hook to apply the back navigation
    const navigate = useNavigate()

    // State to control the visibility of the player and allow to unmount the component correctly
    const [showPlayer, setShowPlayer] = React.useState(false)

    // Effect to set the player to show
    React.useEffect(() => {
        setShowPlayer(true)
    }, [id])

    // Check if the user is using Safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    const playerConfig = {
        key: id,
        url: `https://cdn.bitmovin.com/content/assets/art-of-motion_drm/m3u8s/11331.m3u8`,
        playing: true,
        controls: true,
        muted: true,
        width: '100%',
        height: 'calc(100dvh - 76px)',
        config: {
            hls: {
                forceSafariHLS: isSafari
            }
        }
    }

    // Function to handle the back button click
    const handleGoBack = () => {
        navigate(-1)
    }

    return {showPlayer, handleGoBack, playerConfig}
}
