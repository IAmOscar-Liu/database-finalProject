import React, {useState, useContext} from 'react';
import './User.css';
import {MovieContext} from './MovieContext';
import axios from 'axios';
import * as firebase from 'firebase';

function User() {
    const [movies, setMovies] = useContext(MovieContext);
    const [isEditing, toggleIsEditing] = useState(false);

    const [newFirtName, setNewFirtName] = useState(movies.userInfo.first_name);
    const [newLastName, setNewLastName] = useState(movies.userInfo.last_name);
    const [newEmail, setNewEmail] = useState(movies.userInfo.email);
    const [file, setFile] = useState(null);
    const [isUpdatingImg, toggleIsUpdatingImg] = useState(false);

    const handleUpdateUser = (e) => {
        //console.log(e.target.id, e.target.value);
        switch(e.target.id){
            case 'firstName': setNewFirtName(e.target.value); break; 
            case 'lastName': setNewLastName(e.target.value); break; 
            default : setNewEmail(e.target.value); break;
        }
    }
    const submitUpdatedUser = async() => {
        //let today = new Date();
        //let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();        
        // connect to backend and change the database
        if(newFirtName === '' || newLastName === '' || newEmail === ''){
            alert(`Invalid changes!\n${newFirtName === '' ? "First Name can't be blank\n" : ""}${newLastName === '' ? "Last Name can't be blank\n" : ''}${newEmail === '' ? "Email can't be blank": ''}`);
            return;
        }
        if(newFirtName === movies.userInfo.first_name && newLastName === movies.userInfo.last_name && newEmail === movies.userInfo.email){
            alert('Nothing changes');
            return;
        }
        try{        
            if(newFirtName !== movies.userInfo.first_name || newLastName !== movies.userInfo.last_name){
                const checkResult = await axios.post(`/check_user`,{
                    firstName: newFirtName,
                    lastName: newLastName,
                    email: newEmail,
                    password: ''
                });           
                const checkData = checkResult.data.message;
                if(checkData !== 'no such user'){
                    alert(`Your new username has been used!`);
                    return;
                }
            }

            /*const result =*/ await axios.post(`/update_user`, {
                firstName: newFirtName,
                lastName: newLastName,
                email: newEmail,
                uuid: movies.userInfo.uuid
            });
            
            // const data = result.data;
            // console.log(data);
            alert('Update successfully');
            setMovies({...movies, userInfo: {...movies.userInfo, first_name: newFirtName, last_name: newLastName, email: newEmail}});      
            setFile(null);
            toggleIsUpdatingImg(false);
            toggleIsEditing(false);
        }catch(err){
              console.log(err);
        }       
    }

    const quitEditing = () => {
        // console.log('quit');
        setNewFirtName(movies.userInfo.first_name);
        setNewLastName(movies.userInfo.last_name);
        setNewEmail(movies.userInfo.email);
        toggleIsUpdatingImg(false);
        toggleIsEditing(false);
        setFile(null);
    }

    const handleDeleteUser = async() => {
        // In React.js, you have to use window.confirm('')
        if(!window.confirm('It will delete your all buying history and favorite lists.\n Are you sure you want to delete the user?')) return;
        try{           
            /* let results =*/ await axios.post(`/delete_user`, {
                uuid: movies.userInfo.uuid
            });
            //console.log(results.data.message)
            alert('User has been deleted!');
            toggleIsEditing(false);
            toggleIsUpdatingImg(false);
            setFile(null);
            setMovies({...movies, cart: [], isLogin: false, isHistoryLoaded: false,userHistory: [], isUserFavLoaded: false, userFav: []});
        }catch(err){
            console.log(err);
        }
    }

    const uploadFile = () => {
       //console.log(file);
       if(file === null){
           alert(`You haven't chosen any image!`);
           return;
       }
       if(!file.type.includes('image')){
           alert(`You can't choose the file that is not image!`);
           return;
       }
       if(file.name === movies.userInfo.img_name){
           alert(`You can't use the image having the same name as your old one!`);
           return;
       }
       const storage = firebase.storage().ref();
       storage.child(file.name).put(file)
         .then(snapshot => 
           snapshot.ref.getDownloadURL()
             .then(url => handleUploadImg(url))
         )
    }

    const handleUploadImg = async(url) => {
        try{
            /*let results =*/ await axios.post(`/upload_img`, {
                uuid: movies.userInfo.uuid,
                img_name: file.name,
                img_url: url
            });
            //console.log(results.data);
            alert('Image has been updated!');
            setMovies({...movies, userInfo:{...movies.userInfo, img_name: file.name, img_url: url}})
            toggleIsEditing(true);
            setFile(null);
            toggleIsUpdatingImg(false);
        }catch(err){
            console.log(err);
        }
    }

    if(!movies.isLogin && isEditing){
        toggleIsEditing(false);
        toggleIsUpdatingImg(false);
        setFile(null);
    } 
    
    return (
      <div className='user-outer-container'> 
        { movies.isLogin ?
            <div className="user-container">
                <h1>User Profile</h1>
                <img src={movies.userInfo.img_url} alt=''/>
                { isEditing ? 
                  <div style={{width: '100%'}}>
                    {isUpdatingImg ? 
                    <div className='upload-btn'>
                        <label htmlFor='select-is-updating'>
                          <i className="far fa-file-image"></i>
                          <span>{file===null ? 'No image chosen' : file.name}</span>
                        </label>
                        <input style={{display: 'none'}} id='select-is-updating' type="file" onChange={e => setFile(e.target.files.item(0))} />
                        <div>
                          <button id='submit-is-updating' onClick={uploadFile}>OK</button>
                          <button id='close-is-updating' onClick={()=>toggleIsUpdatingImg(false)}>Cancel</button>
                        </div>
                    </div>
                    :<div className='upload-btn'>
                        <button id='open-is-updating' onClick={()=>toggleIsUpdatingImg(true)}>Upload image</button>
                    </div>
                    }
                  </div>  
                 :
                 <span></span>
                }
                <div className='user-info'>
                <p>First Name: {isEditing ? <input id='firstName' type='text' value={newFirtName} onChange={handleUpdateUser}/> : <span>{movies.userInfo.first_name}</span>}</p>
                <p>Last Name: {isEditing ? <input id='lastName' type='text' value={newLastName} onChange={handleUpdateUser}/> : <span>{movies.userInfo.last_name}</span>}</p>
                <p>Email: {isEditing ? <input id='email' type='text' value={newEmail} onChange={handleUpdateUser}/> : <span>{movies.userInfo.email}</span>}</p>
                <p>Register Date: <span>{movies.userInfo.register_date}</span></p>
                </div>
                <div className='user-btn'>
                {isEditing ? <button onClick={()=>submitUpdatedUser()}>Save Change</button> : <button onClick={()=>{setNewFirtName(movies.userInfo.first_name); setNewLastName(movies.userInfo.last_name); setNewEmail(movies.userInfo.email); toggleIsEditing(true)}}>Update User</button>}
                {isEditing ? <button onClick={()=>quitEditing()}>Cancel</button> : <button onClick={()=>handleDeleteUser()}>Delete User</button>}
                </div>
            </div> 
            :
            <div className="user-container">
                <h1>User Profile</h1>
                <p>Please log in to see the user profile</p>
            </div>    
        }
      </div>  
    )
}

export default User
