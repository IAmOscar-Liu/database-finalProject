import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import './Cart.css';
import {MovieContext} from '../components/MovieContext';
const uuid = require('uuidv4').default;

function Cart() {
    const [movies, setMovies] = useContext(MovieContext);
    const [addToFavLists, setAddToFavLists] = useState([]);

    const setAmount = (action, index) => {
        if(action === 'plus' && movies.cart[index].amount < 5){
            setMovies({...movies, cart: movies.cart.map((movie, _i) => {
                if(_i === index) return {...movie, amount: movie.amount+1};
                else return movie;
            })});
        }
        if(action === 'minus' && movies.cart[index].amount > 1){
            setMovies({...movies, cart: movies.cart.map((movie, _i) => {
                if(_i === index) return {...movie, amount: movie.amount-1};
                else return movie;
            })});
        }
    }

    const deleteItem = (item) => {
        setMovies({...movies, cart: movies.cart.filter(movie => movie !== item)});
        setAddToFavLists([]);
    }

    const handleOrder = async() => {
      if(!movies.isLogin){
          alert('You are not logging in!');
          return;
      }
      if(movies.cart.length === 0){
          alert("You haven't bought anything yet!");
          return;
      }    
      try{
          let results = await axios.post('/save_history', {
            user_id: movies.userInfo.id,
            uuid: movies.userInfo.uuid,
            movies_info: movies.cart
          })
          const data = results.data;
          console.log(data);
          alert('Order has been sent!');
          setMovies({...movies, cart:[], isHistoryLoaded: false});
      }catch(err){
          console.log(err);
      }
    }

    const addToFavorite = (item) => {
      if(addToFavLists.indexOf(item) < 0) setAddToFavLists([...addToFavLists, item])
      else setAddToFavLists(prev => prev.filter(fav => fav !== item))
    }

    const saveToFavorite = async() => {
        if(!movies.isLogin){
            alert('You are not logging in!');
            return;
        }
        if(addToFavLists.length === 0){
            alert('Please choose the item you want to add into your favorite!')
            return;
        }
        try{
            let newUUIDs = [];
            for(let i = 0; i < addToFavLists.length; i++){
                newUUIDs.push(uuid());
            }
            await axios.post(`/save_favorites`, {
                user_id: movies.userInfo.id,
                uuid: movies.userInfo.uuid, 
                fav_info: addToFavLists,
                fav_uuid: newUUIDs
            });
            alert('Movies you choose have been added to favorites!');
            setAddToFavLists([]);
            setMovies({...movies, isUserFavLoaded: false});
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0); 
        return () => {           
        };
    }, [])

    return (
        <div className='cart-container'>
            <header>
                <h1><i className="fas fa-shopping-cart icon-resize"></i>{movies.isLogin ? `${movies.userInfo.first_name} ${movies.userInfo.last_name}'s Cart` : "You are not logging in"}</h1>
                <p id='total'>Total: $<span>{movies.cart.length === 0 ? 0 : movies.cart.reduce((acc, current)=> acc + current.amount*current.price, 0)}</span></p>
            </header>

            <main>
                <ul>
                {movies.cart.length === 0 ? <h4 style={{textAlign:'center', fontSize: "24px"}}>You haven't bought anything yet...</h4> :
                  movies.cart.map((item, index) => 
                  <li key={item.title} data-last={index+1 === movies.cart.length ? 'true':''}>
                    <section>
                        <img src={item.img} alt="" />
                        <h2>{item.title}</h2>
                        <p className="price"><span>${item.price}</span></p>
                        <p className="amount">Amount: <span>{item.amount}</span>
                            <button onClick={()=>setAmount('plus',index)} className={item.amount===5 ? "disable" : ""}>+</button>
                            <button onClick={()=>setAmount('minus',index)} className={item.amount===1 ? "disable" : ""}>–</button>
                        </p>
                        <p className="each-total-price">total: $<span>{item.amount * item.price}</span>
                            <button onClick={()=>deleteItem(item)}><i className="far fa-trash-alt" ></i> Delete</button>
                            <button onClick={()=>addToFavorite(item)} className={addToFavLists.indexOf(item) >= 0 ? 'disable': ''}>{addToFavLists.indexOf(item) >= 0 ? 'Undo to Favorite':'Add to Favorite'}</button>
                        </p>
                    </section>
                  </li>                     
                  )}    
                </ul>
            </main> 
            <div className='utility-btn'>
                <button onClick={()=>handleOrder()} className="exit-Btn">Place Order</button> 
                <button onClick={()=>saveToFavorite()} className="exit-Btn">Add to Favorite</button> 
            </div>          
        </div>
    )
}

export default Cart
