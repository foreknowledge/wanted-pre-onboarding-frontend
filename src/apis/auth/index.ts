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
    });
}

export async function signup(data: Param): Promise<null> {
  return apiClient
    .post('/auth/signup', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((data) => data.data);
}
