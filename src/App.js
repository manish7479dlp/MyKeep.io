import React  , {useState} from 'react'
import Heading from './KeepComponent/Heading'
import InputContent from './KeepComponent/InputContent'
import Note from './KeepComponent/Note'

const App = () =>{
  const [Item , nItem] = useState([]);
  
  const addNote = (Data) =>{
    nItem((preData) =>{
      return [...preData , Data];
    }) 

    console.log(Data );


  }
  
  return (
    <>
      <Heading/>
      <InputContent onSelect = {addNote}/>

     { Item.map((val , idx) =>{
        return  (<Note title = {val.title} key = {idx} content = {val.content} />)
      })}

  </>
  )
}

export default App;