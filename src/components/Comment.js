import React from 'react';
import Collapsible from 'react-collapsible';
import CommentTime from './CommentTime';

import ColorMe from './ColorMe'

const Comment = (props) => {

const commentsSorted = props.props.reverse();

    return (
        <section className="collapsible">
            <Collapsible 
                className="comment-title" 
                trigger="View Comments"
                triggerStyle={{
                    backgroundColor: 'rgba(55, 55, 55, 0.2)', 
                    borderRadius: "10px",
                    fontSize: "16px",
                    border: "10px solid rgba(255, 255, 255, 0)",
                    marginBottom: "20px",
                    fontWeight: "bold",
                }}
            >   
                {commentsSorted.map((comment, index)=>
                    <span className="comment" key={index}>
                        <div 
                            className='commentUser'
                            style={ColorMe(comment.user)}
                        
                        >{ comment.user }</div>
                        <div className='commentContent'>{ comment.post }</div>
                        <div className="commentTimestamp">{ CommentTime(new Date(comment.timestamp))}</div>
                        
                    </span>
                )}
            </Collapsible>
        </section>
)}

export default Comment