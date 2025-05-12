import styled from 'styled-components'
import {LAYERS} from '../../utils/constants/layers'
import {Link} from 'react-router-dom'

export const ContentDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const ContentArtWork = styled.div`
    height: 80vh;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.8;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            rgba(16, 16, 16, 0) 40%,
            var(--sp-background-color-primary) 100%
        );
    }
`

export const ContentCTAWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 40px 32px;
    z-index: ${LAYERS.CONTENT_DETAIL_CTA};
`

export const ContentMainCta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`

export const WatchNowButton = styled(Link)`
    all: unset;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 100px;
    min-height: 60px;
    width: 160px;
    padding: 0px 24px;
    background: rgb(240, 240, 240);
    color: rgb(0, 0, 0);
    font-weight: 600;
    font-size: 0.833rem;
    color: rgb(3, 125, 77);
`

export const ContentSecondaryCta = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const ContentTitle = styled.h1``

export const SecondaryButton = styled(Link)`
    background-color: #000;
    width: 50px;
    height: 50px;
    line-height: 0;
    color: #fff;
    fill: #fff;
    border: none;
    padding: 12px;
    cursor: pointer;
    &:hover {
        background-color: #444;
    }
    border-radius: 50px;
    border: 1px solid lightgray;
`

export const ContentPlot = styled.p`
    padding: 32px;
`
