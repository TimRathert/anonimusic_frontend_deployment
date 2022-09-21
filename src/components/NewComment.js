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
        type="text"
        name="comment"
        placeholder="Wonderous Audio, Bravo!!!"
        value={newComment} 
        onChange={handleChange}
        />

      <input
      type="hidden"
      name="post"
      value={props}
      />

      </form>
    </div>
  )
}

export default NewComment