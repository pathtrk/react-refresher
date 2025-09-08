# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

- Use placeholders/comments for exercises and illustrations of outlines
- This repo is a learning material to follow the following guide: "Efficient Learning Strategy for Freelancers"


## Efficient Learning Strategy for Freelancers

### **Time-Boxed Learning (15-30 minute chunks)**
```
Day 1: 30 min - Simple Counter (useState refresher)
Day 2: 30 min - Todo List (arrays + map)
Day 3: 30 min - Custom Hook (modern pattern)
Day 4: 30 min - Connect to your threat tool
```

### **Focus on High-Impact Skills Only**
Skip these for now:
- ❌ Complex state management (Redux, Zustand)
- ❌ Advanced performance optimization
- ❌ Complex animations
- ❌ Testing (initially)

Focus on these essentials:
- ✅ `useState`, `useEffect`
- ✅ Custom hooks (most important modern skill)
- ✅ TypeScript integration
- ✅ API calls (`fetch` in `useEffect`)

### **"Just-In-Time" Learning Approach**

**Week 1 (2 hours total):** Core React refresher
- 4 × 30-minute sessions
- Build: Counter → Simple Todo → Custom Hook → Basic API call

**Week 2 (2-3 hours total):** Apply to your project
- Integrate React components with threat analysis
- **This becomes a portfolio piece for client work**

**Week 3+:** Add features as needed for demos/clients

## Freelancer-Specific Benefits

**This threat modeling tool helps your freelancing:**
1. **Portfolio piece** - Shows security expertise to clients
2. **Networking tool** - Demo at security meetups/conferences
3. **Time efficient** - Learn React while building something useful
4. **Revenue potential** - Could become a paid product later

## Practical Schedule

**Option A: Daily chunks (Recommended)**
```
Mon: 30min - Counter component
Wed: 30min - Todo list
Fri: 30min - Custom hook
Sun: 30min - Connect to threat tool
```

**Option B: Weekend intensive**
```
Saturday: 2 hours total
Sunday: 1 hour polish + deploy
```

**Option C: Between client projects**
```
When you finish client work early → 30min React practice
```

## Efficient Learning Tips

1. **Code along, don't just read** - 30 minutes coding > 2 hours reading
2. **Build immediately** - Each session produces working code
3. **Focus on patterns** - Learn useState once, apply everywhere
4. **Use what you build** - This tool could help your security consulting

## Bottom Line

**2-4 hours total investment** gets you:
- ✅ Modern React skills refreshed
- ✅ Working threat modeling tool
- ✅ Portfolio piece for freelance work
- ✅ Networking conversation starter

**ROI:** High-value skill refresh + potential business tool in minimal time.

## Development Commands

This is a Vite + React + TypeScript project. Use these commands:

```bash
npm run dev      # Start development server
npm run build    # Build for production (runs TypeScript check + Vite build)
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## Project Structure

- `src/components/` - React components for daily practice exercises
- Each day focuses on a specific React concept with placeholder-based exercises
- Components use TypeScript interfaces and modern React patterns
- Follow the time-boxed learning approach: 30-minute focused sessions

## Architecture Notes

- **Vite-based** React setup with TypeScript
- **Component-based** learning structure
- **Placeholder-driven** exercises to encourage hands-on coding
- Built for **incremental learning** - each day builds on the previous
- Designed to become a **threat modeling tool** as the final outcome