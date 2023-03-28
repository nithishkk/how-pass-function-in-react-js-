import React from "react";
import "./style.css";
import Nithish from './Nithish'


export default function App() {
  const[data,setData]=React.useState("")


  const Add = React.useCallback((a,b) => {
    const c =a+b;
    return c
    
  }, []);
  React.useEffect(()=>{
    setData(Add(2,3))
  },[])
  // function Add(a,b){
  //   const c = a+b
  //   return c

  // }
  
  //  React.useEffect(()=>{
  //    setData(Add(1,22))
  //  },[])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
    
      {Add(1,23)}
      <p>Start editing to see some magic happen :)</p>
      {data}
    </div>
  );
}
