import React from 'react'

const SMGrid = (props) => {
    let  { data , cols ,loader }  = props
  return (
    <div>
        {loader ? 
        <div style={{display:'flex' , width:'100%' , justifyContent:'center',alignItems:'center'}}>
            <img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loader" />
        </div> : <>
      {data && Array.isArray(data) &&(
       <table className='table table-striped'>
           <thead>
               <tr>
                   {cols.map((x,i) =>{
                       return(
                           <th key={i}>{x.name}</th>
                       )
                   })}
               </tr>
           </thead>
           <tbody>
               {data.map((x,i) =>(
                   <tr key={i}>
                       {cols.map((itm,ind) =>{
                           return(
                               <td key={ind}>{itm.displayFeild ? itm.displayFeild(x) :  x[itm.key]}</td>
                           )
                       })}
                   </tr>
               ))}
           </tbody>
       </table>
      )}
      </> }
    </div>
  )
}

export default SMGrid
