import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './home'
import useHomePage from './use-home-page.hook'

jest.mock('./use-home-page.hook', () => jest.fn())

jest.mock('../../components/content-list/content-list-placeholder', () => ({
    __esModule: true,
    default: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="content-list-placeholder" {...props}>
            {children}
        </div>
    )
}))
jest.mock('../../components/banner-image/banner-image', () => ({
    __esModule: true,
    default: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="banner-image" {...props}>
            {children}
        </div>
    )
}))
jest.mock('../../components/content-list/content-list-carousel', () => ({
    __esModule: true,
    default: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div data-testid="content-list-carousel" {...props}>
            {children}
        </div>
    )
}))
jest.mock('../error-page/error-page', () => () => <div data-testid="error-page">Error Page</div>)

describe('Home', () => {
    it('renders the error page when there is an error', async () => {
        ;(useHomePage as jest.Mock).mockReturnValue({contentLists: [], error: true})
        render(<Home />)

        await waitFor(() => {
            expect(screen.getByTestId('error-page')).toBeInTheDocument()
        })
    })

    it('renders the banner image and placeholders when contentLists is empty', () => {
        ;(useHomePage as jest.Mock).mockReturnValue({contentLists: [], error: false})
        render(<Home />)

        expect(screen.getByTestId('banner-image')).toBeInTheDocument()
        expect(screen.queryByTestId('content-list-carousel')).not.toBeInTheDocument()
    })

    it('renders ContentListCarousel dynamically using React.lazy', async () => {
        const mockContentLists = [{listTitle: 'List 1', contents: []}]
        ;(useHomePage as jest.Mock).mockReturnValue({contentLists: mockContentLists, error: false})

        render(<Home />)

        expect(screen.getByTestId('content-list-placeholder')).toBeInTheDocument()

        await waitFor(() => {
            expect(screen.getByTestId('content-list-carousel')).toBeInTheDocument()
        })
    })
})
