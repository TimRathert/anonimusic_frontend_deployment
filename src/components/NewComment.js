import React from 'react'

const NewComment = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

const url = process.env.MONGODB_URI;


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="comment"
        placeholder="Wonderous Audio, Bravo!!!"
        value='test' 
        />

      <input
      type="hidden"
      name="post"
      value='test'
      />

      </form>
    </div>
  )
}

export default NewComment