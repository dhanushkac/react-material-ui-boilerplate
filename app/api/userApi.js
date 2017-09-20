import axios from 'axios';
export const API_URL = 'https://jsonplaceholder.typicode.com/users';

export function getUsers() {
    return axios.get(API_URL)
    .then((res) => {
        return res.data;
    })
    .catch((err) => {
        return err;
    });
}
