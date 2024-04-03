

 
import React from 'react';


const Task3 = ({ let1, let2, let3 }) => {
 let text = "";

    if(let1 === let2  && let2 === let3 && let1 === let3){
      text = "Emoji All are is same "
    }else{
      text = "Emoji is NOT same"
    }
  return (
    <>
    <div style={{backgroundColor:"gray",height:"300px",width:"900px", fontSize:"70px ",margin:"auto"}}>
      <div>{let1}</div>
      <div>{let2}</div>
      <div>{let3}</div>
    </div>
    </>
  );
};

export default Task3;