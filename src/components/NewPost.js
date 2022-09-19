import React, { useState } from 'react'

function NewPost() {

    
    const [newForm, setNewForm ] = useState({
        title: '',
        description: '',
    })
    const [newTags, setNewTags ] = useState('')


    const handleChangeDB = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }
    const handleChangeTags = (e) => {
        setNewTags({...newTags, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        uploadFile()
    }
    const url = process.env.REACT_APP_CLOUDINARY_URL
   
    const uploadFile = async(file) => {
        try{
            const fileForUpload = document.getElementById('file').files[0];
            const formData = new FormData();
            formData.append('file', fileForUpload);
            formData.append('upload_preset', process.env.REACT_APP_PRESET);
            formData.append('folder', 'anonimusic');
            const uploadFile = await fetch(url,{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(formData),
            })
            console.log(uploadFile)
        }
        catch(e) {
            console.log(e)
        }
    }

  return (
    <div>
        <form onSubmit={ handleSubmit }>
            <input 
                type="file" 
                name="newAudioFile" 
                id="file"
                accept='audio/*'  
            />  
            <input 
                type="text" 
                value={ newForm.title } 
                onChange= { handleChangeDB }
                name="title"
                placeholder='Title'
            />
            <input 
                type="text" 
                value={ newForm.description } 
                onChange= { handleChangeDB } 
                name="description"
                placeholder='Description'
            />
            <input 
                type="text" 
                value={ newForm.tags } 
                onChange= { handleChangeTags }
                name="tags"
                placeholder='Tags'
            />
            <input 
                type="submit"
                name='newAudio'
            />
        </form>
    </div>
  )
}

export default NewPost