import React from 'react'
import Sidebar from './components/Sidebar'
import MainBar from './components/MainBar'
import './App.css'
export default function App() {
  return (
    <div className='app'>
      <div className='side-bar-box'>   <Sidebar/></div>
        <div className='main-bar-box'> <MainBar/></div>
    </div>
  )
}
