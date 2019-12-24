import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState({
        popular: [undefined, undefined, undefined, undefined, undefined],
        top_rated: [undefined, undefined, undefined, undefined, undefined],
        cart: [],
        isLogin: false,
        // userInfo: {
        //     uuid: '',
        //     first_name: '',
        //     last_name: '',
        //     email: '',
        //     password: '',
        //     img_name:'',
        //     img_url: '',
        //     register_date: ''
        // },
        userInfo: {},
        userFav: [],
        isUserFavLoaded: false,
        userHistory: [],
        isHistoryLoaded: false,
        isCoverShow: true
    })

    return(
        <MovieContext.Provider value={[movies, setMovies]} >
            {props.children}
        </MovieContext.Provider>
    )
}