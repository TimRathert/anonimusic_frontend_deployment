import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player/'
import Comment from './Comment'


const Post = (props) => {

console.log(props.props.file)
  return (
    <div className="post-container">
        <>
       {props.props.map((post, index, results)=> { 
          return ( 
          <>
          <h4 className="username"><img class="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>{post.user}</h4>
          <div className='player-wrapper'>
        
            <ReactPlayer
              className='react-player'
              url={JSON.stringify(post.file)}
              width='100%'
              height='100%'
            />
          </div>
          <p></p>
          <Comment props={post.comment}/>
          </>
          )
        })}
        </>
          
    </div>
  )
}

export default Post