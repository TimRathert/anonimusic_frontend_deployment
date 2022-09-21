import React, { useState } from 'react'

const NewComment = (props) => {
  
  const [newComment, setNewComment] = useState ({
    user: '',
    post: ''
  })

  const handleChangeComment = (e) => {
    setNewComment({...newComment, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
console.log(props)

const url = process.env.MONGODB_URI;


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
        type="hidden"
        name="user"
        value={newComment.user} 
        onChange={handleChangeComment}
        />

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