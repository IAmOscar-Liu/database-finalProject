import React, {useContext, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import './Grid.css';
import GridItems from './GridItems';
import Modal from './Modal';
import {MovieContext} from './MovieContext';
import axios from 'axios';

// `https://api.themoviedb.org/3/movie/${searchType}?api_key=5fb93387541fc093f329bc1481d3b3e8&language=en-US&page=${pageIndex}`

function Grid() {
    const [movies, setMovies] = useContext(MovieContext);
    const [isLoading, setIsLoading] = useState(false);
    const [searchType, setSearchType] = useState('top_rated');
    const [pageIndex, setPageIndex] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nowPos, setNowPos] = useState({
        top: 0,
        left: 0
    })
    const [selectedMovie, setSelectedMovie] = useState({});
    const history = useHistory();

    const toggleSearchType = () => {
        setPageIndex(prev => 1);
        setSearchType(prev => prev === 'top_rated' ? 'popular' : 'top_rated');
    }

    const changePageIndex = newPage => {
        if(newPage === 'next' && pageIndex < 5){
            setPageIndex(prev => prev+1);
            //fetchMovies();
            return;
        }
        if(newPage === 'prev' && pageIndex > 1){
            setPageIndex(prev => prev-1);
            //fetchMovies();
            return;
        }
        setPageIndex(prev => newPage);
        //fetchMovies();
    }

    const fetchMovies = async() => {
        
        if(movies[searchType][pageIndex-1]) return;
        // console.log('start fetching');

        try{
            setIsLoading(true);
            const result = await axios.get(`/search_movies/${searchType}/${pageIndex}`);
            //const result = await axios.get('/search_movies');
            let data = result.data.data;
            data = data.map(_d =>{ return {..._d, price: Math.floor(Math.random()*100+100)}});
            // console.log(data);
            // let nowMovies = movies;
            // nowMovies[searchType][pageIndex] = data;
            // setMovies(nowMovies);
            if(searchType === 'top_rated') setMovies({...movies, top_rated: movies.top_rated.map((movie, _i) => pageIndex - 1 === _i ? data : movie )});
            else setMovies({...movies, popular: movies.popular.map((movie, _i) => pageIndex - 1 === _i ? data : movie)});
            setIsLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    const toggleModal = (info) => {
        // console.log(info);
        if(!isModalOpen){
            //console.log(info)
            const choosedMovie = movies[searchType][pageIndex-1].find(m => m.title === info);
            //console.log(choosedMovie);
            setSelectedMovie(choosedMovie);
            setNowPos({
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            })
        }
        setIsModalOpen(prev => !prev);
    }

    window.onscroll = () => {
        //console.log('scrolling')
        if(isModalOpen) window.scrollTo(nowPos.left, nowPos.top); 
        if(movies.isCoverShow) window.scrollTo(0, 0);
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchMovies();
        return () => {         
        };
    }, [searchType, pageIndex])

    return (
    <div className="grid-outer-container">
        {isModalOpen ? <Modal data={selectedMovie} toggleModal={toggleModal} /> : ''}
        <div className="button-group">
            <button onClick={()=>changePageIndex('prev')}>Prev</button>
            <button className={pageIndex===1 ? 'active' : ''} onClick={()=>changePageIndex(1)}>1</button>
            <button className={pageIndex===2 ? 'active' : ''} onClick={()=>changePageIndex(2)}>2</button>
            <button className={pageIndex===3 ? 'active' : ''} onClick={()=>changePageIndex(3)}>3</button>
            <button className={pageIndex===4 ? 'active' : ''} onClick={()=>changePageIndex(4)}>4</button>
            <button className={pageIndex===5 ? 'active' : ''} onClick={()=>changePageIndex(5)}>5</button>
            <button onClick={()=>changePageIndex('next')}>Next</button>
        </div>

        <div className="movieType-btn-container">
            <button className={searchType === 'top_rated' ? 'active' : ''} onClick={()=>{if(searchType!=='top_rated') toggleSearchType()}}>Top Rated</button>
            <button className={searchType === 'top_rated' ? '' : 'active'} onClick={()=>{if(searchType==='top_rated') toggleSearchType()}}>Popular</button>
        </div>
        
        <div className="shoppinglist-btn-container">
            <button onClick={()=> history.push('/cart')}>My Cart</button>
        </div>

        {isLoading || movies[searchType][pageIndex-1]===undefined ? <h1 style={{width: '100%', textAlign:'center'}}>Loading...</h1> : 
          <div className="grid-container">
            <GridItems movies={movies[searchType][pageIndex-1]} toggleModal={toggleModal} />
          </div>
        }

        <div className="button-group bottom">
        <button onClick={()=>changePageIndex('prev')}>Prev</button>
        <button className={pageIndex===1 ? 'active' : ''} onClick={()=>changePageIndex(1)}>1</button>
            <button className={pageIndex===2 ? 'active' : ''} onClick={()=>changePageIndex(2)}>2</button>
            <button className={pageIndex===3 ? 'active' : ''} onClick={()=>changePageIndex(3)}>3</button>
            <button className={pageIndex===4 ? 'active' : ''} onClick={()=>changePageIndex(4)}>4</button>
            <button className={pageIndex===5 ? 'active' : ''} onClick={()=>changePageIndex(5)}>5</button>
            <button onClick={()=>changePageIndex('next')}>Next</button>
        </div>
    </div>
    )
}

export default Grid
