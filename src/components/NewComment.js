import React, { useState } from 'react'

const NewComment = (props) => {
  const [newComment, setNewComment] = useState ({
    user: '',
    post: ''
  })

  const handleChangeComment = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }

  const handleSubmit  = async (e) => {
    e.preventDefault()
    try{
      const data = {...newComment, user: `${props.session}`, timestamp: new Date()}
      const updateComment = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/JSON"
        }
      })
      
      props.getPosts();
      setNewComment({
        user: '',
        post: ''
      })
    }
    catch(err){
    }
  }

  const url = `${process.env.REACT_APP_MONGODB_URL}${props.props}/comment`

  return (
    <div className='newCommentForm'>
      <form onSubmit={handleSubmit}>

      <input
      type="text"
      name="post"
      value={newComment.post}
      onChange={handleChangeComment}
      />
     <input
      type="submit"
      name="newComment"
       />
      </form>
    </div>
  )
}

export default NewComment