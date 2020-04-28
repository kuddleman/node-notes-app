const fs = require('fs')

const getNotes = () => {
  return "here are my gorgeous notes!"
}

const addNote = function( title, body ) {
  const notes = loadNotes()
}

//helper function to load all notes:
const loadNotes = function() {
  const dataBuffer = fs.readFileSync( 'notes.json' )
  const dataJSON = dataBuffer.toString()
  return JSON.parse( dataJSON )
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}