import publicClient from "../client/public.client";
import privateClient from "../client/private.client";
import fileClient from "../client/file.client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getUser: "user/get-user",
  updatePassword: "user/update-password",
  updateInfo: "user/update-info",
  getUserList: "user",
  forgot: "user/forgot",
};

const userApi = {
  signup: async ({ fullName, email, password, confirmPassword }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        fullName,
        email,
        password,
        confirmPassword,
      });
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  signin: async ({ email, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.signin, {
        email,
        password,
      });
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  },
  getUser: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getUser);
      return { response };
    } catch (error) {
      return { error };
    }
  },
  updatePassword: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.updatePassword, {
        password,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  },
  updateInfo: async ({ fullName, photo, birthday }) => {
    try {
      const formData = new FormData();
      // const { fullName, photo } = values;
      // for (let value in values) {
      //   formData.append(value, values[value]);
      // }
      formData.append("fullName", fullName);
      formData.append("photo", photo);
      formData.append("birthday", birthday);
      const response = await fileClient.put(userEndpoints.updateInfo, formData);

      return { response };
    } catch (error) {
      return { error };
    }
  },
  getUserList: async (params) => {
    try {
      const response = await privateClient.get(userEndpoints.getUserList, {
        params,
      });
      return { response };
    } catch (error) {
      return { error };
    }
  },
  forgot: async () => {
    try {
      //return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default userApi;
