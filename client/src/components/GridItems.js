import React from 'react'
import './GridItems.css';

function GridItems({movies, toggleModal}) {  
    return movies.map(_data => 
      <div key={_data.title} className="grid-item">
        <img src={`http://image.tmdb.org/t/p/w500/${_data.poster_path}`} alt="" />
        <p><span>Title: </span><span>{_data.title}</span></p>
        <div>
          <span>Rating: </span>
          <div className="star-container" style={{'--star-rating': (_data.vote_average/2).toFixed(1), '--star-rating-floor': Math.floor(_data.vote_average/2)}}>
            <div className="star-cover">
                <div>
                    <div className="star highlight-star"></div>
                    <div className="star highlight-star"></div>
                    <div className="star highlight-star"></div>
                    <div className="star highlight-star"></div>
                    <div className="star highlight-star"></div>
                </div>
            </div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
          </div>
          <span>{(_data.vote_average/2).toFixed(1)}</span>  
        </div>
        <p><span>Price: $</span><span>{_data.price}</span></p>
        <button onClick={()=>toggleModal(_data.title)}>See more</button>
      </div>
    )  
}

export default GridItems
