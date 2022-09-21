import React, { useEffect } from 'react';
import {useState} from 'react'
import Collapsible from 'react-collapsible'

import NewComment from './NewComment';

const Comment = (props) => {
    

    return (
    
        <section className="collapsible">
            <Collapsible className="comment-title" trigger="Comments">
            {props.props.map((comment, index)=>
            <div className="comment">
            <p>{comment.post}</p>
            </div>
            )}
            </Collapsible>
        </section>
)}

export default Comment