import styled from 'styled-components'

export const FooterStyled = styled.footer`
    background-color: var(--sp-background-color-primary);
    color: white;
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
    flex-direction: row;
    text-align: left;
    width: 75%;
`

export const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const StyledText = styled.span`
    margin-top: 24px;
`
