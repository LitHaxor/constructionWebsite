import React, { useState } from 'react'
import styled from 'styled-components';
import video from '../videos/design.mp4';
import { Link } from 'react-scroll';
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md';
const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () =>{
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg  src={video} type="video/mp4" autoPlay loop muted/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Design your dream </HeroH1>
                <HeroP>
                    Make your dream true comes true.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/products" primary="true"  big="true" onMouseEnter={onHover} onMouseLeave={onHover}>See Designs {hover? <ArrowForword/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
    )
}

export default Hero;


const HeroContainer= styled.div`
    background-color: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 93vh;
    position: relative;
    z-index: 1;

    :before{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: #232a34;
`

const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const HeroH1 = styled.h1`
    color: #fff;
    font-size:clamp(3rem, 2vw, 6rem);
    text-align: center;


`

const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: clamp(1.4rem, 3vw, 3rem);
    text-align: center;
    max-width: 600px;

    
`

const HeroBtnWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`   

const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=>(primary ? '#01bf71': '#301606')};
    white-space: nowrap;
    padding: ${({big})=> (big? '14px 48px': '12px 30px')};
    color: ${({dark})=> (dark? '#010606':'#fff')};
    font-size: ${({FontBig})=>(FontBig? '20px': '16px')};
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:${({primary})=>(primary? '#130802': '#01bf71')}
    }
`
const ArrowForword = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`