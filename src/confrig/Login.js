import { Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BsButton from '../comp/BsButton'
import BsInpFull from '../comp/BsInpFull'
import BsSnak from '../comp/BsSnak'
import { AuthenAndLogin } from '../Firebase/FireBaseMeths'
import Navbar from './Navbar'

const Login = () => {
    const navigat = useNavigate()
    const [model, setModel] = useState({})
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
  
    const clkRegist = () =>{
        if (!model.email) {
            setOpen(true) 
            setMessage("Email Required ")
            return
          }
          if (!model.password) {
            setOpen(true) 
            setMessage("Password Required ")
            return
          }

        AuthenAndLogin(model)
        .then( (succ) =>{
            console.log(succ)   
            if(succ.category === "admin"){
                navigat("/admin")
            }if(succ.category === "institute"){
                navigat("/institute")
            }else{
                navigat("/student")
            }
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    return (
        <div>
            <Navbar />
            <BsSnak open={open} mess={message} close={ (e) => setOpen(e)} />
            <Box sx={{ width: { md: '450px', sm: '250px', sm: '100%' } }} className='container m-auto  mt-5 '>
                {/* <Paper elevation={8}> */}
                <Box className='shadow px-3'>

                    <Typography variant='h4' className=' text-center pt-lg-3 pt-xs-5'>Login </Typography>
                    <Box className='w-75 m-auto'>
                        <Box>
                            <Box className=' my-3  '>

                                <BsInpFull val={model.email || ""} label='Email' onChange={(e) => setModel({ ...model, email: e.target.value })} />
                            </Box>
                            <Box className=' my-3  '>

                                <BsInpFull val={model.password || ""} label='Password' onChange={(e) => setModel({ ...model, password: e.target.value })} />
                            </Box>

                            <Divider light />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} className='  py-3'>
                      <BsButton onClick={clkRegist} label='Submit' />
                    </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default Login
