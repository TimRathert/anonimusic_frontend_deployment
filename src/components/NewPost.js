import React, { useState, useRef } from 'react'
import FileInvalidModal from './FileInvalidModal';

function NewPost() {

    //State for form
    const [newForm, setNewForm ] = useState({
        user: 'test-user',
        title: '',
        description: '',
        file: '',
        tags:'',
    })

    //state for Modal
    const [showModal, setShowModal] = useState(false);
    let audioFile = useRef (null);
    const handleChangeDB = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            //await uploadFile() //to cloudinary
            const data = await uploadFile()
            //console.log(data)
            uploadPost(data.url)
           //.then( uploadPost() )// to mongodb
        }
        catch(err){
            console.log(err)
        }
        // const promise = uploadFile() //to cloudinary
        // const promise2 = promise.then(uploadPost(),''); // to mongodb

    }
        
    const uploadFile = async(file) => {
        const url = process.env.REACT_APP_CLOUDINARY_URL
        const fileForUpload = audioFile.current;
        // postman worked by passing the arguments in as formdata
        // so the requirements are appeneded to the formdata below vvv
        const formData = new FormData();
        formData.append('file', fileForUpload);
        formData.append('upload_preset', process.env.REACT_APP_PRESET);
        
        const response = await fetch(url,{
            method: 'POST',
            body: formData,
        })
        return await response.json()
        // returned url is appended to the newForm state
    }
    const checkSize = (e) => {
        audioFile.current = e.target.files[0]
        if(audioFile.current.size > 400000){
           document.getElementById('inputForm').reset()
           setShowModal(true)
        }

    }
    const uploadPost = async(url) => {
        const postDBurl = process.env.REACT_APP_MONGODB_URL       
        const data = {...newForm, file: url}
        console.log(data)
        try{
            const newPost = await fetch(postDBurl,{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                
            })
               console.log(newPost)
            setNewForm({
                user: 'test-user',
                title: '',
                description: '',
                file: '',
                tags:'',
            })
            document.getElementById('inputForm').reset()     
        }
        catch(e){
           console.log(e)
        }
        //reset form on submit

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
                onChange= { handleChangeDB }
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