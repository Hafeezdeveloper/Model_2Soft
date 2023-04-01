import { convertLength } from '@mui/material/styles/cssUtils'
import {React,useEffect,useState} from 'react'
import BsButton from '../comp/BsButton'
import SMGrid from '../comp/SMGrid'
import { GetDataFromDatabase } from '../Firebase/FireBaseMeths'

const Institute = () => {
  const [loader,setLoader] = useState(false)
  const [data,setData] = useState([])

  let dataRender = () =>{
    setLoader(true)
    GetDataFromDatabase("Admin")
    .then( (succ) =>{
      setData([...succ])
      setLoader(false)
      console.log(succ)
    })
    .catch( (err) =>{
      setLoader(false)
      console.log(err)
    })
  }

  useEffect( ()=>{
    dataRender()
  },[])
  return (
    <div>
      <SMGrid loader={loader} data={data}  cols={[
        
        {
          name:"Student Name",
          key:'name'
        },
        {
          name:"Address",
          key:'address'
        },
        {
          name:"Contact",
          key:'contact'
        },
        {
          name:"OwnerEmail",
          key:'ownerEmail'
        }
      ]} />
    </div>
  )
}

export default Institute
