import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
// import forceVideo from 'react-player'
import Comment from './Comment'
import Collapsible from 'react-collapsible'
import NewComment from './NewComment'


const Post = (props) => {
   
  return (
    <div className="post-container">
        <>
       {props.props.map((post, index)=> {  
          let url =  `'${post.file}'`
          return ( 
          <>
          <h4 className="username"><img class="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>{post.user}</h4>
          <div className='player-wrapper'>
            <ReactAudioPlayer
              className='react-player'
              src = {post.file}
              controls
              key={index}   
             />
          </div>
          <p></p>
          <Comment props={post.comment}/>
          <Collapsible className="new-comment" trigger="New Comment">
            <NewComment props={post._id}/>
          </Collapsible>
          </>
          )
        })}
        </>
    </div>
  )
}

export default Post