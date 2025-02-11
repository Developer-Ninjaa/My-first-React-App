import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [resourceType, setresourceType] = useState([]);

  useEffect(() => {
    setresourceType(resourceType);
    console.log("render");
  });

  function decrementCount() {
    setCount(count - 1);
  }

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <span>{resourceType}</span>

      <button
        onClick={() => {
          setresourceType("Posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setresourceType("Users");
        }}
      >
        Users
      </button>
      <button
        onClick={() => {
          setresourceType("Comments");
        }}
      >
        Comments
      </button>
    </>
  );
}
