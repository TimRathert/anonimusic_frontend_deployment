import React, { useState } from 'react'
import FileInvalidModal from './FileInvalidModal';

function NewPost() {

    
    const [newForm, setNewForm ] = useState({
        user: 'test-user',
        title: '',
        description: '',
        file: '',
        tags:'',

    })
    const [newTags, setNewTags ] = useState('')
    
    //state for Modal
    const [showModal, setShowModal] = useState(false);

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
        const fileForUpload = document.getElementById('file').files[0];
        // postman worked by passing the arguments in as formdata
        // so the requirements are appeneded to the formdata below vvv
        const formData = new FormData();
        formData.append('file', fileForUpload);
        formData.append('upload_preset', process.env.REACT_APP_PRESET);
        
        fetch(url,{
            method: 'POST',
            body: formData,
        })
        .then((response) => {return response.json()})
        // returned url is appended to the newForm state
        .then((data) => setNewForm({...newForm, file: data.url })) 
    }
    const checkSize = () => {
        const fileForUpload = document.getElementById('file').files[0];
        if(fileForUpload.size > 400000){
           document.getElementById('inputForm').reset()
           setShowModal(true)
        }
    }
  return (
    <div>
        <FileInvalidModal showModal = {showModal} setShowModal = {setShowModal}/>
        <form id="inputForm" onSubmit={ handleSubmit }>
            <input 
                type="file" 
                name="newAudioFile" 
                id="file"
                accept='audio/*'
                onChange={ checkSize }  
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