import React from 'react';
import { useState } from 'useState';

function App() {
const [count, setCount] = useState(0);



}
return (
<p> {count} </p>
<button onClick={()=> setCount(count +1)} > Click me </button>

)
