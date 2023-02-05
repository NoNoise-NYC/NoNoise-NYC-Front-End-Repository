import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPageButton = () => {
  const [user1, setUser] = useState({})
  const navigate = useNavigate()

  function handleSubmit (event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })

    fetch(`http://localhost:4005/${data.get('email')}/${data.get('password')}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data)
        window.localStorage.setItem('user', data)
        window.localStorage.setItem('email', data)
        window.localStorage.setItem('password', data)
        window.localStorage.setItem('badge', data)
      })

    navigate('/')
  }

  return (
    <div>
      <button className='signUp' onClick={handleSubmit}> Sign up </button>
    </div>
  )
}

export default LoginPageButton
