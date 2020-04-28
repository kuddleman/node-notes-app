const fs = require('fs')
const chalk = require( 'chalk' )

const getNotes = () => {
  return "here are my gorgeous notes!"
}

const addNote = function( title, body ) {
  const notes = loadNotes()

  //check to see if title was already used:
  const duplicateNotes = notes.filter(note =>{
    return note.title === title
  })

  if (duplicateNotes.length === 0 ) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes( notes )
    
    console.log('New note added')
  } else {
    console.log('Note title taken!')
  }


  
}

//this function saves the notes
const saveNotes = function ( notes ) {
  const dataJSON = JSON.stringify( notes )
  fs.writeFileSync( 'notes.json', dataJSON )
}

//helper function to load all notes:
const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync( 'notes.json' )
    const dataJSON = dataBuffer.toString()
    return JSON.parse( dataJSON )

  } catch( e ) {
    return []
  } 
}

const removeNote = function( title ) {
   //Load existing notes:
   const notes = loadNotes()

     //use array filter method to remove the matching  note (if any)
   const notesToKeep = notes.filter(note => {
     return note.title !== title
   })
   //save notes array to json file
   saveNotes( notesToKeep )

   //add colorful background to console.log 
   if( notesToKeep.length < notes.length ) {
      const gnBkg = chalk.green.inverse
      console.log(gnBkg("Note Removed"))
   }else {
      const rdBkg = chalk.red.inverse
      console.log(rdBkg("No note found!"))
   }
   
 

   console.log( 'Remove this note:', title )
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}