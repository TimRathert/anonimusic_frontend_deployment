import React from 'react'
import ReactPlayer from 'react-player/'

const Post = (props) => {
  return (
    <div className="post-container">
        <p>Description</p>
        <div>{props.Comment}</div>
    </div>
  )
}

export default Post