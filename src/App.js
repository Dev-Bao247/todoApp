import { useEffect, useState } from "react";
function App(){
  const [values, setValues]=useState('')
  const [arrs, setArrs]=useState([])
  const [edit,setEdit]=useState(0)
  const [test,setTest]=useState('')

  const handelAdd=()=>{
    if(values===""){
     alert("Bạn hãy nhập CV")
    }else{
      setArrs((pre)=>{
        const newJobs=[...pre,
          {id:Math.floor(Math.random()*100000),title:values}]
        return newJobs;
      })
      setValues("")
    }
  }
  
  const handelEdit=(id)=>{
    const editElem=arrs.find((elem)=>elem.id===id)
    setEdit(id)
    setValues(editElem.title)
  }
  const handelUpdate=()=>{
    if(edit){
      const textElem=arrs.find((arr)=>arr.id===edit)
      const updateText=arrs.map((arr)=>{
      return((arr.id===textElem.id )  
        ?(arr={id:textElem.id, title:test})
        :(arr={id:arr.id, title:arr.title}))
      })
      setArrs(updateText)
      setEdit(0)
      setValues("")
      return;
    }
  }

 
  return(
   <div className="wraper">
      <h1 className="name">To-Do List</h1>
      <div  className="wraper-handel">

        <input placeholder="Your Job ...." value={values} onChange={(e)=>{setValues(e.target.value) setTest(e.target.value)}}/>
        <button className="btn-add" onClick={handelAdd} >ADD</button>
        <button className="btn-add" onClick={handelUpdate} >UpDate</button>

        <ul className="list-value">
          {arrs.map((arr,index)=>(
          <li className="list-value__li" key={index} >
              <span>{index+1}</span>
              {arr.title}

              <div>
              <button onClick={()=>{
                const newL=arrs.filter((item)=>(item.id != arr.id))
                setArrs(newL) 
              }} className="btn-remove">X</button>
              <button onClick={()=>handelEdit(arr.id)}>edit </button>
               </div>
         </li>)
          )}</ul>
      </div>
   </div>
   
   )
}
export default App
