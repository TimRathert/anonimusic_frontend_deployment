import React from 'react'
import ReactPlayer from 'react-player'
// import forceVideo from 'react-player'
import Comment from './Comment'


const Post = (props) => {

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
              url="http://res.cloudinary.com/anonimusic/video/upload/v1663354848/Anonimusic/The_Bamboos_-_Amen_Brother_part1_atshkr.wav"
              width="400px"
              height="50px"
              playing={false}
              controls={true}
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