import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import BsInp from '../comp/BsInp'
import BsButton from '../comp/BsButton'
import { getDataForAdmin } from '../Firebase/FireBaseMeths'

const CourseForm = () => {
    const [model,setModel] = useState({})
    const [loader,setLoader] = useState(false)
    const clkSubmit = () =>{
        setLoader(true)
        getDataForAdmin("institute",model)
        .then( (succ) =>{
          setLoader(false)
          setModel({})
          console.log(succ)
        })
        .catch( (err) =>{
          setLoader(false)
          console.log(err)
        })
    }
  return (
    <div>
          <Box sx={{width:{md:'350px',sm:'250px',sm:'100%'}}} className='container m-auto  mt-5 '>
      {/* <Paper elevation={8}> */}
        <Box  className='shadow px-3'>

      <Typography variant='h4' className=' text-center pt-lg-3 pt-xs-5'>Course Form</Typography>
     
     <Box className=' my-3 px-5 '>

        <BsInp val={model.courseName || ""}  label='Course Name'  onChange={(e) => setModel({...model,courseName:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp val={model.duration || ""}  label='Duration'  onChange={(e) => setModel({...model,duration:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp val={model.fees || ""}  label='Fees'  onChange={(e) => setModel({...model,fees:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp val={model.teacher || ""}  label='Teacher'  onChange={(e) => setModel({...model,teacher:e.target.value})} />
        </Box>
        <Divider light />
        <Box  sx={{m:'auto',display:'flex',justifyContent:'center'}} className='d-flex   py-3'>
          <BsButton loading={loader}  onClick={clkSubmit} label='Submit'/>
        </Box>
        
        </Box>
      {/* </Paper> */}

    </Box>
    </div>
  )
}

export default CourseForm
