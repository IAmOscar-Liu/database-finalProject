import React, { useState, useContext } from 'react';
import './Modal.css';
import {MovieContext} from './MovieContext';
import axios from 'axios';
const uuid = require('uuidv4').default;

function Modal({data ,toggleModal}) {
    const [isBuying, setIsBuying] = useState(false);
    const [amount, setAmount] = useState(1);
    const [movies, setMovies] = useContext(MovieContext);

    const handleCloseModal = (e) => {
        if(e.target.id==='outer-container') toggleModal('close');
    }

    const handleAmount = (action) => {
        if(action === 'plus' && amount < 5) setAmount(prev => prev+1)
        if(action === 'minus' && amount > 1) setAmount(prev => prev-1)
    }

    const handleSubmit = () => {
      if(movies.isLogin){
        let buyingMovie ={ 
            title: data.title,
            img: `http://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
            price: data.price,
            amount: amount
        }
        //let updatedMovies = movies;
        //updatedMovies.cart.push(buyingMovie); 
        //setMovies(updatedMovies);
        setMovies({...movies, cart: [...movies.cart, buyingMovie]});
        toggleModal('close');
      }else {
          alert('You are not logging in!');
      }

    }

    const addToFavorite = async(item) => {
        if(!movies.isLogin){
            alert('You are not logining in');
            return;
        }
        try{
            await axios.post(`/save_favorites`, {
                user_id: movies.userInfo.id,
                uuid: movies.userInfo.uuid, 
                fav_info: [{...item, img: `http://image.tmdb.org/t/p/w500/${item.backdrop_path}`}],
                fav_uuid: [uuid()]
            });
            alert('The movie you choose has been added to favorites!');
            setMovies({...movies, isUserFavLoaded: false});
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div onClick={(e)=>handleCloseModal(e)} id='outer-container' className='outer-container'>
          <div className='container'>

            <div className='container-bg container-bg-bottom'></div>
            <div className='container-bg container-bg-mid'></div>
            <div className='container-bg container-bg-top'></div> 
            
            <div className='bottom-layer'>
                <div className="bottom-left">
                    <h1>Information</h1>
                    <div className="img-container">
                        <img src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
                    </div>
                    <div className="detail-info">
                        <p className="title">Title: <span><i style={{fontStyle: 'normal'}}>{data.title}</i></span></p>
                        <p className="date">Date: <span>{data.release_date}</span></p>
                        <p className="rating">Rating: <span>{(data.vote_average/2).toFixed(1)}</span></p>    
                        <p className='price'>Price: <span>{data.price}</span></p>                
                    </div>
                    <section>
                        <button onClick={()=>setIsBuying(prev => !prev)} >Buy Now</button>
                        <button onClick={()=>toggleModal('close')}>Exit</button>
                    </section>
                    
                </div>
                
                <div className="bottom-right">
                    <h1>How many of this one would you like to buy?</h1>
                    <div className="detail-info">
                        <p className="title">Title: <span><i style={{fontStyle: 'normal'}}>{data.title}</i></span></p>
                        <p className="price">Each One: <span>{data.price}</span></p>
                        <p className="amount">Amount: <span>{amount}</span>
                            <input type='button' className={amount===5 ? "disable" : ""} onClick={()=>handleAmount('plus')} id='plusBtn' value="+" />
                            <input type='button' className={amount===1 ? "disable" : ""} onClick={()=>handleAmount('minus')} id='minusBtn' value="–" />
                        </p>
                        <p className="total">Total: <span>{data.price * amount}</span></p>            
                    </div>
                    <section>
                        <button onClick={()=>setIsBuying(prev=>!prev)}>Back</button>
                        <button onClick={()=>handleSubmit()}>Submit</button>
                    </section>

                </div>
            </div>

            <div className={`top-layer ${isBuying ? "buy": "" }`} >
                <div className='transparent-bg'>
                    <div className={isBuying ? "buy" : ""}>
                        <div className="left-info">
                            <h1>Thanks for buying our product</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt ducimus repudiandae esse neque laudantium sunt numquam, est error tenetur, id, ipsam nostrum odit dolorem!</p>
                        </div>
                        <div className="right-info">
                            <h1 className='title'><span><i style={{fontStyle: 'normal'}}>{data.title}</i></span></h1>
                            <div>
                                <h2>Overview: <button className='add-to-fav-btn' onClick={()=>addToFavorite(data)}>Add to Favorite</button></h2>
                                <p id="overview">{data.overview}</p>
                            </div>
                        </div>
                    </div>    
                </div>     
            </div>            
          </div>            
        </div>
    )
}

export default Modal
