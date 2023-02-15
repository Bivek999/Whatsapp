import React from 'react'
import './chatscreen.css'
import {FiPhone} from 'react-icons/fi'

const ChatScreen = () => {
  return (
    <div className='chatScreen'>
        <div className='div-icon'>
            <div style={{padding:'4rem'}} className='ficon'>
            <FiPhone className='phone-icon'/>
            </div>
            <p style={{color:'white'}}>Click On Chats To See Messages</p>
        </div>
    </div>
  )
}

export default ChatScreen