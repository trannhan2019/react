import publicClient from "../client/public.client";
import privateClient from "../client/private.client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getUser: "user/get-user",
  updatePassword: "user/update-password",
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
};

export default userApi;
