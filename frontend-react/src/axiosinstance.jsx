import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_BASE_API;

const axiosinstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response Interceptor
axiosinstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;

    // Ensure error.response exists
    if (!error.response) {
      return Promise.reject(error);
    }

    // Handle 401 Unauthorized
    if (error.response.status === 401 && !original._retry) {
      original._retry = true;

      const refToken = localStorage.getItem('RefreshData');
      if (!refToken) {
        localStorage.removeItem('AccessData');
        localStorage.removeItem('RefreshData');
        window.location.href = '/Login';
        return Promise.reject(error);
      }

      try {
        // Use plain axios (not axiosinstance) to avoid recursion
        const response = await axios.post(`${baseURL}/token/refresh/`, {
          refresh: refToken,
        });

        localStorage.setItem('AccessData', response.data.access);

        // Update and retry original request
        original.headers['Authorization'] = `Bearer ${response.data.access}`;
        return axiosinstance(original);
      } catch (err) {
        localStorage.removeItem('AccessData');
        localStorage.removeItem('RefreshData');
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

// Request Interceptor
axiosinstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('AccessData');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    console.log("Request with final headers =>", config.headers);
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosinstance;
