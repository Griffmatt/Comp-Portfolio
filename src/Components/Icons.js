import React from 'react'

function Icons() {

    let icons = [
        {
            name:"Projects",
            image:"/Images/file.png"
        
        },
        {
            name:"Resume",
            image:"/Images/document.png"
        
        },
        {
            name:"LinkedIn",
            image:"/Images/linkedin.png"
        
        },
        {
            name:"GitHub",
            image:"/Images/github-logo.png"
        
        },
    ]

  return (
    <div className="icons">
        {icons.map(icon=>{
            return(
                <div className="icon">
                    <img src={icon.image}/>
                    <p>{icon.name}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Icons