import React, {useState} from 'react'

function Taskbar() {


    let [time, setTime] = useState(new Date().toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'}))


    const updateClock = () => {
        setTime(new Date().toLocaleTimeString([], {timeStyle: 'short'}))
    }

    setInterval(updateClock, 10)

  return (
    <div className="taskBar">
        <div className="taskBarItems">
            <div className="taskBarItem">
                <div className="taskBarStart">
                    <img src="Images/logo.png" alt="Windows Logo"/>
                    <p>Start</p>
                </div>
                <div className="divider"/>
                <ul>
                    <li><a href="https://www.linkedin.com/in/griffin-matthews/" target="_blank"><img src="Images/linkedin.png" alt="Windows Logo"/></a></li>
                    <li><a href="https://github.com/Griffmatt" target="_blank"><img src="Images/github-logo.png" alt="Windows Logo"/></a></li>
                    <li><a><img src="Images/help-book.png" alt="Windows Logo"/></a></li>
                </ul>
                <div className="divider"/>
                <div className="notesBar">
                    <img src="/Images/notepad.png" alt="Note Pad"/>
                    <p>Notes</p>
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
  )
}

export default Taskbar