import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'https://i.imgur.com/IXUYGjF.png',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.imgur.com/su7HYwJ.png',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.imgur.com/6a6xTLY.png',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow