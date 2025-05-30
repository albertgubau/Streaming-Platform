import React from 'react'
import {ContentList} from './interfaces'
import {
    ArrowButton,
    Carousel,
    CarouselContainer,
    CarouselItem,
    CarouselWrapper,
    ListTitle
} from './content-list-carousel.styles'
import ContentListPlaceholder from './content-list-placeholder'

interface ContentListCarouselProps {
    contentsList: ContentList | null
}

/**
 * ContentListCarousel component displays a list of contents in a carousel format.
 * It allows users to scroll through the contents using left and right arrow buttons.
 * If the contents list is not available, it shows a placeholder.
 */
export default function ContentListCarousel({contentsList}: ContentListCarouselProps) {
    const carouselRef = React.useRef<HTMLDivElement>(null)

    if (!contentsList) {
        return <ContentListPlaceholder />
    }

    // Handle the left and right arrow clicks
    const handleLeftArrowClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: -window.innerWidth, behavior: 'smooth'})
        }
    }
    const handleRightArrowClick = () => {
        if (carouselRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current

            // Go back to the start if we are at the end
            if (scrollLeft + clientWidth >= scrollWidth) {
                carouselRef.current.scrollTo({left: 0, behavior: 'smooth'})
            } else {
                carouselRef.current.scrollBy({left: window.innerWidth, behavior: 'smooth'})
            }
        }
    }

    return (
        <CarouselContainer>
            <ListTitle>{contentsList.listTitle}</ListTitle>
            <CarouselWrapper>
                <ArrowButton onClick={handleLeftArrowClick} className="left">
                    ◀
                </ArrowButton>
                <ArrowButton onClick={handleRightArrowClick} className="right">
                    ▶
                </ArrowButton>
                <Carousel ref={carouselRef} data-testid="carousel">
                    {contentsList.contents.map((content) => (
                        <CarouselItem key={content.id} to={`/content/${content.id}`}>
                            <img src={content.imageSrc} alt={content.id} />
                        </CarouselItem>
                    ))}
                </Carousel>
            </CarouselWrapper>
        </CarouselContainer>
    )
}
