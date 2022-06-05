import React, {useState} from 'react'

function Taskbar() {

    let [time, setTime] = useState(new Date().toLocaleTimeString())

    const updateClock = () => {
        setTime(new Date().toLocaleTimeString())
    }

    setInterval(updateClock, 1)

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
                    <li><a><img src="Images/linkedin.png" alt="Windows Logo"/></a></li>
                    <li><a><img src="Images/github-logo.png" alt="Windows Logo"/></a></li>
                    <li><a><img src="Images/help-book.png" alt="Windows Logo"/></a></li>
                </ul>
                <div className="divider"/>
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