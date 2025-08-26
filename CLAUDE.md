# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**
```bash
npm run dev
```
Runs Next.js with Turbopack for fast development at http://localhost:3000

**Build and production:**
```bash
npm run build    # Build with Turbopack
npm start        # Start production server
```

**Code quality:**
```bash
npm run lint     # Run ESLint
npx tsc --noEmit # TypeScript type checking
```

## Architecture

This is a Next.js 15 application using the App Router with TypeScript and Tailwind CSS v4.

**Key structure:**
- `src/app/` - App Router pages and layouts
- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components (Button, Card)
- `src/lib/utils.ts` - Utility functions including Tailwind class merging

**UI Framework:**
- **shadcn/ui** configured with "new-york" style and neutral base color
- Uses Lucide icons and CSS variables for theming
- Components are added via `npx shadcn@latest add [component]`
- Aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

**Current Application:**
- Simple tic-tac-toe game built with React hooks and shadcn/ui components
- Main game logic in `src/components/TicTacToe.tsx` using client-side state
- Responsive design with gradient backgrounds

**Technology Stack:**
- Next.js 15 with Turbopack
- React 19
- TypeScript 5
- Tailwind CSS v4
- Radix UI primitives via shadcn/ui