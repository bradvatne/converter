import React from 'react';

export default function Output(props) {
    console.log(props.output);
    return (
      <h1>{props.output}</h1>
        
    )
}