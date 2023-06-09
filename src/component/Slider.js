import React from 'react'
import { ResponsiveSlideHolder } from '../assets/styles/SliderStyles'

const Slider = () => {
  return (
       
    
        <ResponsiveSlideHolder className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ backgroundColor:'rgba(71, 18, 84,0.7)' }}>
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel"> </h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <ul>
                    <a href="#abt" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>01.</span>
                        <span className='theItem'>About</span>
                    </li></a>

                    <a href="#exp" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>02.</span>
                        <span className='theItem'>Experience</span>
                    </li></a>

                    <a href="#work" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>03.</span>
                        <span className='theItem'>Work</span>
                    </li></a>

                    <a href="#contact" className='text-decoration-none'><li className='menuItem'>
                        <span className='theNumber'>04.</span>
                        <span className='theItem'>Contact</span>
                    </li></a>

                    <li>
                        <button>Resume</button>
                    </li>
                </ul>
  </div>
</ResponsiveSlideHolder>

        
  )
}

export default Slider