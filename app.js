
const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

// Create add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNote( argv.title, argv.body )
  }
})

yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function(){
    notes.listNotes();
  }
})

yargs.command({
  command: 'read',
  describe: 'Read all the notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv){
    notes.readNote(argv.title)
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title)
    
  }
})

yargs.parse()


