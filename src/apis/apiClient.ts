import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'https://pre-onboarding-selection-task.shop/',
  baseURL: 'http://localhost:8000',
});

export default apiClient;
