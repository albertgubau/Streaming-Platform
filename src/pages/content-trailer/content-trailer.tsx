import React from 'react'
import Back from '../../assets/icons/chevron-left.svg'
import ReactPlayer from 'react-player'
import {BackButton} from './content-trailer.styles'
import useContentTrailer from './use-content-trailter.hook'

export default function ContentTrailerPage() {
    const {showPlayer, playerConfig, handleGoBack} = useContentTrailer()

    return (
        <div style={{position: 'relative'}}>
            <BackButton onClick={handleGoBack}>
                <Back />
            </BackButton>
            {showPlayer && <ReactPlayer {...playerConfig} />}
        </div>
    )
}
