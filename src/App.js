import React from 'react';
import CounterComponent from './CounterComponent';

function App(props){
  var a=5;
  return(
     <div style={{padding: '15px'}}>
      <h3 className="Padded">this is {props.componentName}</h3>
      <CounterComponent componentName={"Functional name"} intialValue={"5"} />
      
     </div>
  );
}
export default App;
