import { AxiosError } from 'axios';
import apiClient from '../apiClient';

type Param = { email: string; password: string };
type Response = { accessToken: string };

export async function signin(data: Param): Promise<Response> {
  return apiClient
    .post('/auth/signin', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      return { accessToken: data.data.access_token };
    })
    .catch((error: AxiosError) => {
      const status = error.response?.status;
      let message: string;
      if (status === 401) {
        message = '잘못된 비밀번호 입니다.';
      } else if (status === 404) {
        message = '존재하지 않는 사용자입니다.';
      } else {
        message =
          '알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도 해 주세요.';
      }

      throw new Error(message);
    });
}

export async function signup(data: Param): Promise<null> {
  return apiClient
    .post('/auth/signup', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data)
    .catch((error: AxiosError) => {
      const status = error.response?.status;
      let message: string;
      if (status === 400) {
        message = '이미 가입된 사용자 입니다.';
      } else {
        message =
          '알 수 없는 에러가 발생했습니다. 잠시 후 다시 시도 해 주세요.';
      }

      throw new Error(message);
    });
}
