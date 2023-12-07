import axios from "axios";

const url = "https://authdeploy.onrender.com/";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${url}/create-user`, data).then((res: any) => {
      console.log(res.data);

      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${url}/signin-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
export const verifyUser = async (data: any) => {
  try {
    return await axios.patch(`${url}/verify-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
