import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import BsButton from '../comp/BsButton'
import BsInp from '../comp/BsInp'
import { getDataForAdmin } from '../Firebase/FireBaseMeths'

const InstituteForm = () => {
    let arr = ["School","Collage","University","Institute"]
    let arr2 = ["No of Campus","1" ,"2","3" ]
    const [model,setModel] = useState({})
    const [loader,setLoader] = useState(false)

    const clkBtn = () =>{
        setLoader(true)
        getDataForAdmin('Admin',model)
        .then((succ) =>{
            setLoader(false)
            setModel({})
            console.log(succ)
        })
        .catch((err) =>{
            setLoader(false)
            console.log(err)
        })
    }

  return (
    <div>
   <div>
    <Box sx={{display:'flex',justifyContent:'center'}} className=' '>
      {/* <Paper elevation={8}> */}
        <Box  className='shadow px-3'>
            <Typography className='text-center' variant='h5'>Institute Form</Typography>
        <Box className=' my-3 px-5 '>

        <BsInp val={model.name || ""}  label='Institue Name'  onChange={(e) => setModel({...model,name:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

        <BsInp val={model.shrotName || ""}  label='Institute Short Name'  onChange={(e) => setModel({...model,shrotName:e.target.value})} />
        </Box>
        <Box className=' my-3 px-5 '>

{/* <BsInp  val={model.shrotName || ""}  label='No of Campus'  onChange={(e) => setModel({...model,noOfCamp:e.target.value})} /> */}
    <select  onChange={(e) => setModel({...model,noOfCamp:e.target.value})} className='w-100 py-3 px-2' name="" id="">
      {arr2.map( (x,i) =>{
        return(
          <option value={x} >{x}</option>
        )
      })}
    </select>
</Box>
<Box className=' my-3 px-5 '>

<BsInp val={model.campusDetail || ""}   label='Campus detail'  onChange={(e) => setModel({...model,campusDetail:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp  val={model.location || ""}    label='Location'  onChange={(e) => setModel({...model,location:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp val={model.address || ""}   label='Address'  onChange={(e) => setModel({...model,address:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp val={model.contact || ""}   label='Contact'  onChange={(e) => setModel({...model,contact:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp  val={model.ownerContact || ""} label='Owner Contact'  onChange={(e) => setModel({...model,ownerContact:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

<BsInp  val={model.ownerEmail || ""} label='Owner Email'  onChange={(e) => setModel({...model,ownerEmail:e.target.value})} />
</Box>
<Box className=' my-3 px-5 '>

        <select  className='px-5' onChange={(e) => setModel({...model,instituteType:e.target.value})} name="" id="">
            {arr.map((x,i) =>{
                return(
                    <option key={i} value={x}>{x}</option>
            )
            })}
        </select>
        </Box>
        
        <Box className=' my-3 px-5 '>
            <BsButton onClick={clkBtn}  label={'submit'} loading={loader}/>
        </Box>
        
        </Box>
      {/* </Paper> */}

    </Box>
    </div>

    </div>
  )
}

export default InstituteForm
