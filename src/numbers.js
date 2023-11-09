import React, { useState } from 'react';

function Numbers() {
  const [array, setArray] = useState([]);
  const [squareArray, setSquareArray] = useState([]);

  function performOperation(list, callback) {
    const squared = list.map(callback);
    setSquareArray(squared);
  }

  function compose(arr)
  {
    return function(result,pass)
    {
        result=0
        pass=0
      for (const childfunc of arr )
      {
        
        for (const x of array)
        {
           if (pass===0)
           {
           result=childfunc(x)
           } 
           else 
           {
            result=childfunc(result)
           }
        }
        pass=pass+1
       
      }
      alert(result)
      return result
    }

  }

 
  function Enter() {
    var a = document.getElementById('Input').value;
    var x = array.slice();
    x = x.concat(parseInt(a));
    setArray(x);
  }

  function square(num) {
    return num * num;
  }
  function double(num)
  {
    return num*2
  }

  function s()
  {
    var x=array.slice()
    performOperation(x,double)
  }

  function t()
  {
    var x=array.slice()
    performOperation(x,square)
  }
  
  const ttt=compose([square,double])
  return (
    <div className="App">
      <label>Enter the Number Into Array</label>
      <input type='number' id="Input" />
      <button onClick={Enter}>Submit</button>
      <p>Array: {array}</p>
      <button onClick={s}>Double</button>
      <button onClick={t}>Squared</button>
      <p>Result: {squareArray}</p>
      <p> compose: {ttt()}</p>
    </div>
  );
}

export default Numbers;
