import React ,{useState}from 'react'
import axios from 'axios'

const AddFile = () => {
  const [data,setData]=useState({
        name:"",
        discription:""
    })
     const [file,setFile] = useState(null)
     const handleSubmit=async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("name",data.name)
         formData.append("image",file)
         formData.append("discription",data.discription)
         try{

    const response = await axios.post(
      "http://localhost:2000/files/addFile",
      formData
    )
    alert("file uploded successfully")
    console.log(response.data)

  }
  catch(err){
    alert("failed to upload file")
    console.log(err)
  }

     }
     const changehandler=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
     }
     const handleFile = (e)=>{
  setFile(e.target.files[0])
}
  return (
    <div className="add-file-container">
      <form onSubmit={handleSubmit} className="upload-form">
        <h2>Upload New File</h2>
        
        <label>File Name</label>
        <input type="text" name="name" placeholder="Enter file name..." onChange={changehandler} required />
        
        <label>Select Image/PDF</label>
        <input type="file" name="image" className="file-input" onChange={handleFile} required />
        
        <label>Description</label>
        <textarea name="discription" placeholder="Write a short description..." onChange={changehandler}></textarea>
        
        <button type="submit" className="submit-btn">Upload to Library</button>
      </form>
    </div>
  )
}

export default AddFile
