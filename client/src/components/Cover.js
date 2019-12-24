import React, {useContext} from 'react';
import './Cover.css';
import {MovieContext} from './MovieContext';
import {useHistory} from 'react-router-dom';

function Cover() {
    const history = useHistory();
    const [movies, setMovies] = useContext(MovieContext);
    
    return (
        <div className={`cover-container ${movies.isCoverShow ? '':'hide'}`}>
          <div> 
            <div className='cover-container-fadein'>
              <div>
                <h1>
                    <span style={{'--fadein-span-index': 1}}>Welcome</span>
                    <span style={{'--fadein-span-index': 2}}>to</span>
                    <span style={{'--fadein-span-index': 3}}>Movie</span>
                    <span style={{'--fadein-span-index': 4}} >Center</span>
                </h1>
              </div>
            </div>

            <div className='cover-container-scale'>
                <div>
                    <p>Find your favorite movie and buy it </p>
                </div>
            </div>
       
            <div className='cover-container-btn cover-container-btn-1'>
                <div className="btn-wrapper">
                    <button onClick={()=>{
                        setMovies({...movies, isCoverShow: false});
                        history.push('/signin');
                    }}>Sign In</button>
                    <div className="btn-top-left"></div>
                    <div className="btn-bottom-right"></div>
                    <div className="btn-cover"></div>
                </div>
            </div>
            <div className='cover-container-btn cover-container-btn-2'>
                <div className="btn-wrapper">
                    <button onClick={()=>setMovies({...movies, isCoverShow: false})}>Visit Now</button>
                    <div className="btn-top-left"></div>
                    <div className="btn-bottom-right"></div>
                    <div className="btn-cover"></div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Cover
