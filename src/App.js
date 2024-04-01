
import './App.css';
import App2 from './componats/Task1';
import Card1 from './componats/Card1';
import keni from'../src/Aset/img1.jpg';
import Data from './Data';

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

function App() {
  return (
    <>
      <p className='font-serif  text-6xl h-24 mt-6 text-center'>card demo with props start</p>
    <div className='App'>
      <div style={{ display :'flex',justifyContent:'center'}}>
        {Data.map((cvalue, ind,arr) =>{
          console.log(cvalue,"cvalue")
      return<Card1 key={ind} name={cvalue.name} bname={cvalue.bname} bname1={cvalue.bname1}  des={cvalue. des} fname={cvalue.fname}  img={cvalue. img}/>
       })}
      </div>
      </div>
    <div className='App2'>
      <div style={{ display :'flex',justifyContent:'center'}}>
        {Data.map((cvalue, ind,arr) =>{
          console.log(cvalue,"cvalue")
      return<Card1 key={ind} name={cvalue.name} bname={cvalue.bname} bname1={cvalue.bname1}  des={cvalue. des} fname={cvalue.fname}  img={cvalue. img}/>
       })}
      </div>
      </div>
      <p className='font-serif  text-6xl h-24 mt-6 text-center'>card demo with props end</p>
  </>
  );
}
export default App;