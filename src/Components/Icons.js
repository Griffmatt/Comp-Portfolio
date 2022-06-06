import React from 'react'
import resume from '../Resume.pdf'

function Icons() {

    let icons = [
        {
            name:"Projects",
            image:"/Images/file.png",
            link:""
        
        },
        {
            name:"Resume",
            image:"/Images/document.png",
            link: resume
        
        },
        {
            name:"LinkedIn",
            image:"/Images/linkedin.png",
            link:"https://www.linkedin.com/in/griffin-matthews/"
        
        },
        {
            name:"GitHub",
            image:"/Images/github-logo.png",
            link:"https://github.com/Griffmatt"
        
        },
    ]

  return (
    <div className="icons">
        {icons.map(icon=>{
            return(
                <a href={icon.link} target="_blank" rel="noreferrer" key={icon.name}>
                    <div className="icon">
                        <img src={icon.image} alt={icon.name}/>
                        <p>{icon.name}</p>
                    </div>
                </a>
            )
        })}
    </div>
  )
}

export default Icons