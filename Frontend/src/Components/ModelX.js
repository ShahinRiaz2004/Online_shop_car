import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './ModelX.css'
import ConceptVideo from './video/Concept2cut.mp4'


function ModelX() {
    return (
      <div className='xmain-div'>
      <div className='xcontainer'>
          <div className='xsection'>
          <div className='xcontent'>
          <nav>
            <div className='xdiv-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='xnav-home'>
                        <span>Home</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Model3'>
                      <div className='xnav-lambo'>
                         <div className='xlambo'>
                          Model 3
                         </div>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelS'>
                      <div className='xnav-tesla'>
                          <span>Model S</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelX'>
                      <div className='xnav-ferari'>
                          <span>Model X</span>
                      </div>
                    </NavLink>
                    <NavLink to='/ModelY'>
                      <div className='xnav-benz'>
                          <span>Model Y</span>
                      </div>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
      <div>
          <div className='div-x1a' style={{position:'relative',top:'450px',alignItems:'center',fontSize:'22px',color:'white'}}>
              <div><span> 218 mph (350 km/h) </span><span> |</span>
              <span> 2 seater </span><span> |</span>
              <span> 0-62-mph in 2.8 sec </span>
          </div>
          </div>
          <div className='div-x1b' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'12px',color:'white',left:'20px'}}>
              <div><span>63 units capacity</span> <span></span><span> | </span>
              <span> len-4843mm | wid-2273mm </span><span>|</span>
              <span> Horsepower: 544 to 566 kW</span>
          </div>
          </div>
        <span className='xspan'>
        
        </span>
        </div>
         
          </div>
          </div>
      
          <div className='xsection'>
          <div className='xcontent'>
          <div>
              <video autoPlay loop muted>
                  <source src={ConceptVideo} type='video/mp4' />
                 <div>"Lamborghini, you may be able to drive a tractor,
                  but you will never be able to handle a Ferrari properly.
                  This was the time when I finally decided to make a perfect sports car."
                  – Ferruccio Lamborghini</div> 
              </video>
            </div>
            <div>
            
            </div>
          </div>
          </div>

          <div className='xsection'>
          <div className='xcontent'>
          <div className='div-x3a' style={{position:'relative',top:'460px',alignItems:'center',fontSize:'22px',color:'white',left:'450px',top:'200px',display:'flex',flexDirection:'column'}}>
              <span >Display</span>
              <span>Wifi</span>
              <span>Stuff</span>
              </div>
              <div className='div-x3b' style={{position:'relative',top:'360px',alignItems:'center',fontSize:'22px',color:'black',fontFamily:'italic'}}>
                <p>Interior fabric materials include carbon fibers found on the cockpit, doors, seats, and console that match very nicely with the leather and Alcantara upholstery. Do not forget about the little details! Take note of the cross-stitching located across the dashboard of your car.
                  </p></div>
              </div>
            </div>
            


          <div className='xsection'>
          <div className='xcontent'>

          <div><span style={{color:'black',fontSize:'1.6em',position:'relative',top:'10px'}}>Designed for Efficiency</span>
          <span className='xllist' style={{ color:'black', position:'relative',left:'-380px',top:'0px'}}><ol> 
          <li>ARAI Mileage - 7.69kmpl</li>
          <li> City Mileage - 3.22 kmpl</li>
          <li> Fuel Type - Petrol</li>
          <li>Engine Displacement (cc) - 6498</li>
          <li> Max Power (bhp@rpm) - 770bhp@8500rpm</li> </ol>
          </span>
          <span  className='xrlist' style={{ color:'black', position:'relative',left:'380px',top:'-120px'}} ><ol>
          <li> Max Torque (nm@rpm) - 720Nm@6750rpm</li>
          <li> Seating Capacity- 2</li>
          <li> TransmissionType - Automatic</li>
          <li> Boot Space (Litres) - 110</li>
          <li> Fuel Tank Capacity - 90</li>
          <li> Body Type - Coupe</li>
                                         </ol> </span></div>
          </div></div>
          <div className='xsection'>
          <div className='xcontent'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
     
  );
    
}

export default ModelX;
