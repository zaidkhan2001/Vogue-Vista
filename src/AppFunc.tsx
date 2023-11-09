import React, { useState } from 'react';

interface AppFuncProps {
  emotion: string;
  Age?:number
  Gender?:any
}

function AppFunc(obj:AppFuncProps) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(15);
  const [isMale, setIsMale] = useState(true);
 
  return (
    <div>
      <h1>Hello World</h1>
      <h1>My name is {name}</h1>
      <h1>I am  {obj.Age} years old</h1>
      <h3>I am {obj.Gender}</h3>
      <h4>I am feeling {obj.emotion} </h4>
    </div>
  );
}

export default AppFunc;
