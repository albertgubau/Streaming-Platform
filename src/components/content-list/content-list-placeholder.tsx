import React from 'react'

import {
    Carousel,
    CarouselContainer,
    CarouselItem,
    CarouselWrapper,
    ListTitle
} from './content-list-carousel.styles'

/**
 * Displays the content list carousel placeholder component (for the component loading state or error handling).
 */
export default function ContentListPlaceholder() {
    return (
        <CarouselContainer>
            <ListTitle className="placeholder" />
            <CarouselWrapper>
                <Carousel data-testid="carousel-placeholder">
                    {Array.from({length: 7}).map((_, index) => (
                        <CarouselItem to={''} key={index} className="placeholder" />
                    ))}
                </Carousel>
            </CarouselWrapper>
        </CarouselContainer>
    )
}
