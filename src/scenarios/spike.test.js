import { sleep } from 'k6';
import { TEST_OPTIONS } from '../utils/config.js';
import { THRESHOLDS } from '../thresholds.js';
import { login } from '../utils/auth.js';
import {
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
} from '../utils/booking.js';

export const options = {
  stages: [
    ...TEST_OPTIONS.spike.stages,
   
  ],
  thresholds: THRESHOLDS,
};

export default function () {
  const token = login();

   const bookingId = createBooking();
  getBooking(bookingId);
  updateBooking(bookingId, token);
  deleteBooking(bookingId, token);

  sleep(1);
}
