import axios from "axios";
const BASE_URL = "https://reqres.in/";
export const apiInstance = (
  method: string,
  url: string | undefined,
  data: object
) => {
  const APIURL: string | undefined = BASE_URL + url;
  return axios({ method, url: APIURL, data })
    .then(function (response: any) {
      return response;
    })
    .catch((err: any) => {
      return err?.response;
    });
};
