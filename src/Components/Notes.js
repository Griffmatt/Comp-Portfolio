import React, {useState, useEffect} from 'react'


function Notes() {
    const [hidden, setHidden] = useState(true)

    const [leftX, setLeftX] = useState()
    const [topY, setTopY] = useState()
    const [isDragging, setIsDragging] = useState(false)
    const [styles, setStyles] = useState({});


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
    <div className="notes" onPointerDown={dragStart} onPointerMove={drag} onPointerUp={()=>{setIsDragging(false)}} onPointerLeave={()=>{setIsDragging(false)}} style={styles}>
        <div className="topBar">
            <div>
                <img src="/Images/notepad.png" alt="Note Pad" className="topBarImg"/>
                Notes
            </div>
            <div className="closeButton">X</div>
        </div>
        <div className="textArea">
            <p>
                Hello, my name is Griffin Matthews. <br/>
                I am a Front End Developer <br/>
                I have experience with React, HTML, CSS, SASS, Adobe Photoshop, NodeJS <span hidden={hidden}>|</span>
            </p>
        </div>
    </div>
  )
}

export default Notes