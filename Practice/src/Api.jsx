import React from "react";
import { useEffect, useState } from "react";
function Api() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>{apiData.length > 0 ? apiData[0].body : "Loading..."}</div>
    </>
  );
}

export default Api;
