import { TextField } from '@mui/material'
import React from 'react'

const BsInpFull = (props) => {
    let {onChange , val, label } = props
  return (
    <div>
      <TextField fullWidth value={val} onChange={onChange}  label={label}/>
    </div>
  )
}

export default BsInpFull
