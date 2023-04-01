import { TextField } from '@mui/material'
import React from 'react'

const BsInp = (props) => {
    let {onChange,label , val} = props
  return (
    <div>
      <TextField  label={label} value={val}   onChange={onChange}/>
    </div>
  )
}

export default BsInp
