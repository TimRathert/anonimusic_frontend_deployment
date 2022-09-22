import React from 'react'

let str = (`User${Date.now()}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`)


const Session = () => {
    const setData = () => {
        let sessionObject = {username: str}
        sessionStorage.setItem('userdata', JSON.stringify(sessionObject))
    }

    const getData = () => {
        let sessionData = sessionStorage.getItem('userdata')
        sessionData = JSON.parse(sessionData);
    }
    setData();
    getData(); 
}

export default Session