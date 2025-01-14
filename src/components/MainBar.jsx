import React from 'react';
import userImage from '../assets/user-icon.png';
import chatImage from '../assets/chatgpt.svg';
import sendIcon from '../assets/send.svg';

export default function MainBar() {
  return (
    <div className="main-bar">
      <div className="user-box common-ui">
        <img src={userImage} alt="User Icon" className="user-icon" />
        <span className="user-text">What is wave?</span>
      </div>

      <div className="chat-bot common-ui">
        <img src={chatImage} alt="ChatGPT Icon" className="chat-image" />
        <span className="chat-text">
          A wave is a repeating disturbance or oscillation that travels through a medium
          (like air, water, or solid materials) or space, transferring energy without 
          transporting matter. Waves are characterized by their wavelength, frequency, 
          amplitude, and speed. They can be classified into mechanical waves (e.g., sound 
          waves, water waves), which require a medium to travel through, and electromagnetic 
          waves (e.g., light, radio waves), which can travel through a vacuum. Waves are 
          fundamental to many natural and technological phenomena, including communication, 
          music, and the behavior of light and sound.
        </span>
      </div>

      <div className="footer-box">
        <div className="input-box">
          <input type="text" placeholder="Send a message ..." className="send-input" />
          <button className="send-button">
            <img src={sendIcon} alt="Send Icon" className="send-icon" />
          </button>
        </div>
        <div className="lower-footer">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ullam.
        </div>
      </div>
    </div>
  );
}
