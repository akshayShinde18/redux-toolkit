import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {
const dispatch=useDispatch()

    const data = useSelector((state)=>{
        return state.users;
    })

    const deleteUser=(id)=>{
        dispatch(removeUser(id))
    }
  return (
    <div>
      {
        data.map((e,id)=>{
            return <li style={{margin:"10px"}} key={id}>
            {e}
            <button style={{marginLeft:"20px",backgroundColor:"red"}} onClick={()=>deleteUser(id)}>
            Delete
            </button>
            </li>
        })
      }
    </div>
  )
}

export default DisplayUsers
