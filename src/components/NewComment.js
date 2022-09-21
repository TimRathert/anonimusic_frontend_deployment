import React, { useState } from 'react'

const NewComment = (props) => {
  
  const [newComment, setNewComment] = useState ({
    user: '',
    post: ''
  })

  const handleChange = (e) => {
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
        value={newComment} 
        onChange={handleChange}
        />

      <input
      type="text"
      name="post"
      value={props}
      />

      </form>
    </div>
  )
}

export default NewComment