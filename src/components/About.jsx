import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 my-3">
                        <h1>ABOUT</h1>
                        <p className='lead'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aut maiores ipsum impedit, exercitationem cumque quibusdam nesciunt temporibus reiciendis ut voluptate provident expedita molestiae, at, repudiandae reprehenderit voluptates soluta. Atque, asperiores et saepe officia minima maxime id enim, repellat dolor quae natus ipsum ullam nostrum excepturi in sed voluptatum autem iure voluptatem illum odit? Ex at, neque cupiditate placeat amet distinctio quis est! Dolores quod voluptates unde, nisi doloribus modi, beatae enim rerum doloremque quibusdam sint ipsam incidunt dolore debitis sed temporibus explicabo voluptatum? Deleniti praesentium earum quos, cupiditate distinctio perferendis doloremque cumque, aliquam inventore voluptatem accusantium officiis? Amet, nam.
                        </p>
                        <NavLink to="/contact" className='btn btn-outline-dark'>Contact Us</NavLink>
                    </div>
                    
                    <div className=" container col-md-6">
                      
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About