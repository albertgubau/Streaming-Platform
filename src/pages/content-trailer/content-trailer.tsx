import React from 'react'
import Back from '../../assets/icons/chevron-left.svg'
import {VideoPlayerWrapper, BackButton} from './content-trailer.styles'
import useContentTrailer from './use-content-trailer.hook'

const ReactPlayer = React.lazy(() => import('react-player/file'))

/**
 * ContentTrailerPage component
 * This component is responsible for displaying the content trailer.
 * It uses the useContentTrailer hook to get the player configuration and show/hide the player.
 */
export default function ContentTrailerPage() {
    const {showPlayer, playerConfig, handleGoBack} = useContentTrailer()

    return (
        <VideoPlayerWrapper>
            <BackButton onClick={handleGoBack}>
                <Back />
            </BackButton>
            {showPlayer && (
                // ToDO: Implement a fallback for the Suspense
                <React.Suspense>
                    <ReactPlayer {...playerConfig} data-testid="video-player" />
                </React.Suspense>
            )}
        </VideoPlayerWrapper>
    )
}
