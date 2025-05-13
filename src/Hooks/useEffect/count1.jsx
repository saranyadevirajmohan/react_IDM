
import React,{ useState ,useEffect} from "react";

 export default function Timer() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[count]);
  
    return <h1>I have rendered {count} times!</h1>;
  }