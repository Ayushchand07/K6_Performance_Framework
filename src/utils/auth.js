import http from 'k6/http';
import {check} from 'k6';
import { BASE_URL } from './config.js';

export function login() {
    const payload = JSON.stringify({
        username: 'admin',
        password: 'password123'
    });

    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    
    }
    const res = http.post(`${BASE_URL}/auth`, payload,params);

    check(res, {
        'successful login': (r) => r.status === 200
    });

    return res.json().token;
}