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
      const updateComment = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(newComment),
        headers: {
          "content-type": "application/JSON"
        } 
      })
    }
    catch(err){
      // console.log(err)
    }
  }

  // console.log(props)

  const url = `${process.env.REACT_APP_MONGODB_URL}${props.props}/comment`
  console.log(url)

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