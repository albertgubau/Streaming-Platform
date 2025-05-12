import React from 'react'
import {FooterColumn, FooterLinks, FooterStyled, FooterWrapper, StyledText} from './footer.styles'
import Logo from '../../assets/rakuten-logo.svg'

export default function Footer() {
    return (
        <FooterStyled>
            <FooterWrapper>
                <FooterLinks>
                    <FooterColumn>
                        <span>Github</span>
                        <span>LinkedIn</span>
                        <span>Contact</span>
                    </FooterColumn>
                    <FooterColumn>
                        <span>About Us</span>
                        <span>Services</span>
                        <span>Privacy Policy</span>
                    </FooterColumn>
                </FooterLinks>
                <Logo className="footer-logo" />
            </FooterWrapper>
            <StyledText>© 2024 Albert Gubau. All rights reserved.</StyledText>
        </FooterStyled>
    )
}
