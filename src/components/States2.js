import React,{useState} from 'react'

const States2 = () => {

  let [count,setCount] = useState(0);

  function increase(){
     setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
 }
 function reset(){
  setCount(0);
}
  return (
    <div className="States2">

      <h1>Hey value is : {count}</h1>
      <div className='buttons'>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default States2