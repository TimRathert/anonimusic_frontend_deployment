import React, { useState, useRef } from 'react';
import FileInvalidModal from './FileInvalidModal';
import Spinner from 'react-bootstrap/Spinner';
import Collapsible from 'react-collapsible';
import Recorder from './Recorder';

function NewPost(props) {
    const [newForm, setNewForm ] = useState({
        user: 'test-user',
        title: '',
        description: '',
        file: '',
        tags:'',
    })

    //state for Modal
    const [showModal, setShowModal] = useState(false);
    let audioFile = useRef(null);
    const [ formReady, setFormReady ] = useState(true);

    const handleChangeDB = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormReady(false)
        try{
            const data = await uploadFile()
            uploadPost(data.url)
        }
        catch(err){
            console.log(err)
        }
        setFormReady(true)
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
           audioFile.current = null;
        }

    }
    const uploadPost = async(url) => {
        const postDBurl = process.env.REACT_APP_MONGODB_URL       
        const data = {...newForm, file: url, user: `${props.session}`}
        try{
            const newPost = await fetch(postDBurl,{
                method: 'POST',
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                
            })
               
            setNewForm({
                user: `test-user`,
                title: '',
                description: '',
                file: '',
                tags:'',
            }) 
            document.getElementById('inputForm').reset() 
            props.getPosts();    
        }
        catch(e){
           console.log(e)
        }
    }
    
    const ready = () => {
       
       
        return(
            <Collapsible 
                className="newPostContainer" 
                trigger={(<i className="fa-solid fa-microphone"> New Post</i>)}
            >
                <Recorder audioFile = { audioFile }  />
            <form id="inputForm" onSubmit={ handleSubmit }>
                <input 
                    type="file" 
                    name="newAudioFile" 
                    id="file"
                    accept='audio/*'
                    onChange={ checkSize }  
                    className="formInput"
                    ref = { audioFile }
                />  
                <input 
                    type="text" 
                    value={ newForm.title } 
                    onChange= { handleChangeDB }
                    name="title"
                    placeholder='Title'
                    className="formInput"
                />
                <input 
                    type="text" 
                    value={ newForm.description } 
                    onChange= { handleChangeDB } 
                    name="description"
                    placeholder='Description'
                    className="formInput"
                />
                <input 
                    type="text" 
                    value={ newForm.tags } 
                    onChange= { handleChangeDB }
                    name="tags"
                    placeholder='Tags'
                    className="formInput"
                />
                <input 
                    type="submit"
                    name='newAudio'
                    className="formInput"
                />
            </form>
            </Collapsible>
            
        )
    }
    const notReady = () => {
        return(
            <Spinner 
                animation="border"
                role="status"
                aria-hidden="true"
            >
                <span className="loading-indicator">🎤</span>
            </Spinner>
        )
    }
  return (
    
    <div>
        
        <FileInvalidModal showModal = {showModal} setShowModal = {setShowModal}/>
        {formReady ? ready() : notReady()}
    </div>
  )
}

export default NewPost