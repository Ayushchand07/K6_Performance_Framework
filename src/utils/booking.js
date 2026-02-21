import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL } from './config.js';

const headers = { 
  'Content-Type': 'application/json',
  'Accept' : 'application/json',
 };

export function createBooking() {
  const payload = JSON.stringify({
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}
  );

  const res = http.post(`${BASE_URL}/booking`, payload, { headers });

  check(res, {
    'booking created': (r) => r.status === 200 || r.status === 201
  });

  return res.json('bookingid');
}

export function getBooking(id) {
  const res = http.get(`${BASE_URL}/booking/${id}`,{ headers });

  check(res, {
    'booking fetched': (r) => r.status === 200,
  });
}

export function updateBooking(id, token) {
  const payload = JSON.stringify({
    firstname: 'Perf',
    lastname: 'Updated',
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin: '2024-01-02',
      checkout: '2024-01-06',
    },
    additionalneeds: 'Lunch',
  });

  const res = http.put(`${BASE_URL}/booking/${id}`, payload, {
    headers: {
      ...headers,
      Cookie: `token=${token}`,
    },
  });

  check(res, {
    'booking updated': (r) => r.status === 200,
  });
}

export function deleteBooking(id, token) {
  const res = http.del(`${BASE_URL}/booking/${id}`, null, {
    headers: {
      Cookie: `token=${token}`,
    },
  });

  check(res, {
    'booking deleted': (r) => r.status === 201,
  });
}
