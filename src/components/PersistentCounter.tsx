import React, { useState } from 'react';

const useLocalStorage = (key: string, initialValue: any) => {

  // useState with localStorage initialization
  const [value, setValue] = useState(() => {
    // Initialize from localStorage or use initialValue
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // setValue function that updates both state and localStorage
  const setStoredValue = (newValue: any) => {
    // Update both state and localStorage
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  };

  // return [value, setValue]
  return [value, setStoredValue];
};

// Component using the hook
const PersistentCounter: React.FC = () => {
  // Use your custom hook for count
  const [count, setCount] = useLocalStorage('count', 0);

  // Create increment function
  const incrementCount = () => setCount(count + 1);
  // Create decrement function
  const decrementCount = () => count > 0 ? setCount(count - 1) : 0;
  // Create reset function
  const resetCount = () => setCount(0);

  // Counter that remembers value after refresh
  return (
    <div className="p-6 max-w-sm mx-auto">

      <h2 className="text-2xl font-bold mb-4">Persistent Counter</h2>

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

export default PersistentCounter;
