import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <div>
      Counter
      <Counter initCount={7}/>
      Counter Hooks
      <CounterHooks initCount={0}/>
    </div>
    
  );
}

export default App;
