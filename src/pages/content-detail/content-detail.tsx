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

const ErrorPage = React.lazy(() => import('../error-page/error-page'))

/**
 * ContentDetailPage component
 * This component is responsible for displaying the content detail.
 * It uses the useContentDetail hook to get the content data and show/hide the error page.
 */
export default function ContentDetailPage() {
    const {content, error} = useContentDetail()

    // Show error page if there is an error
    if (error) {
        return (
            <React.Suspense>
                <ErrorPage />
            </React.Suspense>
        )
    }

    // If there is no content, show nothing
    if (!content) {
        return null
    }

    return (
        <ContentDetailWrapper data-testid="content-detail">
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
