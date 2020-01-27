import axios from 'axios'

export const register = newUser => {
  return axios
    .post('http://127.0.0.1:5000/user', JSON.stringify({
      name: newUser.name,
      password: newUser.password
    }))
      .then(response => {
        console.log('Registered')
      })
}
