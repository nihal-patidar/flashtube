import React, { useState } from 'react'
import axios from 'axios'
import NavBar from './component/Navbar'

const Example = () => {

    const [email,setEmail] = useState('')
    const [data,setData] = useState(null)
    const [msg,setMsg] = useState("")


    const submit = () =>{
        axios.get(`http://localhost:5001/${email}`).then(res=>{
            console.log(res.data)
            setData(res.data)
        })
    }

    const deteleUser = () =>{
      axios.delete(`http://localhost:5001/${email}`).then(res=>{
          console.log(res.data)
          setMsg("user deleted");
      })
  }

  return (
    <>
      <NavBar />
    <div>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick={submit}>Get user data</button>
      <button onClick={deteleUser}>delete user</button>

      <div>
        <div>{data?.fname}</div>
        <div>{data?.lname}</div>
        <div>{msg}</div>
      </div>
    </div>
    </>
  )
}

export default Example ;
