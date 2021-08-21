import React, {useState, useEffect} from 'react'
import './Feed.css'
import {Avatar} from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import SubcsriptionIcon from '@material-ui/icons/Subscriptions'
import InputOption from './InputOption'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Posts from './Posts'
import {db} from '../firebase'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import { selectUser } from '../features/counter/userSlice'
import FlipMove from 'react-flip-move'


const Feed = () => {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([])
    const user = useSelector(selectUser)
    
    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            ))
        )
        )
    }, [])

    const sendPost = e => {
        e.preventDefault()
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="feed">
           <div className="feed-inputContainer">
                <div className="feed-input">
                    <form>
                        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQF9zl_fik5XMA/profile-displayphoto-shrink_100_100/0/1625329047227?e=1633564800&v=beta&t=HDS9jAD_sPTobYD70hx_1Hl-FJpiZKEN0SgKGmKpZSQ" className="feed-pic"/>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post"></input>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed-inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubcsriptionIcon} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7Fc15E"/>
                </div>
           </div> 
            {/*Posts*/}
            <FlipMove>

                {posts.map(({ id, data: {name,description,message, photoUrl}}) => (
                    <Posts
                    key={id} 
                    name={name} 
                    description={description} 
                    message={message}
                    photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
