import React from 'react'

const sectionFlex= {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5px"
}

const pStyle={
    backgroundColor: "black",
    color: "white"
}

const About = () => {
  return (
    <section style={{...sectionFlex}}>
        <div>
            <p style={{...pStyle}}>This site concept was a dream had by its founder, Jack Forrester. He wanted a way to enable people to share music, anonymously, yet collaborate on much bigger works. He believed, that through music, the world can unite as one. That is the leading focus of this site. We wanted a way for people from all around the world to share their ideas and make something beautiful. Since its creation, it has branched out to be more than just music sharing and it’s become a simple audio sharing site: simple yet effective. Now that we have entered our 20th year of hosting this service, we couldn’t be more proud of what we have created. We hope you can enjoy Anonimusic</p>
        </div>
        <div>
            <img src='https://i.imgur.com/ODRAMun.png' alt="Jack Forrester"></img>
        </div>
    </section>
  )
}

export default About