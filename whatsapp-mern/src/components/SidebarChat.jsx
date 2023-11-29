import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@mui/material'
const SidebarChat = () => {
  return (
    <div className='SidebarChat'>
        <Avatar></Avatar>
        <div className="sidebarChat_info">
            <h2>Name</h2>
            <p>message</p>
        </div>
    </div>
  )
}

export default SidebarChat