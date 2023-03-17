import React from 'react'
import { Container, NavBarHolder,
    LogoHolder,
    MenuHolder,MenuIconHolder} from '../assets/styles/NavBarStyles'

    import UserLogo from '../assets/images/logo.png'
    import {  AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <Container>
        <NavBarHolder>
            <LogoHolder>
                <img src={UserLogo} alt="logo" />
            </LogoHolder>
            <MenuHolder>
                <ul>
                    <li className='menuItem'>
                        <span className='theNumber'>01.</span>
                        <span className='theItem'>About</span>
                    </li>

                    <li className='menuItem'>
                        <span className='theNumber'>02.</span>
                        <span className='theItem'>Experience</span>
                    </li>

                    <li className='menuItem'>
                        <span className='theNumber'>03.</span>
                        <span className='theItem'>Work</span>
                    </li>

                    <li className='menuItem'>
                        <span className='theNumber'>04.</span>
                        <span className='theItem'>Contact</span>
                    </li>

                    <li>
                        <button>Resume</button>
                    </li>
                </ul>
            </MenuHolder>

            <MenuIconHolder>
            <AiOutlineMenu 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasRight" 
            aria-controls="offcanvasRight" color='white' size='2em'/> 
            </MenuIconHolder>

        </NavBarHolder>

  
    </Container>
  )
}

export default Navbar