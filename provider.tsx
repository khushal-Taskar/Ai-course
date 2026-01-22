import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { User } from 'lucide-react';
import { UserDetailContext } from './context/UserDetailContext';
import { set } from 'date-fns';
function Provider({children}: {children: React.ReactNode    }) {
      const [userDetail,setUserDetail] = useState(null)
       useEffect(() => {
  CreateNewUser()
}, [])

const CreateNewUser = async () => {
  // user API endpoint call to create a new user
  const result = await axios.post('/api/user', {})
  console.log(result.data)
  setUserDetail(result?.data);
}

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    {children}
    </UserDetailContext.Provider>
  )
}

export default Provider