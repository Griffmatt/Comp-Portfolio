import {useState, useEffect} from 'react'

import {PROJECTS} from "./Projects/projects"
import {icons} from './Projects/icons'


import './CSS/Taskbar.css';
import './CSS/Icons.css';
import './CSS/Notes.css';
import './CSS/Projects.css';

function App() {
  const [hidden, setHidden] = useState(true)
  const [hideProjects, setHideProjects] = useState(false)
  const [hideNotes, setHideNotes] = useState(false)

  const [leftX, setLeftX] = useState()
  const [topY, setTopY] = useState()
  const [isDragging, setIsDragging] = useState(false)
  const [notesStyles, setNotesStyles] = useState({});
  const [projectsStyles, setProjectsStyles] = useState({});


  let [time, setTime] = useState(new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}))


    const updateClock = () => {
        setTime(new Date().toLocaleTimeString([], {timeStyle: 'short'}))
    }

    setInterval(updateClock, 10)

    useEffect(() =>{
      const interval = setInterval(() => {
          setHidden(!hidden)
      }, 600)

      return () => clearInterval(interval);
  }, [hidden])

  const dragStart = (e) => {
      setLeftX(e.screenX - e.currentTarget.getBoundingClientRect().left);
      setTopY(e.screenY - e.currentTarget.getBoundingClientRect().top);
      setIsDragging(true);
    };
    
    const dragNotes = (e) => {
        if(isDragging){
          let left = e.screenX - leftX;
          let top = e.screenY - topY;
          setNotesStyles({
              left: left,
              top: top
          });
      }
    };

    const dragProjects = (e) => {
      if(isDragging){
        let left = e.screenX - leftX;
        let top = e.screenY - topY;
        setProjectsStyles({
            left: left,
            top: top
        });
    }
  };

  return (
    <div className="App">
      <div className="icons">
        <div className="icon" onPointerDown={()=>setHideProjects(false)}>
            <img src="/Images/file.png" alt="Projects"/>
            <p>Projects</p>
          </div>
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
    <div className="notes" hidden={hideNotes} onPointerDown={dragStart} onPointerMove={dragNotes} onPointerUp={()=>{setIsDragging(false)}} onPointerLeave={()=>{setIsDragging(false)}} style={notesStyles}>
        <div className="topBar">
            <div>
                <img src="/Images/notepad.png" alt="Note Pad" className="topBarImg"/>
                Notes
            </div>
            <div className="closeButton" onPointerDown={()=>setHideNotes(true)}>X</div>
        </div>
        <div className="textArea">
            <p>
                Hello, my name is Griffin Matthews. <br/>
                I am a Front End Developer <br/>
                I have experience with React, HTML, CSS, SASS, Adobe Photoshop, NodeJS <span hidden={hidden}>|</span>
            </p>
        </div>
    </div>
    <div className="projects" hidden={hideProjects} onPointerDown={dragStart} onPointerMove={dragProjects} onPointerUp={()=>{setIsDragging(false)}} onPointerLeave={()=>{setIsDragging(false)}} style={projectsStyles}>
        <div className="topBar">
            <div>
                <img src="/Images/file.png" alt="File" className="topBarImg"/>
                Projects
            </div>
            <div className="closeButton" onPointerDown={()=>setHideProjects(true)}>X</div>
        </div>
        <div className="textArea">
            {PROJECTS.map(project =>{
                return(
                    <div>
                        <h2>{project.title}</h2>
                        <div key={project.title} className="projectContainer">
                            <a href={project.site} target="_blank" rel="noreferrer">
                                <img src={project.image} alt={project.title}/>
                            </a>
                            <div className="projectInfo">
                                <h3>{project.tools}</h3>
                                <p>{project.description}</p>
                                <a href={project.site} target="_blank" rel="noreferrer">
                                    <button>Live Site</button>
                                </a>
                                <a href={project.gitHub} target="_blank" rel="noreferrer">
                                    <button>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
      <div className="taskBar">
        <div className="taskBarItems">
            <div className="taskBarItem">
                <div className="taskBarStart">
                    <img src="Images/logo.png" alt="Windows Logo"/>
                    <p>Start</p>
                </div>
                <div className="divider"/>
                <ul>
                    <li><a href="https://www.linkedin.com/in/griffin-matthews/" target="_blank" rel="noreferrer"><img src="Images/linkedin.png" alt="Windows Logo"/></a></li>
                    <li><a href="https://github.com/Griffmatt" target="_blank" rel="noreferrer"><img src="Images/github-logo.png" alt="Windows Logo"/></a></li>
                    <li><a><img src="Images/help-book.png" alt="Windows Logo"/></a></li>
                </ul>
                <div className="divider"/>
                <div className="openBars">
                    <div className="openBar active" onPointerDown={()=>setHideNotes(!hideNotes)}>
                        <img src="/Images/notepad.png" alt="Note Pad"/>
                        <p>Notes</p>
                    </div>
                </div>
            </div>
            <div className="taskBarItem">
                <div className="divider"/>
                <div className="taskBarTime">
                    <p>{time}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
