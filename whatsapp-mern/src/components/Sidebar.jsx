import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import {Avatar ,IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
          <Avatar src='https://media.licdn.com/dms/image/D5603AQH-fIWzxxjb6A/profile-displayphoto-shrink_800_800/0/1690113387508?e=2147483647&v=beta&t=In8QkfrTaySx5ABfQWxlv1jxVB8uTsWC5oEUFEhU3pY'/>
          <div className="sidebar_headerRight">
            <IconButton>
            <DonutLargeIcon/>
            </IconButton>
            <IconButton>
            <ChatIcon/>
            </IconButton>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
          </div>
        </div>
        <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchIcon/>
            <input type="text" placeholder='Search or start new chat' />
          </div>
        </div>
        <div className="sidebar_chats">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
    </div>
  )
}

export default Sidebar