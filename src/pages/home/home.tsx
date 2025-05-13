import React from 'react'
import useHomePage from './use-home-page.hook'
import ContentListPlaceholder from '../../components/content-list/content-list-placeholder'
import BannerImage from '../../components/banner-image/banner-image'

const ContentListCarousel = React.lazy(
    () => import('../../components/content-list/content-list-carousel')
)

const ErrorPage = React.lazy(() => import('../error-page/error-page'))

export default function Home() {
    const {contentLists, error} = useHomePage()

    if (error) {
        return (
            <React.Suspense>
                <ErrorPage />
            </React.Suspense>
        )
    }

    return (
        <div>
            <BannerImage />
            {contentLists.map((contentsList, index) => (
                <React.Suspense
                    fallback={<ContentListPlaceholder />}
                    key={contentsList?.listTitle || index}
                >
                    <ContentListCarousel contentsList={contentsList} />
                </React.Suspense>
            ))}
        </div>
    )
}
