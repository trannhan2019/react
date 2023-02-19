import { Button } from "@mui/material";
import React, { useState } from "react";
import testApi from "../api/modules/test.api";

export default function TestFunction() {
  const [data, setData] = useState();
  const params = { limit: 7, search: "test" };
  const onTest = async () => {
    const { response, error } = await testApi.test(params);
    console.log(response);
  };

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <Button onClick={onTest}>Test</Button>
    </div>
  );
}
