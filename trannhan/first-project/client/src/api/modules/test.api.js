import fileClient from "../client/file.client";
import publicClient from "../client/public.client";

const testApi = {
  test: async (params) => {
    try {
      const response = await publicClient.get("/user", { params });
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default testApi;
