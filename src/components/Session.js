import React from 'react'

let str = (`User${Date.now()}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`)

const Session = () => {
    const setData = () => {
        let sessionObject = {username: str}
        sessionStorage.setItem('user data', JSON.stringify(sessionObject))
    }

    const getData = () => {
        let sessionData = sessionStorage.getItem('user data')
        sessionData = JSON.parse(sessionData);
        console.log(sessionData.username)
    }
    setData();
    getData(); 
}

export default Session