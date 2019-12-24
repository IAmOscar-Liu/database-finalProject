import React, {useContext, useState} from 'react';
import './SignIn.css';
import {MovieContext} from '../components/MovieContext';
import axios from 'axios';

function SignIn() {
    const [movies, setMovies] = useContext(MovieContext);
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [createdFirstName, setCreatedFirstName] = useState('');
    const [createdLastName, setCreatedLastName] = useState('');
    const [createdPassword, setCreatedPassword] = useState('');
    const [createdEmail, setCreatedEmail] = useState('');
    // const [reloadPage, toggleReloadPage] = useState(true);
    const [isSigningIn, toggleIsSigningIn] = useState(true);
    
    const handleEnterChange = (e) => {
        switch(e.target.id){
            case 'firstName': setEnteredFirstName(e.target.value); break;
            case 'lastName': setEnteredLastName(e.target.value); break;
            default: setEnteredPassword(e.target.value); break;
        }
    }

    const handleSignin = async() => {
        if(enteredFirstName === '' || enteredLastName === '' || enteredPassword === ''){
          alert(`Invalid inputs!\n${enteredFirstName === '' ? "First Name can't be blank\n" : ""}${enteredLastName === '' ? "Last Name can't be blank\n" : ''}${enteredPassword === '' ? "Password can't be blank": ''}`);
          return;
        }
        try{
            const data = await axios.post(`/find_user`, {
                  firstName: enteredFirstName,
                  lastName: enteredLastName,
                  password: enteredPassword,          
            })
            const result = data.data.result;
            if(result === 'no result'){
                alert('No such user or wrong password!');
            }else{
              // console.log(result);  
              setMovies({...movies, isLogin: true, userInfo: result});
              // toggleReloadPage(prev => !prev);
            }
        }catch(err){
            console.log(err);
        }
    }

    const handleSignout = () => {
        setMovies({...movies, cart: [], isLogin: false, isHistoryLoaded: false,userHistory: [], isUserFavLoaded: false, userFav: []});
    }

    const handleCreatedChange = (e) => {
        switch(e.target.id){
            case 'firstName-create': setCreatedFirstName(e.target.value); break;
            case 'lastName-create': setCreatedLastName(e.target.value); break;
            case 'email-create': setCreatedEmail(e.target.value); break;
            default: setCreatedPassword(e.target.value); break;
        }
    }

    const handleCreateNewUser = async() => {
      if(createdFirstName === '' || createdLastName === '' || createdEmail === '' || createdPassword === ''){
          alert(`Invalid inputs!\n${createdFirstName === '' ? "First Name can't be blank\n" : ""}${createdLastName === '' ? "Last Name can't be blank\n" : ''}${createdPassword === ''? "Password can't be blank\n" : ''}${createdEmail === '' ? "Email can't be blank": ''}`);
          return;
      }  
      try{
        const data = await axios.post(`/check_user`, {
            firstName: createdFirstName,
            lastName: createdLastName,
            email: createdEmail,
            password: createdPassword
        });
        const result = data.data;

        if(result.message === 'no such user'){
            await axios.post(`/create_user`, {
                firstName: createdFirstName,
                lastName: createdLastName,
                email: createdEmail,
                password: createdPassword
            });
            //const createdResult = createdData.data;
            alert('A new user is created');

            setTimeout(async() => {
                const newData = await axios.post(`/find_user`,{
                      firstName: createdFirstName ,
                      lastName: createdLastName,
                      password: createdPassword ,        
                })
                const newResult = newData.data.result;
                setMovies({...movies, isLogin: true, userInfo: newResult});
                // toggleReloadPage(prev => !prev);
            }, 500);
        }else{
            alert('This username is alreated used. Try another one!');
        }
    }catch(err){
        console.log(err);
      }
    }

    window.onscroll = () => {
      // console.log('scrolling');
      // if(movies.isCoverShow) window.scrollTo(0, 0);
    }

    return (
        <div className="signin-container">
        {movies.isLogin ? 
          <div className='signin-container-signin'>
              <h1>You are now signing in as {`${movies.userInfo.first_name} ${movies.userInfo.last_name}`}</h1>
              <button onClick={()=>handleSignout()}>Sign out</button>
          </div>
        :
          <div className='signin-container-both'>
            <div className='signin-btn-controller'>
                <button onClick={()=>toggleIsSigningIn(true)} className={isSigningIn ? '':'inactive'}>Sign In</button>
                <button onClick={()=>toggleIsSigningIn(false)} className={isSigningIn ? 'inactive':''}>Register</button>
            </div>
            {isSigningIn ? 
              <div className='signin-form'>
                <h1>Please sign in</h1>
                <div>
                  <p>
                    <label htmlFor='firstName'>First Name: </label>
                    <input type='text' id='firstName' value={enteredFirstName} onChange={handleEnterChange}/>
                  </p>
                  <p>
                    <label htmlFor='lastName'>Last Name: </label>
                    <input type='text' id='lastName' value={enteredLastName} onChange={handleEnterChange}/>
                  </p>
                  <p>
                    <label htmlFor='password'>Password: </label>
                    <input type='text' id='password' value={enteredPassword} onChange={handleEnterChange}/> 
                  </p>                             
                </div>
                <button onClick={()=>handleSignin()}>Sign in</button>
              </div>
            :
              <div className='signup-form'>
                <h1>Create a new account</h1>
                <div>
                  <p>
                    <label htmlFor='firstName-create'>First Name: </label>
                    <input type='text' id='firstName-create' value={createdFirstName} onChange={handleCreatedChange}/>
                  </p>
                  <p>
                    <label htmlFor='lastName-create'>Last Name: </label>
                    <input type='text' id='lastName-create' value={createdLastName} onChange={handleCreatedChange} />
                  </p>  
                  <p>
                    <label htmlFor='password-create'>Password: </label>
                    <input type='text' id='password-create' value={createdPassword} onChange={handleCreatedChange} />
                  </p>
                  <p>
                    <label htmlFor='email-create'>Email: </label>
                    <input type='text' id='email-create' value={createdEmail} onChange={handleCreatedChange}/>
                  </p>               
                </div> 
                <button onClick={()=>handleCreateNewUser()}>Create new user</button>
              </div>
            }     
          </div>  
        }    
        </div>
    )
}

export default SignIn
