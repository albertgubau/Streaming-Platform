import React from 'react'

import {
    Carousel,
    CarouselContainer,
    CarouselItem,
    CarouselWrapper,
    ListTitle
} from './content-list-carousel.styles'

export default function ContentListPlaceholder() {
    return (
        <CarouselContainer>
            <ListTitle className="placeholder" />
            <CarouselWrapper>
                <Carousel>
                    {Array.from({length: 7}).map((_, index) => (
                        <CarouselItem to={''} key={index} className="placeholder" />
                    ))}
                </Carousel>
            </CarouselWrapper>
        </CarouselContainer>
    )
}
