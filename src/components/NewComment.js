import React from 'react'

const NewComment = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

const url = process.env.MONGODB_URI;

const uploadComment = 

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="comment"
        placeholder="Wonderous Audio, Bravo!!!"
        value={} 
        />

      <input
      type="hidden"
      name="post"
      value={}
      />

      </form>
    </div>
  )
}

export default NewComment