import { type } from '@testing-library/user-event/dist/type'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddNewCourtBox() {
    const navigate = useNavigate()
    const [courtData, setCourtData ] = useState({ 
        courtName : '',
        location : '',
        address : '' ,
        mobileNumber : '',
        description : '' ,
     })
     const[selectedImage, setSelectedImage] = useState('')
     const[courtPic, setCourtPic] = useState('')

     const handleChange = (e) => {
        setCourtData({...courtData ,[e.target.name] : e.target.value })
     }
     const imageChange = (e) => {
         // Set the state variable 'CourtPic' with the selected file
         setCourtPic(e.target.files[0])
 
        // Check if a file is selected; if yes, set 'selectedImage' with its URL using 'URL.createObjectURL'
        // If no file is selected, set 'selectedImage' to null
         e.target.files[0] ? setSelectedImage(URL.createObjectURL(e.target.files[0])) : setSelectedImage(null)
     }

     const createCourt = () => {
         let fileData = new FormData()
         fileData.append('image', courtPic)
         axios.post(`${process.env.REACT_APP_BE_URL}/admin/createCourt`, fileData, {params : courtData, headers : {"Content-type" : 'multipart/form-data'}} )
         .then((res) => {

            toast.success("Court Created Successfully!",{
                position: "top-right",
                theme:"colored",
                draggable: "true"
              })

            navigate('/home')
         })
         .catch((err) => {
            console.log(err);
         })
     }
  return (
   <>
   <div className='p-2 my-4  mx-auto  w-50  d-flex flex-column   justify-content-center align-content-center border border-2  border-success '>
        <h2>Add New Court</h2>

        <label htmlFor="courtname">Court Name</label>
        <input type="text" id='courtname' name="courtName" value={courtData.courtName} onChange={handleChange} />

        <label htmlFor="location">Location</label>
        <input type='text' id='location' name="location" value={courtData.location} onChange={handleChange}/>

        <label htmlFor="address">Address</label>
        <input type='text' id='address' name="address" value={courtData.address} onChange={handleChange}/>

        <label htmlFor="mobilenumber">Mobile Number</label>
        <input type="number" name="mobileNumber" id="mobilenumber"  value={courtData.mobileNumber}  onChange={handleChange}/>

        <label htmlFor="description">Description</label>
        <textarea id='description' name="description" value={courtData.description} onChange={handleChange}></textarea>

        <label htmlFor="">Court Images</label>
        <input type="file" name="" id="" onChange={imageChange} />
        { selectedImage && <img src={selectedImage} alt="" width={100} height={100} />}

        <button className='mt-3 btn btn-success w-25 mx-auto  ' onClick={createCourt}  >Create</button>
   </div>
   </>
  )
}

export default AddNewCourtBox