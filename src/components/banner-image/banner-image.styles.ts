import styled from 'styled-components'

export const BannerImageWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 24px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 20px;

        &:hover {
            cursor: pointer;
            transform: translateY(-2%);
            box-shadow: rgba(255, 255, 255, 0.3) 0px 7px 29px 0px;
        }

        transition:
            transform 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out;
    }

    margin-bottom: 64px;
`
