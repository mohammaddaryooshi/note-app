export default class NotesView {
    constructor(root, handlers) {
      this.root = root;
      const { onNoteAdd, onNoteEdit, onNoteSelect, onNoteDelete } = handlers;
      this.onNoteAdd = onNoteAdd;
      this.onNoteEdit = onNoteEdit;
      this.onNoteSelect = onNoteSelect;
      this.onNoteDelete = onNoteDelete;
        this.root.innerHTML = `
               
                <div class="sidebar">
                    <div class="title-box">
                        <p class="app-title">NOTE APP</p>
                    </div>
                    <div class="notelist-box">
                        <ul class="notelist-ul">
                           
                        </ul>
                    </div>
                    <div class="button-box">
                        <button class="btn btn-success addbtn">ADD NOTE</button>
                    </div>
                </div>
                <div class="maincontent">
                    <div class="main-top-bar">
                        <input type="text" class="inputtitle" />
                    </div>
                    <div class="main-bottom">
                        <textarea class="inputbody"></textarea>
                    </div>
                </div>
           
        `;

        const addNoteBtn = this.root.querySelector(".addbtn");
        const inputTitle = this.root.querySelector(".inputtitle");
        const inputbody = this.root.querySelector(".inputbody");

        addNoteBtn.addEventListener("click",()=>{
            this.onNoteAdd();
        });

        [inputTitle,inputbody].forEach((inputField)=>{
            inputField.addEventListener("blur",()=>{
                const newBody = inputbody.value.trim();
                const newTitle = inputTitle.value.trim();
                this.onNoteEdit(newTitle,newBody);
            })
        });
        this.updateNotePreviewVisibility(false);
    }

    _creatListItemHtml(id,title,body,updated){
        const MAX_BODY_LENGTH = 50;

        return `
            <li class="note-list-item" data-note-id="${id}" >
                <div class = "item-header">
                <p class="note-title">${title}</p>
                <span class="notes-list-trash" data-note-id="${id}">
                <i class="far fa-trash-alt"></i>
                </span>
                </div>
                <p class="note-description">
                ${body.substring(0,MAX_BODY_LENGTH)}
                ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </p>
                <p class="note-date">
                    ${new Date(updated).toLocaleString(undefined,{
                        dateStyle:"full",
                        timeStyle:"short"
                    })}
                </p>
            </li>
        `;
    }

    updateNoteList(notes){
        const notesContainer = this.root.querySelector(".notelist-ul");
      
        notesContainer.innerHTML = "";
        
        let notelist = ""
        for(const note of notes){
            const {id,title,body,updated} = note;
            const html = this._creatListItemHtml(id,title,body,updated);
            notelist += html;
        }

        notesContainer.innerHTML = notelist;
        notesContainer.querySelectorAll(".note-list-item").forEach((noteItem)=>{
            noteItem.addEventListener("click",()=>{
                this.onNoteSelect(noteItem.dataset.noteId)
            });
        });

        notesContainer
        .querySelectorAll(".notes-list-trash")
        .forEach((noteItem) => {
          noteItem.addEventListener("click", (e) => {
            e.stopPropagation();
            this.onNoteDelete(noteItem.dataset.noteId);
          });
        });
    }

    updateActiveNote(note) {
        this.root.querySelector(".inputtitle").value = note.title;
        this.root.querySelector(".inputbody").value = note.body;
    
        //  add selected class :
        this.root.querySelectorAll(".note-list-item").forEach((item) => {
          item.classList.remove("notes-list-item-selected");
        });
    
        this.root
          .querySelector(`.note-list-item[data-note-id="${note.id}"]`)
          .classList.add("notes-list-item-selected");
      }
      updateNotePreviewVisibility(visible) {
        this.root.querySelector(".maincontent").style.visibility = visible
          ? "visible"
          : "hidden";
      }
  
}