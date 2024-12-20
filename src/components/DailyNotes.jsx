import React from 'react'
import Sidebar from "./Side"
import Notes from './Notes'
import "./DailyNotes.css"
function DailyNotes() {
  return (
    <div>
      <Sidebar>
        <div className="main">
        <h1 className='text-3xl font-bold mb-8  'style={{ color: '#9C74FA',fontSize:'28px'  }}> Daily Notes
        </h1>
        
          <Notes/>
        </div>
      </Sidebar>
      
    </div>
  )
}

export default DailyNotes