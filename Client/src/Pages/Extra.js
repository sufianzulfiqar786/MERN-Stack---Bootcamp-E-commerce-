import React, { useState } from 'react'

const Extra = () => {

    const [file, setfile] = useState({})

 const changeHandler = (e)=>{
    console.log("e.target.file", e.target.files[0])
    setfile(e.target.files[0])
}


const fileSubmit = ()=>{
console.log(file)
}

  return (
    <>

     <input type="file"  onChange={changeHandler}/>

     <button onClick={fileSubmit} >Submit</button>

    </>
  )
}

export default Extra
