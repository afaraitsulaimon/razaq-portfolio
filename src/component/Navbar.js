import React from 'react'
import { Container, NavBarHolder,
    LogoHolder,
    MenuHolder,MenuIconHolder} from '../assets/styles/NavBarStyles'

    import UserLogo from '../assets/images/logo.png'
    import {  AiOutlineMenu } from "react-icons/ai";
    import TheCV from '../assets/mycv.pdf'

const Navbar = () => {
  return (
    <Container>
        <NavBarHolder>
            <LogoHolder>
                <img src={UserLogo} alt="logo" />
            </LogoHolder>
            <MenuHolder>
                <ul>
                <a href="#abt" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>01.</span>
                        <span className='theItem'>About</span>
                    </li></a>

                   <a href="#exp" className='text-decoration-none'><li className='menuItem' >
                        <span className='theNumber'>02.</span>
                        <span className='theItem'>Experience</span>
                    </li>
                    </a>
                    <a href="#work" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>03.</span>
                        <span className='theItem'>Work</span>
                    </li></a>

                    <a href="#contact" className='text-decoration-none'> <li className='menuItem'>
                        <span className='theNumber'>04.</span>
                        <span className='theItem'>Contact</span>
                    </li></a>

                    <li>
                        <a 
                            href={TheCV} 
                            target='_blank' 
                            rel='noreferrer' 
                            className='text-decoration-none'>
                                <button>
                                    Resume
                                    </button>
                        </a>
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