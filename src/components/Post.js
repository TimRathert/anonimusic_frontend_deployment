import React from 'react'
import ReactPlayer from 'react-player/'

const Post = (props) => {
  return (
    <div className="post-container">
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
        <p>Description</p>
        <div>{props.Comment}</div>
    </div>
  )
}

export default Post