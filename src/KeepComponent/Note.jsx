import React from 'react'
import './inputContent.css'


const Note = (props) =>{
    return(
         <>
            
            <div className="noteContainer">
                <h1 >{props.title}</h1>
                <p>{props.content}</p>
                <button>X</button>
            </div>
             
         </>
    )
}

export default  Note;