
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
    console.log('Listing all the notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'Read all the notes',
  handler: function(){
    console.log('Reading a note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function() {
    console.log('removing a note')
  }
})

yargs.parse()


