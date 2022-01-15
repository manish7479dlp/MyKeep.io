import React  , {useState} from 'react'
import Heading from './KeepComponent/Heading'
import InputContent from './KeepComponent/InputContent'
import Note from './KeepComponent/Note'

const App = () =>{
  const [Item , nItem] = useState([]);
  
  const addNote = (Data) =>{
    
    if((Data.title === "" ) || (Data.content === "")) {
      alert("Empty field not allowed..");
    } else {
      nItem((preData) =>{
        return [...preData , Data];
      }) 
    }

  }

  const deleteNote = (target) =>{
    
    nItem(() =>{
      return (
        Item.filter((val , idx) =>{
          return target != idx;
        })
      )
    })

  }
  
  return (
    <>
      <Heading/>
      <InputContent onSelect = {addNote}/>

     { Item.map((val , idx) =>{
        return  (<Note title = {val.title} key = {idx} id = {idx} content = {val.content} removeNote = {deleteNote}/>)})}
     

  </>
  )
}

export default App;