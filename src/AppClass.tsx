import React, { Component, useState } from 'react';
interface AppFuncProps {
    emotion: string;
    Age?: number;
    Gender?: any;
  }

class AppClass extends Component<AppFuncProps>
{
    state={
        gender:"M",
        age:23
    }
    render() 
    {
        const { Age, Gender, emotion } = this.props;

        return(
            <>
            <h1>AGE :  {this.props.Age}{" "}
                emotion :  {emotion}
            </h1>
            </>
        )
    }
}

export default AppClass