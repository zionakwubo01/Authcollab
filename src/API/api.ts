import axios from "axios";

const url = "http://localhost:5040/api/v1";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res) => {
      console.log(res.data);

      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
