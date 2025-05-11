import React from 'react'
import useHomePage from './use-home-page.hook'
import ContentListCarousel from '../../components/content-list/content-list-carousel'

export default function Home() {
    const {freeTopMoviesList, storeAllOffersList, storeHottestList, freeRecentlyAddedList} =
        useHomePage()

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '500px',
                    backgroundColor: 'lightgray',
                    padding: '20px',
                    marginBottom: '70px'
                }}
            >
                Main Carousel
            </div>
            <ContentListCarousel contentsList={freeTopMoviesList} />
            <ContentListCarousel contentsList={storeHottestList} />
            <ContentListCarousel contentsList={storeAllOffersList} />
            <ContentListCarousel contentsList={freeRecentlyAddedList} />
        </div>
    )
}
