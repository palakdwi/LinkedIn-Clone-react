import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import {useSelector} from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

const HeaderOption = ( { avatar, Icon, title} ) => {
    const user = useSelector(selectUser)
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption-icon"/>}
            {avatar && <Avatar className="avatar" src={user?.photoUrl}></Avatar>   }
            <h3 className="headerOption-title">{title}</h3>
        </div>
    )
}

export default HeaderOption
