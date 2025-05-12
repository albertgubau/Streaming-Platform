import styled from 'styled-components'
import {MQ} from '../../utils/constants/breakpoints'
import {LAYERS} from '../../utils/constants/layers'

export const HeaderStyled = styled.header`
    background-color: var(--sp-background-color-primary);
    color: white;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    position: sticky;
    z-index: ${LAYERS.HEADER};
    top: 0;
    padding: 24px;

    @media (min-width: ${MQ.lg}px) {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .header-logo {
        width: 100px;
    }
`
