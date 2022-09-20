import React, { useState } from 'react'
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
    // const [tags, setTags] = useState({
    //     tags: '',
    // })

    //state for Modal
    const [showModal, setShowModal] = useState(false);

    const handleChangeDB = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }
    // const handleTags = (e) => {
    //     setTags({...tags, [e.target.name]: e.target.value})    
    // }
    
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
        const fileForUpload = document.getElementById('file').files[0];
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
        // console.log(data)
        // setNewForm({...newForm, file: data.url })
        // return newForm;
    }
    const checkSize = () => {
        const fileForUpload = document.getElementById('file').files[0];
        if(fileForUpload.size > 400000){
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
            //const newPost = await fetch("http://localhost:4000",{
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