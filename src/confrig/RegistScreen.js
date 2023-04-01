import { Box, Divider, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BsButton from '../comp/BsButton'
import BsInpFull from '../comp/BsInpFull'
import { useNavigate } from 'react-router-dom'
import { AuthenAndRegist, Getregistra } from '../Firebase/FireBaseMeths'
import DatePick from '../comp/DatePicker'
import BsSnak from '../comp/BsSnak'
import Navbar from './Navbar'
// import Navbar from './Navbar'
// import BsInpFullFull from '../comp/BsInpFullFull'
// import {LoginUser} from '../FireBase/BaseFBMe'
// import BsSnak from '../comp/BsSnake'


const Registration = () => {
  let arrQualifi = ["Qualification", "School", "Collage", "University", "Masters"]
  let arrCourse = ["Courses", "Web development", "Fulluter", "Mobile Application", "Web designer"]
  let arrCity = ["City", "Lahore", "Peshawar", "Quetta", "Karachi", "Islamabad"]
  let arrCountry = ["Country", "Germanay", "Pakistan", "Canada", "England", "Dubai"]
  let arrsection = ["Section", "Morning", "Evening"]

  const navigate = useNavigate()
  const [model, setModel] = useState({})
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  const [registLoader, setRegisterLoader] = useState(false)
  const [loader, setLoader] = useState(false)
  const [mainLoading, setMainLoading] = useState(false)
  const [regCheck, setRegCheck] = useState({
    open: true
  })



  const clkRegist = () => {
    if (!model.email) {
      setOpen(true) 
      setMessage("Email Required ")
      return
    }
    if (!model.passwrod) {
      setOpen(true) 
      setMessage("Password Required ")
      return
    }
    
    setRegisterLoader(true)
    AuthenAndRegist("RegistrationStudent", model)
      .then((succ) => {
        setRegisterLoader(false)
        setModel({})
        navigate('/login')
        console.log(succ)
      })
      .catch((err) => {
        console.log(err)
        setRegisterLoader(false)
      })
  }

  const check = () => {
    setMainLoading(true)
    Getregistra('Registration')
      .then((succ) => {
        setMainLoading(false)
        setRegCheck({ open: succ })
        // console.log(succ)
      })
      .catch((err) => {
        setMainLoading(false)
        console.log(err)
      })
  }
  useEffect(() => {
    check()
  }, [])


  return (
    <div>
      <Navbar />
      <BsSnak open={open} mess={message} close={(e) => setOpen(e)} />

      {mainLoading ? (<Box style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="" />
      </Box>) : <>

        {!regCheck.open ?
          <h1>Not Registration Open</h1>
          :
          (<> 
              {/* <Navbar /> */}
              
            <Box sx={{ width: { md: '450px', sm: '250px', sm: '100%' } }} className='container m-auto  mt-5 '>
              {/* <Paper elevation={8}> */}
              <Box className='shadow px-3'>

                <Typography variant='h4' className=' text-center pt-lg-3 pt-xs-5'>Registration Form</Typography>
                <Box className='w-75 m-auto'>
                  <Box>
                    <Box className=' my-3  '>

                      <BsInpFull val={model.name || ""} label='Name' onChange={(e) => setModel({ ...model, name: e.target.value })} />
                    </Box>
                    <Box className=' my-3  '>

                      <BsInpFull val={model.fatherName || ""} label='Father Name' onChange={(e) => setModel({ ...model, fatherName: e.target.value })} />
                    </Box>
                    <Box className=' my-3 '>

                      <BsInpFull label='Contact' val={model.contact || ""} onChange={(e) => setModel({ ...model, contact: e.target.value })} />
                    </Box>
                    <Box className=' my-3  '>

                      <BsInpFull label='CNIC' val={model.cnic || ""} onChange={(e) => setModel({ ...model, cnic: e.target.value })} />
                    </Box>

                    <Box className=' my-3  '>
                      <select className=' px-5 py-2' onChange={(e) => setModel({ ...model, qualification: e.target.value })} name="" id="">
                        {arrQualifi.map((x, i) => {
                          return (
                            <option key={i} value={x}>{x}</option>
                          )
                        })}
                      </select>

                    </Box>
                    <Box className=' my-3 '>
                      <select className='px-4 py-2' onChange={(e) => setModel({ ...model, course: e.target.value })} name="" id="">
                        {arrCourse.map((x, i) => {
                          return (
                            <option key={i} value={x}>{x}</option>
                          )
                        })}
                      </select>

                    </Box>
                    <Box className=' my-3 '>

                      <TextField defaultValue="Jawan Pakistan" disabled label={"Institute"} onChange={(e) => setModel({ ...model, institute: e.target.value })} />
                    </Box>
                    <Box className=' my-3 '>
                      <select className=' px-5 py-2' onChange={(e) => setModel({ ...model, section: e.target.value })} name="" id="">
                        {arrsection.map((x, i) => {
                          return (
                            <option key={i} value={x}>{x}</option>
                          )
                        })}
                      </select>

                    </Box>

                    <Box className=' my-3  '>

                      <BsInpFull val={model.email || ""} label='Email' onChange={(e) => setModel({ ...model, email: e.target.value })} />
                    </Box>
                    <Box className=' my-3 '>

                      <BsInpFull val={model.passwrod || ""} label='Password' onChange={(e) => setModel({ ...model, passwrod: e.target.value })} />
                    </Box>
                    <Box className=' my-3 '>
                      <select className='px-4 py-2 w-100' onChange={(e) => setModel({ ...model, city: e.target.value })} name="" id="">
                        {arrCity.map((x, i) => {
                          return (
                            <option key={i} value={x}>{x}</option>
                          )
                        })}
                      </select>

                    </Box>
                    <Box className=' my-3  '>
                      <select className='px-4 py-2 w-100' onChange={(e) => setModel({ ...model, country: e.target.value })} name="" id="">
                        {arrCountry.map((x, i) => {
                          return (
                            <option key={i} value={x}>{x}</option>
                          )
                        })}
                      </select>

                    </Box>
                    <Box className=' my-3 '>
                      <DatePick onChange={(e) => setModel({ ...model, date: e.$d })} />
                    </Box>

                    <Box className=' my-3'>
                      <label htmlFor="abc1">
                        <input type="radio" onClick={(e) => setModel({ ...model, gender: e.target.value })} name="same" value={"male"} id="abc1" /> Male
                      </label>
                      <label htmlFor="abc2">
                        <input type="radio" name="same" onClick={(e) => setModel({ ...model, gender: e.target.value })} value={"female"} id="abc2" /> Female
                      </label>
                      <label htmlFor="abc3">
                        <input type="radio" name="same" onClick={(e) => setModel({ ...model, gender: e.target.value })} value={"custom"} id="abc3" /> Custom
                      </label>
                    </Box>

                    <Box className=' my-3  '>

                      <BsInpFull val={model.address || ""} label='Address' onChange={(e) => setModel({ ...model, address: e.target.value })} />
                    </Box>

                    {/* <Box className=' my-3 px-5 '>

        <BsInpFull   label='email'  onChange={(e) => setModel({...model,email:e.target.value})} />
        </Box> */}

                    <Divider light />
                    <Box sx={{ display: 'flex', justifyContent: 'center' }} className='  py-3'>
                      <BsButton loading={registLoader} onClick={clkRegist} label='Submit' />
                    </Box>

                  </Box>
                </Box>

              </Box>
              {/* </Paper> */}

            </Box>
            </> )}
      </>}

    </div>
  )
}

export default Registration
