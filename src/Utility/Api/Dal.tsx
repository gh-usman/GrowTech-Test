import {Instance} from './Instance';

export const useApi = () => {
  const AxiosInstance = Instance();

  const getData = (url: string) => {
    try {
      const Response = AxiosInstance.get(url)
        .then(res => {
          console.log(res?.data?.data);
          return res?.data?.data;
        })
        .catch(e => {
          console.log('err ---', e);
          return e
        });

        return Response
    } catch (e) {
      console.log(e);
    }
  };

  return {getData}
};
