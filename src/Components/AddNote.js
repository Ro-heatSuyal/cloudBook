import React, { useState,useContext } from 'react'
import noteContext from '../Context/Notes/noteContext'

const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
      addNote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""})
      props.showAlert("Note Added Successfully","success")
    }
    const onChange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value}) //values in note will be there and those properties which is write after that will be added or overwrite..name chnge will be equal to its value
    }


  return (
    <div className="container my-3">
    <h1>Add a note</h1> 
    <form className='my-3'>
         <div className="mb-3">
             <label htmlFor="title" className="form-label">Title</label>
             <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title}  minLength={4} required/>
             
         </div>
         <div className="mb-3">
             <label htmlFor="description" className="form-label" >Description</label>
             <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description}  minLength={4} required/>
         </div>
         <div className="mb-3">
             <label htmlFor="tag" className="form-label" >tag</label>
             <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}  value={ note.tag} minLength={4} required/>
         </div>
         
         <button disabled={note.title.length<4 || note.description.length<4 || note.tag.length<3} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
    </form>
    </div>
  )
}

export default AddNote
