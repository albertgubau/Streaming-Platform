import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import ContentDetailPage from './content-detail'
import useContentDetail from './use-content-detail.hook'

jest.mock('./use-content-detail.hook', () => jest.fn())

jest.mock('./content-detail.styles', () => ({
    ContentDetailWrapper: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    ContentArtWork: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    ContentCTAWrapper: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    ContentMainCta: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    WatchNowButton: ({children, ...props}: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a {...props}>{children}</a>
    ),
    ContentSecondaryCta: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    ContentTitle: ({children, ...props}: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 {...props}>{children}</h1>
    ),
    SecondaryButton: ({children, ...props}: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a {...props}>{children}</a>
    ),
    ContentPlot: ({children, ...props}: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props}>{children}</p>
    )
}))

jest.mock('../error-page/error-page', () => () => <div data-testid="error-page">Error Page</div>)

const mockContentDetail = {
    id: '1',
    title: 'Test Movie',
    plot: 'This is a test plot.',
    imageSrc: '/test-image.jpg'
}

describe('ContentDetailPage', () => {
    it('renders the error page when content is null', async () => {
        ;(useContentDetail as jest.Mock).mockReturnValue({content: null, error: true})
        render(<ContentDetailPage />)

        await waitFor(() => {
            expect(screen.getByText('Error Page')).toBeInTheDocument()
        })
    })

    it('renders the content detail when is has one', () => {
        ;(useContentDetail as jest.Mock).mockReturnValue({content: mockContentDetail, error: false})
        render(<ContentDetailPage />)
        expect(screen.getByText('Test Movie')).toBeInTheDocument()
    })
})
