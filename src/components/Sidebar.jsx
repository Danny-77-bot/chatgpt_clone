import React from 'react'
import logo from '../assets/logo.svg'
import addIcon from '../assets/add-30.png'
import message from '../assets/message.svg';
import homeIcon from '../assets/home.svg';
import savedIcon from '../assets/bookmark.svg';
import upgradeIcon from '../assets/rocket.svg';
export default function Sidebar() {
  return (
    <div className='side-bar'>
      <div className='top-side-bar'>
           <div className='logo-container'>
            <img src={logo} alt="logo" className="logo" />
            <span className="banner-text">CHATGYPT</span>
           </div>
           <div className='button-container'>
               <button className='button'><img src={addIcon} alt="" className="plus-icon" /></button> 
               <span className="button-text">New Chat</span>
           </div>
           <div className='question-container'>
              <div className='question-box'>
                <img src={message} alt="" className="question-icon" />
                <span className="question-desc">What is programming</span>
              </div>
              <div className='question-box'>
              <img src={message} alt="" className="question-icon" />
              <span className="question-desc">How to use API</span>
              </div>
           </div>
      </div>
      <div className='bottom-side-bar'>
            <div className="home-box">
                <img src={homeIcon} alt="" className="home-icon" />
                <span className="home-text">Home</span>
                </div>  
                <div className="saved-box">
                <img src={savedIcon} alt="" className="saved-icon" />
                <span className="saved-text">Saved</span>
                    </div> 
                <div className="upgrade-box">
                <img src={upgradeIcon} alt="" className="upgrade-icon" />
                <span className="upgrade-text">Upgrade To Pro</span>
                    </div> 
                    
      </div>
    </div>
  )
}
