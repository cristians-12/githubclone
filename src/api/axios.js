import axios from "axios";

const instancia = axios.create({
    baseURL:'https://backend-login-3ru0.onrender.com/app',
    withCredentials:true,
})

export default instancia;