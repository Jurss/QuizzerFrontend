import axios from 'axios';
import { authHeader } from './authHeader';

export function callCat() {
    axios.get('http://localhost:4200/api/answers', {
            headers: authHeader()
        })
        .then(function(response) {
            console.log(response.data)
        });
}