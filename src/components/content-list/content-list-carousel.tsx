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

interface ContentListProps {
    contentsList: ContentList | null
}

export default function ContentListCarousel({contentsList}: ContentListProps) {
    const carouselRef = React.useRef<HTMLDivElement>(null)

    if (!contentsList) {
        return <ContentListPlaceholder />
    }

    const handleLeftArrowClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({left: -1000, behavior: 'smooth'})
        }
    }
    const handleRightArrowClick = () => {
        if (carouselRef.current) {
            const {scrollLeft, scrollWidth, clientWidth} = carouselRef.current

            // Go back to the start if we are at the end
            if (scrollLeft + clientWidth >= scrollWidth) {
                carouselRef.current.scrollTo({left: 0, behavior: 'smooth'})
            } else {
                carouselRef.current.scrollBy({left: 1000, behavior: 'smooth'})
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
                <Carousel ref={carouselRef}>
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
