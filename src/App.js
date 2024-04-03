
import './App.css';
// import App2 from './componats/Task1';
// import Card1 from './componats/Card1';
// import keni from'../src/Aset/img1.jpg';
// import Data from './Data';
// import Task3 from "./componats/Task";
// function App() {

//   return (
//     <>
//     <div className="App flex justify-around">
//      {/* <App2/> */}
//      <Card1 imga={keni} bname="View More"bname1="-cancel-" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit."name="David Dell" fname="Full Stack devloper"/>
//       <Card1 imga={keni} bname="View More"  bname1="-cancel-" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Rse Bush" fname="Full Stack devloper"/>
//       <Card1 imga={keni} bname="View More" bname1="-cancel-" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Jones Gail" fname="Full Stack devloper"/>
//     </div>
//     <div className="App flex justify-around">
//     <Card1 imga={keni} bname="View More"  bname1="-cancel-" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="David Dell" fname="Full Stack devloper"/>
//       <Card1  imga={keni} bname="View More"   bname1="-cancel-"des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Rse Bush" fname="Full Stack devloper"/>
//       <Card1 imga={keni} bname="View More"  bname1="-cancel-" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Jones Gail" fname="Full Stack devloper"/>
//     </div>
    
     
//     </>
//   ) 
// }

// export default App;

// function App() {
//   return (
//     <>
//       <p className='font-serif  text-6xl h-24 mt-6 text-center'>card demo with props start</p>
//     <div className='App'>
//       <div style={{ display :'flex',justifyContent:'center'}}>
//         {Data.map((cvalue, ind,arr) =>{
//           console.log(cvalue,"cvalue")
//       return<Card1 key={ind} name={cvalue.name} bname={cvalue.bname} bname1={cvalue.bname1}  des={cvalue. des} fname={cvalue.fname}  img={cvalue. img}/>
//        })}
//       </div>
//       </div>
//     <div className='App2'>
//       <div style={{ display :'flex',justifyContent:'center'}}>
//         {Data.map((cvalue, ind,arr) =>{
//           console.log(cvalue,"cvalue")
//       return<Card1 key={ind} name={cvalue.name} bname={cvalue.bname} bname1={cvalue.bname1}  des={cvalue. des} fname={cvalue.fname}  img={cvalue. img}/>
//        })}
//       </div>
//       </div>
//       <p className='font-serif  text-6xl h-24 mt-6 text-center'>card demo with props end</p>
//   </>
//   );
// }
// export default App;

  

// import Task3 from './componats/Task3';
  

// function App() {
//   return (
//     <div >
//       <p style={{textAlign:"center",fontFamily:"cursive",fontSize:"70px"}}>Emoji Taks.....</p>
//       <div>
//         <emoji  ></emoji>
//       </div>
//     </div>
//   );
// };

  
// export default App;

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
<>
    <p className=' text-5xl' style={{marginLeft:"500px" ,color: "purple"}}>Counter Task start</p>
    <div className='bg-gradient-to-r from-purple-500 to-pink-500' style={{ height:"500px",width :"1200px", textAlign:"center", margin:"auto", marginTop:"20px", fontSize:"20px"
  }}>
      

      <button onClick={increment} style={{height:"100px",width:"200px", borderRadius:"20px", border:"none", backgroundColor:"red",border:"4px solid black", color:"white", marginTop:"150px " ,fontSize:"30px"}}>Increase</button>
      <button onClick={decrement} style={{height:"100px",width:"200px", borderRadius:"20px", border:"none", backgroundColor:"red",border:"4px solid black", color:"white",marginLeft:"20px",fontSize:"30px" }} >Decrease</button>
      <h1 className='text-6xl mt-11 '>Value: {count}</h1>
    </div>
    <p className=' text-5xl' style={{marginLeft:"500px" ,color: "purple"}}>Counter Task end</p>
    </>
  );
}

export default App;