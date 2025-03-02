import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const Data = useLoaderData();
  // const [Data, SetData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/kamalpandey27")
  //     .then((res) => res.json())
  //     .then((res) => SetData(res));
  // }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-4 m-4">
        <div className="text-2xl">Github Followers : {Data.followers}</div>
        <img
          src={Data.avatar_url}
          alt="Github Photo"
          width={300}
          className="rounded"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kamalpandey27");
  return response.json();
};
