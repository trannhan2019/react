import fileClient from "../client/file.client";
import publicClient from "../client/public.client";

const testApi = {
  test: async (data) => {
    try {
      //   const formData = new FormData();
      //   formData.append("birthday", data.birthday);
      //   formData.append("fullName", data.fullName);
      const response = await publicClient.post("/test", data);
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default testApi;
