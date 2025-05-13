import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ContentListCarousel from './content-list-carousel'
import '@testing-library/jest-dom'
import {ContentList} from './interfaces'

const mockContentList: ContentList = {
    listTitle: 'Featured Movies',
    contents: [
        {id: '1', title: 'Movie 1', plot: 'Plot for movie 1', imageSrc: '/image1.jpg'},
        {id: '2', title: 'Movie 2', plot: 'Plot for movie 2', imageSrc: '/image2.jpg'},
        {id: '3', title: 'Movie 3', plot: 'Plot for movie 3', imageSrc: '/image3.jpg'},
        {id: '4', title: 'Movie 4', plot: 'Plot for movie 4', imageSrc: '/image4.jpg'},
        {id: '5', title: 'Movie 5', plot: 'Plot for movie 5', imageSrc: '/image5.jpg'}
    ]
}

describe('ContentListCarousel', () => {
    it('renders the list title and images when contentsList is provided', () => {
        render(<ContentListCarousel contentsList={mockContentList} />)
        expect(screen.getByText('Featured Movies')).toBeInTheDocument()
        expect(screen.getAllByRole('img')).toHaveLength(mockContentList.contents.length)
    })

    it('scrolls left when the left arrow is clicked', () => {
        render(<ContentListCarousel contentsList={mockContentList} />)
        const carousel = screen.getByRole('list') // Assuming the carousel is a list
        const leftArrow = screen.getByText('◀')

        // Mock scrollBy
        const scrollByMock = jest.fn()
        Object.defineProperty(carousel, 'scrollBy', {value: scrollByMock, writable: true})

        fireEvent.click(leftArrow)
        expect(scrollByMock).toHaveBeenCalledWith({left: -window.innerWidth, behavior: 'smooth'})
    })

    it('scrolls right when the right arrow is clicked', () => {
        render(<ContentListCarousel contentsList={mockContentList} />)
        const carousel = screen.getByRole('list') // Assuming the carousel is a list
        const rightArrow = screen.getByText('▶')

        // Mock scrollBy
        const scrollByMock = jest.fn()
        Object.defineProperty(carousel, 'scrollBy', {value: scrollByMock, writable: true})

        fireEvent.click(rightArrow)
        expect(scrollByMock).toHaveBeenCalledWith({left: window.innerWidth, behavior: 'smooth'})
    })

    it('resets to the start when at the end and right arrow is clicked', () => {
        render(<ContentListCarousel contentsList={mockContentList} />)
        const carousel = screen.getByRole('list') // Assuming the carousel is a list
        const rightArrow = screen.getByText('▶')

        // Mock scrollTo and scrollWidth
        const scrollToMock = jest.fn()
        Object.defineProperty(carousel, 'scrollTo', {value: scrollToMock, writable: true})
        Object.defineProperty(carousel, 'scrollLeft', {value: 1000, writable: true})
        Object.defineProperty(carousel, 'scrollWidth', {value: 1000, writable: true})
        Object.defineProperty(carousel, 'clientWidth', {value: 500, writable: true})

        fireEvent.click(rightArrow)
        expect(scrollToMock).toHaveBeenCalledWith({left: 0, behavior: 'smooth'})
    })
})
