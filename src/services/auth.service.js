import axios from 'axios'

export function login() {
    axios.post('http://localhost:4200/api/auth/login', {
            email: "",
            password: ""
        })
        .then(function(response) {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data
        });
}

export function logout() {
    localStorage.removeItem("user");
}

export function register() {
    axios.post('http://localhost:4200/api/auth/signup', {
        email: "",
        password: ""
    })
}

export function getCurrentUser() {
    return JSON.stringify(localStorage.getItem("user"));
}