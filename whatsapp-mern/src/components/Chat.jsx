import React from 'react'
import './Chat.css'
import {Avatar ,IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Chat = () => {
  return (
    <div className='chat'>
        <div className="chat_header">
          <Avatar/>
          <div className="chat_headerInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <IconButton>
            <AttachFileIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          <p className='chat_message'>
            <span className="chat_name">Sonny</span>
            This is message
            <span className="chat_timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>

            </p>
            <p className='chat_message chat_reciever'>
            <span className="chat_name">Sonny</span>
            This is message
            <span className="chat_timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>

            </p>
            <p className='chat_message'>
            <span className="chat_name">Sonny</span>
            This is message
            <span className="chat_timestamp">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>

            </p>
        </div>
        <div className="chat_footer">
          
        </div>
    </div>
  )
}

export default Chat