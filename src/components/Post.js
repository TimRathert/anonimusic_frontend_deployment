import React from 'react'
import ReactPlayer from 'react-player/'
import Comment from './Comment'
const Post = (props) => {
  return (
    <div className="post-container">
        <h4 className="username"><img class="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>Username</h4>
        <div className='player-wrapper'>
        
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
        <p>This is a really hot test description.</p>
        <Comment/>
    </div>
  )
}

export default Post