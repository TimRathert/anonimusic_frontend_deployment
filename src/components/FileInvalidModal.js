import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from'react-bootstrap/Button';

function FileInvalidModal(props) {
    //state managed by parent component NewPost.js
    const handleClose = () => props.setShowModal(false);

    return(
    <>
        <Modal show={props.showModal} onHide={handleClose}>
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>File too large</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>It's 2022. Make the quality worse or say less.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    </>
    )
}

export default FileInvalidModal