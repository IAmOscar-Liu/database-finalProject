import React, {useContext, useEffect} from 'react';
import {MovieContext} from '../components/MovieContext';
import axios from 'axios';
import './History.css';
const uuid = require('uuidv4').default;

function History() {
    const [movies, setMovies] = useContext(MovieContext);
    const getUserHistory = async() => {
      try{
        let results = await axios.post(`/get_history`, {
           uuid: movies.userInfo.uuid
        })
        const data = results.data;
        // console.log(data);
        setMovies({...movies, isHistoryLoaded:true ,userHistory: data.history})
      }catch(err){
        console.log(err);
      }
    }

    const renderUserHistory = (_movies) => {
      // console.log('render user history');
      // console.log(_movies);
      if(_movies.length === 0) return <h1>User has no shopping history</h1>
      else {
        let historyTable = {}
        _movies.forEach(_movie => {
          if(historyTable[_movie.purchase_date] === undefined)  historyTable[_movie.purchase_date] = [_movie];
          else historyTable[_movie.purchase_date] = [...historyTable[_movie.purchase_date],_movie];
        })

        return <div>
          {Object.keys(historyTable).map((sameTime) => 
            <div className='history-each-time' key={uuid()}>
              <h1><i className="fas fa-credit-card"></i>{sameTime}<span>Total: {historyTable[sameTime].reduce((acc, st) => acc + st.amount * st.price, 0)}</span></h1>
              <ul>
                <li className='history-each-time-li'>
                  <p>Title</p>
                  <p>Price</p>
                  <p>Amount</p>
                </li>
                {historyTable[sameTime].map(eachTime => 
                  <li className='history-each-time-li' key={uuid()}>
                    <p>
                      <img width='50' height='50' src={eachTime.img} alt=''/>
                      <span>{eachTime.title}</span>
                    </p>
                    <p><span>{eachTime.price}</span></p>
                    <p><span>{eachTime.amount}</span></p>
                  </li>  
                 )}
              </ul>
            </div>
          ).reverse()}
        </div>  
      }
    }

    useEffect(() => {
      window.scrollTo(0, 0);
      if(!movies.isHistoryLoaded && movies.isLogin){ 
        getUserHistory();
      }
      return () => {    
      };
    }, [])

    return (
        <div className='history-container'>
        {movies.isLogin ? 
          <div className='history-login'>
              <h1>{`${movies.userInfo.first_name} ${movies.userInfo.last_name}'s Buying History`}</h1>
              { !movies.isHistoryLoaded ? 
                <h1>Loading user history...</h1>
                : renderUserHistory(movies.userHistory) 
              }
              <button onClick={()=>getUserHistory()}>Load history</button>
          </div>
        :
          <h1 className='no-login-h1'>You are not logging in</h1>
        }
        </div>
    )
}

export default History;

                 // { <div>
                    // <ul>
                    // {  movies.userHistory.length === 0 ? 
                    //      <h1>User has no shopping history</h1>
                    //      : 
                    //      movies.userHistory.map(movie => 
                    //        <li key={movie.title}>{`title: ${movie.title} purchase_date: ${movie.purchase_date}`}</li>
                    //      )               
                    // }
                    // </ul>
               // </div> }
