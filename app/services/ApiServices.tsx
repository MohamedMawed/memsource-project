import axios from 'axios';
import {Alert} from 'react-native';

const config = {
  apiUrl: 'https://cloud.memsource.com/web/api2/v1/',
  debug: true,
  token: '2uQgHg5sSrEdqaSSjSxmg611SCJYhk2ME7fkxgagF0AmmHKU7j24iiN92rHG05ls5',
};

export default {
  post: async (url: string, data = {}, throwErrors = false) => {
    try {
      const response = await axios.post(
        `${config.apiUrl}${url}?token=${config.token}`,
        data,
      );
      if (throwErrors && (response.status <= 100 || response.status >= 400)) {
        throw new Error(
          response?.data?.errors
            ? Object.values(response?.data?.errors)[0]
            : response?.data?.message,
        );
      }
      return response;
    } catch (e) {
      Alert.alert('Error', e);
    }
  },
  get: async (url: string, queryParams: string, throwErrors = false) => {
    try {
      const response = await axios.get(
        `${config.apiUrl}${url}?token=${config.token}&${queryParams}`,
      );
      if (throwErrors && (response.status <= 100 || response.status >= 400)) {
        throw new Error(
          response?.data?.errors
            ? Object.values(response?.data?.errors)[0]
            : response?.data?.message,
        );
      }
      return response;
    } catch (e) {
      Alert.alert('Error', e);
    }
  },
};
