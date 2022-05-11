export default class NotesAPI {
    static getAllNotes() {
      const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
      return savedNotes.sort((a, b) => {
        return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
      });
    }
  
    static saveNote(noteToSave) {
      // 1. existed or 2. not
      const notes = NotesAPI.getAllNotes();
  
      const existedNote = notes.find((n) => n.id == noteToSave.id);
  
      if (existedNote) {
        existedNote.title = noteToSave.title;
        existedNote.body = noteToSave.body;
        existedNote.updated = new Date().toISOString();
      } else {
        noteToSave.id = new Date().getTime();
        noteToSave.updated = new Date().toISOString();
        notes.push(noteToSave);
      }
      localStorage.setItem("notes-app", JSON.stringify(notes));
    }
  
    static deleteNote(id) {
      const notes = NotesAPI.getAllNotes();
      const filteredNotes = notes.filter((n) => n.id != id);
      localStorage.setItem("notes-app", JSON.stringify(filteredNotes));
    }
  }
  