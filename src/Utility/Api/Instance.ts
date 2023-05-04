import axios from 'axios';
import {Base_Url} from './baseURl';

export const Instance = () => {
  let AccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk';
  const AxiosInstance = axios.create({
    baseURL: Base_Url,
    headers: {
      Authorization: `Bearer ${AccessToken}`,
      'Content-Type': 'application/json',
      TimeOffset: -(new Date().getTimezoneOffset() / 60) * 60,
    },
  });
  return AxiosInstance;
};
