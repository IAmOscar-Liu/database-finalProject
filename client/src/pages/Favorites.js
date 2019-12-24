import React, {useContext, useEffect, useState} from 'react';
import './Favorites.css';
import {MovieContext} from '../components/MovieContext';
import axios from 'axios';


function Favorites() {
    const [movies, setMovies] = useContext(MovieContext);
    const [isDeletingFavs, toggleIsDeletingFavs] = useState(false);
    const [deleteFavs, setDeleteFavs] = useState([]);
    const [isAddToCartFavs, toggleIsAddToCartFavs] = useState(false);
    const [addToCartFavs, setAddToCartFavs] = useState([]);

    const getUserFavorites = async() => {
        try{
            let results = await axios.post(`/find_favorites`, {
                uuid: movies.userInfo.uuid
            })
            const data = results.data;
            // console.log(data);
            setMovies({...movies, isUserFavLoaded: true, userFav: data})
        }catch(err){
            console.log(err);
        }
    }

    const removeFavOne = (item) => {
      if(deleteFavs.indexOf(item) < 0) setDeleteFavs([...deleteFavs, item])
      else setDeleteFavs(prev => prev.filter(_item => _item !== item))
    }

    const commitRemoveFav = async() => {
        //console.log(deleteFavs)
        if(deleteFavs.length === 0){
            alert('Please choose the one you want to remove!');
            return;
        }
        try{
           await axios.post(`/delete_favorites`, {
               fav_uuids: deleteFavs.map(del => del.fav_uuid)
           })
           alert('The movies you choose has been removed!');
           //setDeleteFavs([]);
           toggleIsDeletingFavs(false);
           setMovies({...movies, userFav: movies.userFav.filter(fav => { return !deleteFavs.includes(fav)})});
           setDeleteFavs([]);
           setAddToCartFavs([]);
           // setTimeout(()=>getUserFavorites(),500); 
        }catch(err){
            console.log(err)
        }
    }

    const addToCartOnes = (item) => {
        if(addToCartFavs.indexOf(item) < 0) setAddToCartFavs([...addToCartFavs, item])
        else setAddToCartFavs(prev => prev.filter(_item => _item !== item))
    }

    const commitAddToCart = () => {
      //console.log(addToCartFavs)  
      if(addToCartFavs.length === 0){
          alert('Please choose the ones you want to add to the cart!');
          return;
      }
      let buyingMovies = addToCartFavs.map(fav => { return  {
          title: fav.title,
          img: fav.img,
          price: fav.price,
          amount: 1
      }});
      setAddToCartFavs([]);
      toggleIsAddToCartFavs(false);
      setDeleteFavs([]);
      setMovies({...movies, cart:[...movies.cart, ...buyingMovies]})
      alert('The movies you choose have been sent to cart!');
    }

    const renderUserFavorite = (_favorites) => {
        if(_favorites.length === 0) return <h1>User has no favorite lists</h1>
        else{
            // let reversedFav = [];
            // for(let i = _favorites.length-1 ; i >= 0; i--){
            //     reversedFav.push(_favorites[i]);
            // }
            return <div className='fav-list-container'>
            {
                <ul>
                  <li className='fav-list-li'>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Add Date</p>
                  </li>
                  {             
                    _favorites.map((fav, _i) => 
                        <li className='fav-list-li' key={fav.fav_uuid}>                         
                          <p>
                            <img width='25' height='25' src={fav.img} alt=''/>
                             <span>{fav.title}</span>
                          </p>
                          <p>{fav.price}</p>
                          <p>
                            <span>{fav.add_date}</span>
                            {isDeletingFavs ? <span>
                              <input type='checkbox' id={`del-checkbox-${_i}`} onChange={()=>removeFavOne(fav)} checked={ deleteFavs.includes(fav)  ? true : false} />
                              <label htmlFor={`del-checkbox-${_i}`}>Remove</label>
                            </span>
                            : <span></span> }
                            {isAddToCartFavs ? <span>
                              <input type='checkbox' id={`add-checkbox-${_i}`} onChange={()=>addToCartOnes(fav)} checked={ addToCartFavs.includes(fav) ? true: false}/>
                              <label htmlFor={`add-checkbox-${_i}`}>Add</label>
                            </span>
                            : <span></span>}
                          </p>
                        </li>
                    ).reverse()}
                </ul>
            }
            </div>
        } 
    }

    const renderFavCommitBtns = () => {
        if(!isAddToCartFavs && !isDeletingFavs){
            return <div className='fav-commit-btn'></div>
        } else if(isDeletingFavs && !isAddToCartFavs){
            return <div className='fav-commit-btn'>
                <button  onClick={()=>commitRemoveFav()}>Confirm Removing</button>
                <button  onClick={()=>toggleIsDeletingFavs(false)}>Cancel Removing</button>
            </div>
        }else {
            return <div className='fav-commit-btn'>
                <button  onClick={()=>commitAddToCart()}>Confirm Adding</button>
                <button  onClick={()=>toggleIsAddToCartFavs(false)}>Cancel Adding</button>
            </div>
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0); 
        if(!movies.isUserFavLoaded && movies.isLogin){
            getUserFavorites();
        }
        return () => {          
        };
    }, [])

    return (
        <div className='favorites-container'>
        {movies.isLogin ? 
          <div className='favorite-login'>
              <h1>{`${movies.userInfo.first_name} ${movies.userInfo.last_name}'s Favorite Movies`}</h1>
              { !movies.isUserFavLoaded ? 
                <h1>Loading user Favorites...</h1>
                : renderUserFavorite(movies.userFav) 
              }
              { renderFavCommitBtns() }
              <div className='fav-getuser-btn'>
                <button onClick={()=>getUserFavorites()}>Load favorite</button>
                <button onClick={()=>{if(!isAddToCartFavs){toggleIsDeletingFavs(prev=>!prev)}}} ><i className="fas fa-trash-alt"></i>{isDeletingFavs ? 'Cancel Removing': 'Remove Items'}</button>
                <button onClick={()=>{if(!isDeletingFavs){toggleIsAddToCartFavs(prev=>!prev)}}} ><i className="fas fa-cart-plus"></i>{isAddToCartFavs ? 'Cancel Adding' : 'Add to Cart'}</button>
              </div>  
          </div>
        :
          <h1 className='no-login-h1'>You are not logging in</h1>
        }  
        </div>
    )
}

export default Favorites


// {deleteFavs.indexOf(fav) < 0 ? 
//     <button onClick={()=>removeFavOne(fav)}>Remove</button>
//    :
//     <button onClick={()=>removeFavOne(fav)}>Undo</button>
//   }


// {addToCartFavs.indexOf(fav) < 0 ?
//                                 <button onClick={()=>addToCartOnes(fav)}>Add to Cart</button>
//                                :
//                                 <button onClick={()=>addToCartOnes(fav)}>Undo</button> 
//                                }