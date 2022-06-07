import React, {useState} from 'react'

import {PROJECTS} from "../Projects/projects"


function Projects() {

    const [leftX, setLeftX] = useState()
    const [topY, setTopY] = useState()
    const [isDragging, setIsDragging] = useState(false)
    const [styles, setStyles] = useState({});

    const dragStart = (e) => {
        setLeftX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setTopY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setIsDragging(true);
      };
      
      const drag = (e) => {
          if(isDragging){
            let left = e.screenX - leftX;
            let top = e.screenY - topY;
            setStyles({
                left: left,
                top: top
            });
        }
      };
   

  return (
    <div className="projects" onPointerDown={dragStart} onPointerMove={drag} onPointerUp={()=>{setIsDragging(false)}} onPointerLeave={()=>{setIsDragging(false)}} style={styles}>
        <div className="topBar">
            <div>
                <img src="/Images/file.png" alt="File"/>
                Projects
            </div>
            <div className="closeButton">X</div>
        </div>
        <div className="textArea">
            {PROJECTS.map(project =>{
                return(
                    <div key={project.title}>
                        <h2>{project.title}</h2>
                        <a href={project.site} target="_blank" rel="noreferrer">
                            <img src={project.image} alt={project.title}/>
                        </a>
                        <h3>{project.tools}</h3>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects