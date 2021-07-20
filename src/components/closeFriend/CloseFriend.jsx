import React from 'react'
import "./closeFriend.css"

export default function closeFriend( {user}) {
    return (
        <div>
            <li className="sidebarFriend">
                <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
                <span className="sidebarFriendText">{user.username}</span>
            </li>
        </div>
    )
}
