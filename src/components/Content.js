import React, { useEffect, useState } from "react";

const Content = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const addData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "Test Dio",
        body: "Body Dio",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const newData = json;
        const tempData = [...data];
        tempData.push(newData);
        setData(tempData);
      });
  };
  return (
    <div style={{ padding: "0 50px" }}>
      <button style={{ marginBottom: 20 }} onClick={() => addData()}>
        Add
      </button>

      <div className="grid-container">
        {data &&
          data.map((post, index) => (
            <div key={index} className="grid-item">
              <p>{post.id}</p>
              <p>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content;
