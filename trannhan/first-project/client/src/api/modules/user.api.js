import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "user/signin",
  signup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
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
};

export default userApi;
