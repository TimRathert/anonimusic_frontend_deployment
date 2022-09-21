import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import Comment from './Comment'
const Post = (props) => {
  return (
    <div className="post-container">
        <h4 className="username"><img className="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>Username</h4>
        <div className='player-wrapper'>
        
        <AudioPlayer
          src={post.file}
        />
      </div>
        <p>This is a really hot test description.</p>
        <Comment/>
    </div>
  )
}

export default Post