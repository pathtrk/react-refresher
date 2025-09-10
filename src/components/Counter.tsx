import React, { useState } from 'react';

interface CounterProps {
  // Add props interface
  count: number;
}

const Counter: React.FC<CounterProps> = () => {
  // Add useState hook for counter state
  const [count, setCount] = useState(0);
  // Create increment function
  const incrementCount = () => setCount(count + 1);
  // Create decrement function
  const decrementCount = () => count > 0 ? setCount(count - 1) : 0;
  // Create reset function
  const resetCount = () => setCount(0);

  return (
    <div>
      {/* Add counter display */}
      <p> Count: { count } </p>
      <div id="buttonGroup">
        {/* Add increment button */}
        <button onClick={incrementCount}> Increment </button>
        {/* Add decrement button */}
        <button onClick={decrementCount}> Decrement </button>
        {/* Add reset button */}
        <button onClick={resetCount}> Reset </button>
      </div>
    </div>
  );
};

export default Counter;
