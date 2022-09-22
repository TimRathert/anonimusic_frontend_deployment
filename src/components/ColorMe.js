import React from 'react'

const ColorMe = (props) => {
  let userArray = Array.from(props.props)
  for(let i = userArray.length-1; i<userArray.length;i--){
    let r = `${parseInt(userArray[i]+userArray[i-1]+userArray[i-2])}`
    let b = `${parseInt(userArray[i-3]+userArray[i-4]+userArray[i-5])}`
    let g = `${parseInt(userArray[i-6]+userArray[i-7]+userArray[i-8])}`
    
    if(r >255 && r <510){
        r = r - 255
    }
    else if(r >510 && r <=765){
        r = r - 510
    }
    else if(r >765 && r <=999){
        r = r - 765
    }

    if(b >255 && b <510){
        b = b - 255
    }
    else if(b >510 && b <=765){
        b = b - 510
    }
    else if(b >765 && b <=999){
        b = b - 765
    }

    if(g >255 && g <510){
        g = g - 255
    }
    else if(g >510 && g <=765){
        g = g - 510
    }
    else if(g >765 && g <=999){
        g = g - 765
    }
    
    let colors = [parseInt(r),parseInt(b),parseInt(g)]
    // console.log(colors)
    return (
        <>
        <p style={{color:`rgb(${colors[0]},${colors[1]},${colors[2]})`}}>Hello</p>
        </>
    )
  }
  
}

export default ColorMe