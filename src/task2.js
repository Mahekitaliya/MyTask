import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ height:"170px",width :"500px", textAlign:"center", backgroundColor:"pink", marginLeft:"25%", fontSize:"20px", borderRadius:"200px", color:"red"}}>
      <h1>Value: {count}</h1>
      <button onClick={increment} style={{height:"50px",width:"100px", borderRadius:"100px", border:"none", backgroundColor:"red", color:"white" }}>Increase</button>
      <button onClick={decrement} style={{height:"50px",width:"100px", borderRadius:"100px", border:"none", backgroundColor:"red", color:"white" }} >Decrease</button>
    </div>
  );
}

export default App;