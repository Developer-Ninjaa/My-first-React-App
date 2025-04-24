import React from "react"

export default function App() {
  function handleClick() {
    console.log("I was clicked");
  }
  function handleOnMouseOver() {
    console.log("MouseOver");
  }

  return(
    <div className="container">
    <img src="" onMouseOver={handleOnMouseOver} />
    <button onClick={handleClick}> Click Me </button>
    </div>
  )
}
