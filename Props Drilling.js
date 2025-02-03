//App.js
import "./styles.css";

export default function App() {
  const name = "Jaskaran";

  return (
    <>
      <childA name={name} />
    </>
  );
}

//ChildA.js
import React from "react";

function childA({ name }) {
  return <childB name={name} />;
}

export default childA;

//ChildB.js
import React from "react";
import childC from "./ChildC";

function childB({ name }) {
  return <childC name={name} />;
}

export default childB;

//ChildC.js
import React from "react";

function childC({ name }) {
  return <h1>Componenet C displaying {name}</h1>;
}

export default childC;


