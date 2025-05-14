import React from 'react'
import {BannerImageWrapper} from './banner-image.styles'

// ToDO: This should be fetched
const mockImage = {
    src: '/laliga-mock-banner.jpeg',
    alt: 'la-liga-banner'
}

/**
 * Displays the banner image component.
 */
export default function BannerImage() {
    return (
        <BannerImageWrapper>
            <img src={mockImage.src} alt={mockImage.alt} />
        </BannerImageWrapper>
    )
}
