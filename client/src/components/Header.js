import React from 'react';
import './Header.css';


function Header(props) {
    //const animRef = React.createRef();
    // console.log('reload header')
    // useEffect(() => {
    //   // console.log(animRef.current.childNodes); 
    //   if(!props.isOpenYet){
    //     animRef.current.childNodes.forEach(e=>{ 
    //       // document.querySelectorAll('.header-container > div > div span').forEach(e=>{
    //       console.log('re-anim')
    //       spanAnimation(e);
    //       setInterval(() =>spanAnimation(e), 6200);
    //     })
    //     props.toggleIsOpenYet();
    //   }
    // })


    // const spanAnimation = (e) =>{
    //     setTimeout(()=>{
    //         e.classList.add('anim');
    //     },100)
    //     setTimeout(()=>{
    //         e.classList.add('fadeout');
    //     },5100)
    //     setTimeout(()=>{
    //         e.classList.remove('anim');
    //         e.classList.remove('fadeout');
    //     },6100)        
    // }

    return (
    <div className='header-container'>
      {props.children} 
      <div>
        <div /*ref={animRef}*/>
            <span style={{"--span-index":1}}>W</span>
            <span style={{"--span-index":2}}>E</span>
            <span style={{"--span-index":3}}>L</span>
            <span style={{"--span-index":4}}>C</span>
            <span style={{"--span-index":5}}>O</span>
            <span style={{"--span-index":6}}>M</span>
            <span style={{"--span-index":7}}>E</span>
            <span style={{"--span-index":8}}></span>
            <span style={{"--span-index":9}}>H</span>
            <span style={{"--span-index":10}}>E</span>
            <span style={{"--span-index":11}}>R</span>
            <span style={{"--span-index":12}}>E</span>
        </div>
      </div>  
    </div>
    )
}

export default Header
