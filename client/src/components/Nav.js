import React, {useContext, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import './Nav.css';
import {MovieContext} from './MovieContext';

function Nav({toggleIsUserOpen}) {
    let history = useHistory();
    const [movies, setMovies] = useContext(MovieContext);
    const [isPreferenceOpen, toggleIsPreferenceOpen] = useState(false);
    const [isMenuCheckboxChecked, toggleIsMenuCheckboxChecked] = useState(false);
    
    return (
        <div className='nav-container'>
            <header>
              <h1>
                <i className="fas fa-video"></i>
                <span>Movie Center</span>
              </h1>

              <nav>
                  <ul>
                      <li><NavLink exact to="/" activeClassName="link-active">Home</NavLink></li>
                      <li><NavLink to={movies.isCoverShow ? `/` : `/about`} activeClassName={movies.isCoverShow ? '': "link-active"}>About</NavLink></li>
                      <li><NavLink to={movies.isCoverShow ? `/` : `/signin`} activeClassName={movies.isCoverShow ? '': "link-active"}>{movies.isLogin ? 'Sign Out' : 'Sign In'}</NavLink></li>
                  </ul>
              </nav>

              <div className='btn-wrapper'>
                <button onClick={()=>{if(!movies.isCoverShow){toggleIsPreferenceOpen(prev=>!prev)}}} className='btn-wrapper-controller'>Preference<i className="fas fa-arrow-circle-down"></i></button>
                <div className={`btn-wrapper-list ${isPreferenceOpen ? 'open':''}`}>
                  <button style={{'--btn-index':1}} onClick={()=>{toggleIsPreferenceOpen(prev=>!prev); history.push('/history')}}>History</button>
                  <button style={{'--btn-index':2}} onClick={()=>{toggleIsPreferenceOpen(prev=>!prev); history.push('/favorites')}}>Favorite</button>
                </div>
              </div>

              <p>
                <span onClick={()=>{if(!movies.isCoverShow) history.push('/cart')}} ><i className="fas fa-shopping-cart"></i></span>
                <span onClick={()=>{if(!movies.isCoverShow) toggleIsUserOpen()}}><i className="fas fa-user"></i></span>
              </p>
              <section>
                <input type='checkbox' onChange={()=>{if(!movies.isCoverShow) toggleIsMenuCheckboxChecked(prev=>!prev)}} checked={isMenuCheckboxChecked ? true : false}/>
                <p className='menu-toggle-btn'><i className="fas fa-bars"></i></p>
                <p className='menu-toggle-items'>
                  <span onClick={()=>{toggleIsMenuCheckboxChecked(false); history.push('/history')}}>History</span>
                  <span onClick={()=>{toggleIsMenuCheckboxChecked(false); history.push('/favorites')}}>Favorite</span>
                  <span>
                    <span onClick={()=>{toggleIsMenuCheckboxChecked(false); history.push('/cart')}}><i className="fas fa-shopping-cart"></i></span>
                    <span onClick={()=>{toggleIsMenuCheckboxChecked(false); toggleIsUserOpen()}}><i className="fas fa-user"></i></span>
                  </span>
                </p>
              </section>
            </header>
        </div> 
    )
}

export default Nav
