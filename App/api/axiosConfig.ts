/* eslint-disable prettier/prettier */
import axios, {AxiosError, AxiosResponse} from 'axios';
// import {appStore} from '../store';
// import {setError} from '../Store/common/actions';

const handleSuccess = (response: AxiosResponse) => {
  return response;
};

const handleError = (error: AxiosError) => {
  console.log({'error.message': error.message});

  // appStore.dispatch(setError(error.message));
  return Promise.reject(error);
};

export const configureAxios = () => {
  console.log('configureAxios');

  axios.interceptors.response.use(handleSuccess, handleError);
};
