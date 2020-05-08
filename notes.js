const fs = require('fs')
const chalk = require( 'chalk' )


const addNote = function( title, body ) {
  const notes = loadNotes()

  //check to see if title was already used:
  // const duplicateNotes = notes.filter(note =>{
  //   return note.title === title
  // })

  const duplicateNote = notes.find( note => note.title === title )

  if (!duplicateNote) {
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

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)

  if(note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }else {
    console.log(chalk.red.inverse('Note not found!'))
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

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.inverse('Your notes'))

  notes.forEach(note => {
    console.log(note.title)
  }) 

}

 



module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}