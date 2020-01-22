import axios from 'axios'

export const register = newUser => {
    return axios
        .post('user/register', {
            name: newUser.name,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}