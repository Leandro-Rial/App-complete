const notesCtrl = {};

const Note = require('../models/Note');

// NEW NOTES
notesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new-note')
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;

    const newNote = new Note({ title, description })

    await newNote.save();

    req.flash('success_msg', 'Note Added Successfully');

    res.redirect('/notes')
}


// GET ALL NOTES
notesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find().lean();

    res.render('notes/all-notes', { notes });
}


// EDIT NOTES
notesCtrl.renderEditForm = async (req, res) => {
    const id = req.params.id;
    
    const note = await Note.findById(id).lean();

    res.render('notes/edit-note', { note });
}

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;

    const id = req.params.id;
    
    req.flash('success_msg', 'Note Update Successfuly');

    await Note.findByIdAndUpdate(id, { title, description });

    res.redirect('/notes');
}


// DELETE NOTES
notesCtrl.deleteNote = async (req, res) => {
    const id = req.params.id;
    
    await Note.findByIdAndDelete(id);

    req.flash('success_msg', 'Note Deleted Successfuly');

    res.redirect('/notes')
}

module.exports = notesCtrl