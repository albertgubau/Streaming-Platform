import styled from 'styled-components'
import {MQ} from '../../utils/constants/breakpoints'

export const FooterStyled = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 64px;
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .footer-logo {
        width: 100px;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    width: 50%;
    gap: 48px;

    @media (min-width: ${MQ.md}px) {
        flex-direction: row;
        width: 50%;
    }
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const StyledText = styled.span`
    margin-top: 24px;
`
