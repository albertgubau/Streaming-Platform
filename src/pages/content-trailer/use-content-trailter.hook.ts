import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

export default function useContentTrailer() {
    const {id} = useParams()
    const navigate = useNavigate() // Hook para navegar dinámicamente

    const [showPlayer, setShowPlayer] = React.useState(false)

    React.useEffect(() => {
        setShowPlayer(true)
    }, [id])

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    const playerConfig = {
        key: id,
        url: `https://cdn.bitmovin.com/content/assets/art-of-motion_drm/m3u8s/11331.m3u8`,
        playing: true,
        controls: true,
        width: '100%',
        height: 'calc(100dvh - 76px)',
        config: {
            hls: {
                forceSafariHLS: isSafari
            }
        }
    }

    const handleGoBack = () => {
        navigate(-1)
    }

    return {showPlayer, handleGoBack, playerConfig}
}
