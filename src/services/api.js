// Minha Chave: 08760eb9d64ced3bd3ad27404270c1253d39b22d

import axios from "axios";

export const key ="08760eb9d64ced3bd3ad27404270c1253d39b22d"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;