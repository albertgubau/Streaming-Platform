import React from 'react'

import {
    ContentArtWork,
    ContentCTAWrapper,
    ContentDetailWrapper,
    ContentMainCta,
    ContentPlot,
    ContentSecondaryCta,
    ContentTitle,
    SecondaryButton,
    WatchNowButton
} from './content-detail.styles'
import ClapperBoard from '../../assets/icons/clapper-board.svg'
import Share from '../../assets/icons/share.svg'
import useContentDetail from './use-content-detail.hook'

export default function ContentDetailPage() {
    const {content, error} = useContentDetail()

    if (!content) {
        return <p>{error}</p>
    }

    return (
        <ContentDetailWrapper>
            <ContentArtWork>
                <img src={content.imageSrc} alt={content.id} />
                <ContentCTAWrapper>
                    <ContentTitle>{content.title}</ContentTitle>
                    <ContentMainCta>
                        <WatchNowButton to={'trailer'}>Watch now!</WatchNowButton>
                        <ContentSecondaryCta>
                            <SecondaryButton to={`trailer`}>
                                <ClapperBoard />
                            </SecondaryButton>
                            <SecondaryButton to="">
                                <Share />
                            </SecondaryButton>
                        </ContentSecondaryCta>
                    </ContentMainCta>
                </ContentCTAWrapper>
            </ContentArtWork>
            <ContentPlot>{content.plot}</ContentPlot>
        </ContentDetailWrapper>
    )
}
