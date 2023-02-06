import { useState } from "react";
import publicClient from "./api/client/public.client";

export default function App() {
  const [res, setRes] = useState(null);
  const onSend = async () => {
    try {
      const response = await publicClient.get("/test");
      console.log(response);
      // setRes(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      <div className="bg-red-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tenetur
        molestias eaque ipsa atque id recusandae culpa deleniti obcaecati
        deserunt distinctio officia doloribus odio autem nam, placeat
        reiciendis. Cupiditate, corrupti?
      </div>
      <div className="bg-secondary1">{res}</div>
      <button onClick={onSend}>Test</button>
    </>
  );
}
