import React, { useState, type ChangeEvent, type KeyboardEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string;
  todo: string;
}

const SimpleTodo: React.FC = () => {
  // useState for todos array
  const [todos, setTodos] = useState<Todo[]>([]);

  // useState for current input
  const [newTodo, setNewTodo] = useState<Todo>({id: uuidv4(), todo: ''});
  const inputTodo = (event: ChangeEvent<HTMLInputElement>) => setNewTodo({...newTodo, todo: event?.target.value })

  // addTodo function
  const addTodo = () => {
    if (newTodo.todo) {
      setTodos([...todos, newTodo]);
      setNewTodo({id: uuidv4(), todo: ''});
    }
  }
  const enterKeyAdd = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') addTodo();
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Simple Todo</h2>
      <ul>
        {/* render todos with map() */}
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
        ))}
      </ul>
      <input type="text" onChange={inputTodo} onKeyDown={enterKeyAdd} placeholder="New todo" value={newTodo.todo} />
      <button onClick={addTodo}> Add </button>
    </div>
  );
};

export default SimpleTodo;
