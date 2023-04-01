import { Button ,CircularProgress } from '@mui/material'
import React from 'react'

const BsButton = (props) => {
    let { label , onClick ,loading} = props;
  return (
    <div>
      <Button onClick={onClick} disabled={loading} variant='contained'>{loading?<CircularProgress /> :(label)}</Button>
    </div>
  )
}

export default BsButton
