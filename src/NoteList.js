import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        { Object.keys(props.notes).map((noteId) => {
          return <Note note={props.notes[noteId]} toggleCurrent={props.toggleCurrent} key={noteId} />
        }) }
      </ul>
    </div>
  )
}

export default NoteList
