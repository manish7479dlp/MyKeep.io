import React , { useState }from 'react'
import './inputContent.css'
         

// this is a component
const InputContent  = (props) =>{

    const [Data, setData] = useState({
        title : "",
        content : "",
    });


    // input onChange function...

const inputData = (event) =>{

    const {name , value} = event.target;
        
        setData((preData) =>{
            return(
                 {
                     ...preData,
                     [name] : value
                 }
            )    
       })

        console.log(Data);
    }


    function addNote() {
       props.onSelect(Data);
       setData(()=>{
           return {
               title : "",
               content : ""
           }
       })
    }

   return (
       <>
           <div className='container'>
              
                   <div>
                        <input className ='title' name='title' value={Data.title} type="text" placeholder='Title' onChange={inputData} />
                        <br/>
                        <textarea className = 'content' name="content" value={Data.content}  onChange={inputData} placeholder='Content' />
                        <div className='btn_div'>
                        <button onClick={addNote} > + </button>
                        </div>
                   </div>
              
           </div>
            

       </>
   )
}

export default InputContent;