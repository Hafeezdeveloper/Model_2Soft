import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'

const StudentDetail = () => {
  const loca = useLocation()
  console.log(loca)
  let {name,fatherName,cnic,address,course,gender,
    passwrod,email,qualification,section , city , country} = loca.state
  let arr = ["address","cnic","contact",]
  return (
    <div>
      <Box sx={{maxWidth:'456px',m:'0px auto'}}> 
      <Paper elevation={15}>
      <table className='table table-stripted'>
        <tr >
          <th>Name : </th>
          <td>{name}</td>
        </tr>
        <tr >
          <th>Father Name : </th>
          <td>{fatherName}</td>
        </tr>
        <tr >
          <th>CNIC : </th>
          <td>{cnic}</td>
        </tr>
        <tr >
          <th>Address : </th>
          <td>{address}</td>
        </tr>
        <tr >
          <th>Course : </th>
          <td>{course}</td>
        </tr>
        <tr >
          <th>Gender : </th>
          <td>{gender}</td>
        </tr>
        <tr >
          <th>Qualification : </th>
          <td>{qualification}</td>
        </tr>
        <tr >
          <th>Section : </th>
          <td>{section}</td>
        </tr>
        <tr >
          <th>Email : </th>
          <td>{email}</td>
        </tr>
        <tr >
          <th>Password : </th>
          <td>{passwrod}</td>
        </tr>
        <tr >
          <th>City : </th>
          <td>{city}</td>
        </tr>
        <tr >
          <th>Country : </th>
          <td>{country}</td>
        </tr>
      </table>
        {/* <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Name: </span> <span>{loca.state.name}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Father Name: </span> <span>{loca.state.fatherName}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> CNIC: </span> <span>{loca.state.cnic}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Course: </span> <span>{loca.state.course}</span>  </Typography>  
        <Typography  sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span  style={{fontWeight:'bold'}}> Gender: </span> <span>{loca.state.gender}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Name: </span> <span>{loca.state.name}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Name: </span> <span>{loca.state.name}</span>  </Typography>  
        <Typography sx={{display:'flex',justifyContent:'space-around'}} variant='h6'> <span style={{fontWeight:'bold'}}> Name: </span> <span>{loca.state.name}</span>  </Typography>   */}
      </Paper>
      </Box>  
    </div>
  )
}

export default StudentDetail
