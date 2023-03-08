import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUser  } from '../store/slices/UserSlice'

export const DeleteAllUser = () => {

    const dispatch=useDispatch()

    const deleteAll=()=>{
        console.log("hiii");
        dispatch(deleteUser())
    }
  return (
    <div style={{margin:"10px"}}>
      <button  onClick={()=>deleteAll()}>Delete All Users </button>
    </div>
  )
}


