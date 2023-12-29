import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import User from './components/User';

const App = () => {

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, [])
  const loadData = () => {
    setIsLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setUsers(res.data)
        setIsLoading(false)
      })
      .catch(error => {
        toast.error(error)
        setIsLoading(false)
      })
  }

  //CRUD
  //Create
  //Update
  //Delete
  //GPS


  return (
    <>
      <ToastContainer />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-12 col-md-12'>

            {
              isLoading && <>
                <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </>
            }


            {
              users.length > 0 ? (
                <>
                  <ol class="list-group list-group-numbered">
                    {
                      users.map(u => (
                        <User user={u} />
                      ))
                    }
                  </ol>
                </>
              ) : (
                <><p>No users found</p></>
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App