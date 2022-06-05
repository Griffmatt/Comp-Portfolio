import React from 'react'

function Taskbar() {
  return (
    <div className="taskBar">
        <div className="taskBarItems">
            <div className="taskBarItem">
                <div className="taskBarStart">
                    <p>Start</p>
                </div>
                <div className="divider"/>
            </div>
            <div className="taskBarItem">
                <div className="divider"/>
                <div className="taskBarTime">
                    <p>Time</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Taskbar