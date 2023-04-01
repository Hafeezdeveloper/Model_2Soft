import {React ,useState,useEffect} from 'react'
import BsButton from '../comp/BsButton'
import { GetDataFromDatabase } from '../Firebase/FireBaseMeths'
import SMGrid from '../comp/SMGrid'
import { useNavigate } from 'react-router-dom'

const StudentList = () => {
  const navig = useNavigate()
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  let getaStudentData = ()  =>{
    setLoading(true)
    GetDataFromDatabase("StudentList")
    .then( (succ) =>{
      setData([...succ])
      setLoading(false)
      console.log(succ)
    })
    .catch((err) =>{
      setLoading(false)
      console.log(err)
    })
  }

  const DetailBtn = (e) =>{
    navig(`/institute/studentdetail`,{
      state:e
    })
  }

  const editlBtn = (e) =>{
    navig(`/institute/studentform`)
  }

  useEffect( () =>{
    getaStudentData()
  },[])
  return (
    <div>
      
      <SMGrid loader={loading} data={data} cols={[
        {
          name:"",
          displayFeild:(e) =>(
            <BsButton label='edit' onClick={() => editlBtn(e)} />
          ) 
        },
        {
          name:"",
          displayFeild:(e) =>(
            <BsButton label='Detail' onClick={() => DetailBtn(e)} />
          ) 
        },
        {
          name:"Student Name",
          key:'name'
        },
        {
          name:"Father Name",
          key:'fatherName'
        },
        {
          name:"Course",
          key:'course'
        }
      ]} />
      
    </div>
  )
}

export default StudentList
