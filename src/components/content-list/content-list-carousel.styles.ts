import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 70px;
`

export const ListTitle = styled.h2`
    padding: 0 20px;
    &.placeholder {
        background-color: lightgray;
        height: 20px;
        width: 200px;
    }
`

export const CarouselWrapper = styled.div`
    position: relative;
`

export const Carousel = styled.div`
    display: flex;
    gap: 5px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const CarouselItem = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-overflow: ellipsis;
    width: 32%;

    @media (min-width: 768px) {
        width: 20%;
    }
    @media (min-width: 1024px) {
        width: 14%;
    }

    &.placeholder {
        background-color: lightgray;
        height: 15vw;
    }

    &:hover {
        cursor: pointer;
    }
    transition: transform 0.2s ease-in-out;
`

export const ArrowButton = styled.button`
    all: unset;
    position: absolute;
    top: 0;
    line-height: 0;

    width: 20px;
    height: 100%;
    padding: 0 10px;

    &.left {
        left: 0;
        background: linear-gradient(
            to left,
            rgba(0, 0, 0, 0) 0%,

            rgba(0, 0, 0, 1) 100%
        );
    }
    &.right {
        right: 0;
        background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0%,

            rgba(0, 0, 0, 1) 100%
        );
    }

    &:hover {
        cursor: pointer;
        font-size: 1.5rem;
    }

    transition: font-size 0.2s ease-in-out;
`
