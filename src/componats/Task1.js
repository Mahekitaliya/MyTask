import React from "react";

function App2() {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 20) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return (
    <>
      <img src="https://m.media-amazon.com/images/I/61dH18YndzL._AC_UF894,1000_QL80_.jpg" className="h-[600px] w-[1000px] m-auto p-9"></img>
      <h1 className="text-4xl text-center absolute left-[300px] top-[180px] border border-4 border-black rounded-xl p-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  ">Hello sir: Good {timeOfDay}!</h1>

    </>
    
  )
}; 

export default App2;