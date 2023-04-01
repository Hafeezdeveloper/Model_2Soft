import React, { useEffect, useState } from 'react'
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';
import { registSend } from '../Firebase/FireBaseMeths';

const RegistCont = () => {
  const [val,setVal] = useState()

  const regisBtn = ( ) =>{
    registSend('Registration',val)
    .then((succ)=>{

    })
    .catch((err) =>{
      console.log(err)
    })
  }
  
  return (
    <div>
        <Switch onChange={(e) => setVal(e.target.checked)} />
        <Button onClick={regisBtn} variant='contained'>send</Button>
    </div>
  )
}

export default RegistCont
