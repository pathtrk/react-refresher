
# 30-Minute Daily React Refresher Plan

> **Goal**: Refresh React skills for building a threat modeling tool
> **Time**: 30 minutes per day for 4 days
> **Focus**: Modern React patterns with TypeScript

## Overview

This plan is designed for freelancers who want to efficiently refresh React skills while building something useful. Each session is exactly 30 minutes and produces working, testable code.

---

## Day 1 (Monday): Counter Component - useState Refresher

**Goal**: Remember React basics
**Time**: 30 minutes
**Skills**: `useState`, event handlers, JSX

### Your Mission
Build a working counter with increment, decrement, and reset functionality.

```typescript
const Counter: React.FC = () => {
  // TODO: Add useState for count
  // TODO: Add increment function
  // TODO: Add decrement function
  // TODO: Add reset function
  // TODO: JSX with buttons

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      {/* Your code here */}
    </div>
  );
};
```

### Success Criteria
- ✅ Display current count
- ✅ + button increments count
- ✅ - button decrements count
- ✅ Reset button sets count to 0
- ✅ No console errors

### Session Structure (30 min)
- **0-5 min**: Set up component file
- **5-25 min**: Code and build
- **25-30 min**: Test functionality

---

## Day 2 (Tuesday): Input Display - Controlled Components

**Goal**: Master controlled components pattern
**Time**: 30 minutes
**Skills**: Controlled inputs, real-time updates

### Your Mission
Create an input field that displays text in real-time as you type.

```typescript
const NameDisplay: React.FC = () => {
  // TODO: useState for name
  // TODO: controlled input with onChange
  // TODO: display current value

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Name Display</h2>
      {/* Your code here */}
    </div>
  );
};
```

### Success Criteria
- ✅ Input field updates state on every keystroke
- ✅ Display shows current input value
- ✅ No lag between typing and display
- ✅ Clear button empties input and display

### Bonus Challenge
Add character count display and input length validation.

---

## Day 3 (Wednesday): Simple Todo - Arrays & Map

**Goal**: Array manipulation and rendering lists
**Time**: 30 minutes
**Skills**: Array state, `map()`, adding items

### Your Mission
Build a todo list where you can add items and see them displayed.

```typescript
const SimpleTodo: React.FC = () => {
  // TODO: useState for todos array
  // TODO: useState for current input
  // TODO: addTodo function
  // TODO: render todos with map()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Simple Todo</h2>
      {/* Your code here */}
    </div>
  );
};
```

### Success Criteria
- ✅ Add items to todo list
- ✅ Display all todos
- ✅ Input clears after adding
- ✅ Enter key adds todo
- ✅ Each todo has unique key prop

### Key Patterns to Practice
```typescript
// Adding to array
setTodos([...todos, newTodo]);

// Rendering with map
{todos.map((todo, index) => (
  <div key={index}>{todo}</div>
))}
```

---

## Day 4 (Thursday): Custom Hook - Modern React

**Goal**: Extract reusable logic
**Time**: 30 minutes
**Skills**: Custom hooks, localStorage integration

### Your Mission
Create a `useLocalStorage` hook and use it in a persistent counter.

```typescript
// Custom hook
const useLocalStorage = (key: string, initialValue: any) => {
  // TODO: useState with localStorage initialization
  // TODO: setValue function that updates both state and localStorage
  // TODO: return [value, setValue]
};

// Component using the hook
const PersistentCounter: React.FC = () => {
  // TODO: Use your custom hook for count
  // TODO: Counter that remembers value after refresh

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Persistent Counter</h2>
      {/* Your code here */}
    </div>
  );
};
```

### Success Criteria
- ✅ Counter persists after page refresh
- ✅ Custom hook works with any key/value
- ✅ No localStorage errors in console
- ✅ Hook follows React naming conventions (`use...`)

### Custom Hook Pattern
```typescript
const useLocalStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => {
    // Initialize from localStorage or use initialValue
  });

  const setStoredValue = (newValue: any) => {
    // Update both state and localStorage
  };

  return [value, setStoredValue];
};
```

---

## Weekend Bonus (Optional)

### Saturday (30 min): Connect to Threat Tool
Take one of your components and integrate it with the threat modeling logic.

### Sunday (30 min): Deploy to Vercel
Deploy your components to see them live and shareable.

---

## Key Learning Outcomes

After completing this plan, you'll have refreshed:

### Core React Patterns
- ✅ **useState**: Single values and arrays
- ✅ **useEffect**: With dependencies and cleanup
- ✅ **Custom hooks**: Extracting reusable logic
- ✅ **Event handling**: Modern patterns with TypeScript

### Modern React Skills
- ✅ **Function components**: No class components needed
- ✅ **TypeScript integration**: Proper typing for props and state
- ✅ **Controlled components**: Form handling patterns
- ✅ **List rendering**: Arrays and keys

### Practical Patterns
- ✅ **State updates**: Immutable patterns
- ✅ **Local storage**: Persisting data
- ✅ **Performance**: When to use `useMemo` and `useCallback`
- ✅ **Code organization**: Separating logic into hooks

---

## Tips for Success

### Time Management
- **Set a timer**: Stick to exactly 30 minutes
- **Focus on completion**: Working code > perfect code
- **No rabbit holes**: Save optimization for later

### Learning Efficiency
- **Type everything**: Don't copy-paste, build muscle memory
- **Test immediately**: Verify each feature works
- **Build incrementally**: Add one feature at a time

### Troubleshooting
- **Console first**: Check browser console for errors
- **React DevTools**: Install and use for debugging
- **TypeScript errors**: Pay attention to type errors

---

## Next Steps

After completing this refresher:

1. **Week 2**: Apply these patterns to your threat modeling tool
2. **Week 3**: Add visual enhancements and better UI
3. **Week 4**: Integrate LLM enhancement APIs
4. **Beyond**: Deploy and use for networking/business development

---

## Resources

### Quick References
- [React Hooks Documentation](https://react.dev/reference/react)
- [TypeScript + React Cheatsheet](https://github.com/typescript-cheatsheets/react)
- [Tailwind CSS Classes](https://tailwindcss.com/docs)

### Tools You'll Need
- Node.js (latest LTS)
- VS Code with React/TypeScript extensions
- Chrome with React DevTools extension

---

**Remember**: Consistency beats perfection. 30 minutes daily for 4 days will give you more progress than a single 2-hour session. Good luck! 🚀
