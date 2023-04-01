import { Box, Divider, Paper, TextField, Typography, useStepContext  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BsButton from '../comp/BsButton'
import BsInp from '../comp/BsInp'
import { useNavigate } from 'react-router-dom'
import { getDataForAdmin, Getregistra } from '../Firebase/FireBaseMeths'
import DatePick from '../comp/DatePicker'
// import {LoginUser} from '../FireBase/BaseFBMe'
// import BsSnak from '../comp/BsSnake'


const StudentForm = () => {
    let arrQualifi = ["Qualification","School","Collage","University","Masters"]
    let arrCourse = ["Courses","Web development","Fulluter","Mobile Application","Web designer"]
    let arrCity = ["City","Lahore","Peshawar","Quetta","Karachi","Islamabad"]
    let arrCountry = ["Country","Germanay","Pakistan","Canada","England","Dubai"]
    let arrsection = [ "Section","Morning", "Evening"]

  const [loader,setloader] = useState(false)
  const [model,setModel] = useState({})


  const subForm = () =>{
    setloader(true)
    getDataForAdmin("StudentList",model)
    .then( (succ) =>{
      setModel({})
        setloader(false)
        console.log(succ)
    })
    .catch( (err) =>{
        setloader(false)
        console.log(err)
    })
  }


  return (
    <div>
      {/* <BsSnak open={open}  abc={(e) => setOpen(e)} mess={message} /> */}

     
            <Box sx={{width:{md:'350px',sm:'250px',sm:'100%'}}} className='container m-auto  mt-5 '>
      {/* <Paper elevation={8}> */}
        <Box  className='shadow px-3'>

      <Typography variant='h4' className=' text-center pt-lg-3 pt-xs-5'>Student</Typography>
        <Box sx={{display:'flex',justifyContent:'center'}} className=''>
       <Box>
     <Box className=' my-3 px-5 '>

        <BsInp val={model.name || ""}  label='Name'  onChange={(e) => setModel({...model,name:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp  val={model.fatherName || ""} label='Father Name'  onChange={(e) => setModel({...model,fatherName:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp   label='Contact' val={model.contact || ""}  onChange={(e) => setModel({...model,contact:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp   label='CNIC' val={model.cnic || ""}  onChange={(e) => setModel({...model,cnic:e.target.value})} />
        </Box>

        <Box className=' my-3 px-5 '>
        <select  className=' px-5 py-2'   onChange={(e) => setModel({...model,qualification:e.target.value})} name="" id="">
            {arrQualifi.map( (x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
                )
            })}
        </select>
        
        </Box>
        <Box className=' my-3 px-5 '>
        <select  className='px-4 py-2' onChange={(e) => setModel({...model,course:e.target.value})} name="" id="">
            {arrCourse.map( (x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
                )
            })}
        </select>

        </Box>
        <Box className=' my-3 px-5 '>

        <TextField    defaultValue="Jawan Pakistan" disabled label={"Institute"} onChange={(e) => setModel({...model,institute:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>
      <select  className=' px-5 py-2' onChange={(e) => setModel({...model,section:e.target.value})} name="" id="">
            {arrsection.map( (x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
                )
            })}
        </select>

</Box>

<Box className=' my-3 px-5 '>

<BsInp val={model.email || ""}  label='Email'  onChange={(e) => setModel({...model,email:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp val={model.passwrod || ""}   label='Password'  onChange={(e) => setModel({...model,passwrod:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>
<select className='px-4 py-2 w-100' onChange={(e) => setModel({...model,city:e.target.value})} name="" id="">
            {arrCity.map( (x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
                )
            })}
        </select>

</Box>
<Box className=' my-3 px-5 '>
<select className='px-4 py-2 w-100' onChange={(e) => setModel({...model,country:e.target.value})} name="" id="">
            {arrCountry.map( (x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
                )
            })}
        </select>

</Box>
<Box className=' my-3 px-5 '>
            <DatePick  onChange={(e) => setModel({...model,date:e.$d}) }/>
</Box>

<Box className=' my-3 px-5 '>
            <label  htmlFor="abc1">
    <input type="radio" onClick={(e) => setModel({...model,gender:e.target.value})} name="same" value={"male"} id="abc1" /> Male
            </label>
            <label  htmlFor="abc2">
<input type="radio" name="same" onClick={(e) => setModel({...model,gender:e.target.value})} value={"female"} id="abc2" /> Female 
            </label>
            <label htmlFor="abc3">
<input type="radio" name="same" onClick={(e) =>setModel({...model,gender:e.target.value})} value={"custom"} id="abc3" /> Custom
            </label>
</Box>

<Box className=' my-3 px-5 '>

<BsInp val={model.address || ""}  label='Address'  onChange={(e) => setModel({...model,address:e.target.value})} />
</Box>

        <Divider light />
        <Box sx={{display:'flex',justifyContent:'center'}}  className='  py-3'>
          <BsButton loading={loader} onClick={subForm} label='Submit'/>
        </Box>
        
           </Box>     
        </Box>

        </Box>

    </Box>
    
    </div>
  )
}

export default StudentForm
