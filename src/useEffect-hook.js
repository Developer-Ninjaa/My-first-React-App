import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted or count changed');
    document.title = `Count: ${count}`;
  }, [count]); //(dependency) The effect runs whenever 'count' changes 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
