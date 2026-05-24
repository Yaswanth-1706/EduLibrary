import React, { useEffect, useState } from "react"
import axios from "axios"
import "./AdminDisplay.css"

const AdminDisplay = () => {
    const [data,setData] = useState([])
  
     useEffect(()=>{

    axios.get("http://localhost:2000/files/getFile",{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res=>{
      setData(res.data)
    })
    .catch(err=>{
      console.log(err)
    })

  },[data])
  const deletehandler=async(deleteItem)=>{
    try{
        const del=await axios.delete(`http://localhost:2000/files/deleteFile/${deleteItem}`)
        alert("deleted successfully")
        console.log("delted succeessfully")
    }
    catch(err){
      alert("failed to delete")
      console.log(err)
    }
  }
  return (
    <div>
      {
      data.map((item)=>(

        <div className="card" key={item._id}>

          <h2>{item.name}</h2>
          <p>{item.discription}</p>

          {item.image && item.image.endsWith(".pdf") ? (
          <div>
            <a
              href={item.image}
              target="_blank"
              rel="noreferrer"
              className="filelink"
            >
              View File
            </a>
            
             <button onClick={()=>{deletehandler(item._id)}}> Remove </button>
             </div>

          ) : (
           <div>
            <img
              src={item.image}
              alt="admin"
              className="profile-img"
            />
           
            <button onClick={()=>{deletehandler(item._id)}}>Remove</button>
            </div>
          )
         
          }
         
        </div>
       
      )
      
      )}
      
    </div>
  )
}

export default AdminDisplay
