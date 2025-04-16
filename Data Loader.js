import react from "react";
import reactDom from "react-dom";

function App() {
  const fristName = "Joe";
  const lastName = "Schmoe";
}

return (
  <h1>
    Hello {firstName} {lastname}
  </h1>
);

ReactDOM.render(<App />, document.getElementById("root"));
