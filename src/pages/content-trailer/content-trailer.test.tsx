import React from 'react'
import {render, screen, fireEvent, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import useContentTrailer from './use-content-trailer.hook'
import ContentTrailerPage from './content-trailer'

jest.mock('./use-content-trailer.hook', () => jest.fn())

jest.mock('./content-trailer.styles', () => ({
    VideoPlayerWrapper: ({children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
        <div {...props}>{children}</div>
    ),
    BackButton: ({children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <button {...props}>{children}</button>
    )
}))

describe('ContentTrailerPage', () => {
    const mockHandleGoBack = jest.fn()
    const mockPlayerConfig = {
        key: '1',
        url: 'https://cdn.bitmovin.com/content/assets/art-of-motion_drm/m3u8s/11331.m3u8',
        playing: true,
        controls: true,
        width: '100%',
        height: 'calc(100dvh - 76px)',
        config: {
            hls: {
                forceSafariHLS: false
            }
        }
    }

    beforeEach(() => {
        ;(useContentTrailer as jest.Mock).mockReturnValue({
            showPlayer: true,
            handleGoBack: mockHandleGoBack,
            playerConfig: mockPlayerConfig
        })
    })

    it('renders the video player when showPlayer is true', async () => {
        render(<ContentTrailerPage />)

        await waitFor(() => {
            expect(screen.getByTestId('video-player')).toBeInTheDocument()
        })
    })

    it('calls handleGoBack when the back button is clicked', () => {
        render(<ContentTrailerPage />)

        const backButton = screen.getByRole('button')
        fireEvent.click(backButton)

        expect(mockHandleGoBack).toHaveBeenCalled()
    })
})
