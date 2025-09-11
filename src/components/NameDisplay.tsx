import React, { useState, type ChangeEvent } from 'react';

const NameDisplay: React.FC = () => {
  // useState for name
  const [name, setName] = useState("Name Display");
  // controlled input with onChange
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const resetInput = () => setName("");

  // display current value
  return (
    <div className="p-6 max-w-md mx-auto" id="nameDisplay">
      <p className="text-2xl font-bold mb-4"> { name } </p>
      <input type="text" onChange={handleInput} value={name}/>
      <button onClick={resetInput}> Clear </button>
    </div>
  );
};

export default NameDisplay;
