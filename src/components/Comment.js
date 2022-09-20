import React from 'react';
import {useState} from 'react'
import Collapsible from 'react-collapsible'

const Comment = () => {
 
return (
    <div className="comment">
    <Collapsible className="comment-title" trigger="Comments">
    <p className="collapsible">this sucks man</p>
    <p className="collapsible">yeah seriously</p>
    <p className="collapsible">based</p>
    </Collapsible>
    </div>
)}

export default Comment