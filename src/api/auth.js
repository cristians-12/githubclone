import axios from './axios';
export const soliRegistro = (user)=> axios.post(`/register`, user)
export const soliLogin = (user)=>axios.post(`/login`,user)
export const verifToken = ()=>axios.get('/verify')