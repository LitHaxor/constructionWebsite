import React from 'react'
import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import {FaBars} from 'react-icons/fa';

const NavBar = ({toggle}) => {
return (
<>
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">Construction</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Projects">Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Services">Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="Contact US">Contact US</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/products">Products</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
</>
)
}

export default NavBar

const Nav = styled.nav`
background: #000;
height:80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
`

const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24;
max-width: 1100px;
`

const NavLogo = styled(LinkRouter)`
color: #ffffff;
justify-self: flex-start;
align-self: center;
cursor: pointer;
padding: 0 1rem;
font-size: 1.5rem;
align-items: 24px;
font-weight: bold;
text-decoration: none;
`


const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%,60%);
font-size: 1.8rem;
cursor: pointer;
color: #fff;
}
`

const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
display: none;
}
`

const NavItem = styled.li`
height: 80px;
`

const NavLinks = styled(LinkScroll)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
border-bottom: 3px solid #01bf71;
}

`

const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px){
display: none;
}
`

const NavBtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #01bf71;
padding: 10px 22px;
color: #010606;
border: none;
font-weight: 400;
text-decoration: none;
cursor: pointer;
font-size: 16px;
transition: all 0.2s ease-in;

&:hover{
transition: all 0.2 ease-in-out;
background: #fff;
color: #010606;
}
`