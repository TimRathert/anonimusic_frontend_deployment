import React, { useEffect } from 'react';
import {useState} from 'react'
import Collapsible from 'react-collapsible'

import NewComment from './NewComment';

const Comment = () => {

// const [comments, setComments] = useState([]);

// const getComments = async () => {
//     const response = await fetch(url);
//     const data = await response.json;
//     setComments(data.results)
// }

// useEffect(()=> {
//     getComments();
// }, []);

// const loaded = () => {
return (
    <div className="comment">
    <Collapsible className="comment-title" trigger="Comments">
    <p className="collapsible">this sucks man</p>
    <p className="collapsible">yeah seriously</p>
    <p className="collapsible">based</p>
    </Collapsible>
    <Collapsible className="new-comment" trigger="New Comment">
        <NewComment/>
    </Collapsible>
    </div>
)}

// const loading = () => {
//     return(<h1>Loading...</h1>)
// }

// return comments ? loaded() : loading();
// }
export default Comment