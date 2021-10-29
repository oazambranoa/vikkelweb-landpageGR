import React from 'react'
import styled from 'styled-components'

export const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src="" type="video/mp4"/>
            </HeroBg>
        </HeroContainer>
    )
}
export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;

`

const HeroBg = styled.div``

const VideoBg = styled.video``
