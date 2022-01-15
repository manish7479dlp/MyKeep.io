import React from 'react'
import './inputContent.css'




const Note = (props) =>{
    const addListener = () =>{
         props.removeNote(props.id);
    }
    return(
         <>
            
            <div className="noteContainer">
                <h1 >{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={addListener}>X</button>
            </div>
             
         </>
    )
}

export default  Note;