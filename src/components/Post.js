import React, { useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import Comment from './Comment'
import Collapsible from 'react-collapsible'
import NewComment from './NewComment'
import ColorMe from './ColorMe'



const Post = (props) => {
  
  
  useEffect(()=> {
    props.getPosts();
  },[]);

  return (
    <div className="post-container">
       {props.props.map((post, index)=> {  
          return ( 
          <div key = { index }>
            <ColorMe props={post.user}/>
          <h4 className="username"><img className="profile-pic" src="https://picsum.photos/200/300" alt="profile-pic"/>{post.user}</h4>
          <div className='player-wrapper'>
            <ReactAudioPlayer
              className='react-player'
              src = {post.file}
              controls
              key={index}   
             />
          </div>
          <p></p>
          <Comment  props={post.comments}/>
          <Collapsible className="new-comment" trigger="New Comment">
            <NewComment getPosts={props.getPosts} props={post._id}/>
          </Collapsible>
          </div>
          )
        })}
    </div>
  )
}

export default Post