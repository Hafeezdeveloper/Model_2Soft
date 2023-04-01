import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Cards from '../comp/Cards'
import { GetDataFromDatabase } from '../Firebase/FireBaseMeths'

const CourseList = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
  let getFormData = () =>{
    setLoading(true)
    GetDataFromDatabase("institute")  
    .then( (succ) =>{
      setData([...succ])
      setLoading(false)
      console.log(succ)
    })
    .catch( (err) =>{
      setLoading(false)
      console.log(err)
    })
    
  }
// console.log(data)
  useEffect( () =>{
    getFormData()
  },[])
  return (
    <div>
      {loading ? <Box sx={{display:'flex',width:'100%',justifyContent:'center'}}>
      <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loader" />
      </Box> : 
      <Grid container spacing={5}>
        {data.map( (item,i) =>{
          return(
        <Grid xs={6} md={6} item>
          <Cards  item={item} />
    </Grid>
      )
        })}
      </Grid>
}
    </div>
  )
}

export default CourseList
