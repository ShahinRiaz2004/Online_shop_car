import React from 'react';
import {NavLink,Link} from 'react-router-dom';
import Footer from './Footer';
import './header.css'


function Header() {
    return (
      <div className='main-div'>
      <div className='container'>
          <div className='section'>
          <div className='content'>
          <nav>
            <div className='div-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <NavLink to='/Home'><div className='nav-home'>
                        <span>NewHome</span></div> 
                    </NavLink>
                    
                    <NavLink to='/Newcars'>
                      <div className='nav-lambo'>
                         <div className='lambo'>
                          Cars 
                         </div>
                      </div>
                    </NavLink>

                    <NavLink to='/Accessories'>
                      <div className='nav-tesla'>
                          <span>Accessories</span>
                      </div>
                    </NavLink>
                    <NavLink to='/Login'>
                      <div className='nav-ferari'>
                          <span>SignOut</span>
                      </div>
                    </NavLink>
                  
                    
                </div>
            </div>
        </nav>
        
      <div className='Hcontent'>
      <h2>Welcome New Car Project</h2>
      <h3>The best models cars</h3>

            <button><Link to="/Newcars"> Show </Link></button>
        </div>
<button><Link to="/Accessories">Shop Car 👌 Accessories</Link></button>
          </div>
          </div>

          <div className='section'>
          <div className='content'>
          <div className='Hcontent'>
          
          <h4>Essential Car Plugins🚗</h4>

            <button><Link to="/Accessories">Shop Accessories</Link></button>
        </div>
          </div></div>

          <div className='section'>
          <div className='content'>
          <div><Footer /></div>
          </div></div>
      
      </div>
      </div>
  );
    
}

export default Header;






