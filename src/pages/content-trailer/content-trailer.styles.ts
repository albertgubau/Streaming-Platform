import styled from 'styled-components'
import {LAYERS} from '../../utils/constants/layers'

export const BackButton = styled.button`
    all: unset;
    line-height: 0;
    width: 24px;
    height: 24px;
    padding: 24px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${LAYERS.VIDEO_BACK_ICON};

    &:hover {
        cursor: pointer;
    }
`
