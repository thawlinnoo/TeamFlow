# TeamFlow

TeamFlow has a React + TypeScript board for organizing team workspaces, boards, and tasks. The original static HTML/CSS prototype is preserved in `prototype/`.

## Prerequisites

- Node.js 22.12 or newer, with npm
- Git

## Installation

```bash
git clone https://github.com/thawlinnoo/TeamFlow.git
cd TeamFlow
npm install
```

## Development

Start the React app:

```bash
npm run dev
```

Open the board at [http://localhost:5173/](http://localhost:5173/).

Keep the terminal running while using the app. Press `Ctrl+C` to stop the server.
If Vite uses a different port, use the URL shown in the terminal.

### Static prototype

Start the preserved static prototype:

```bash
npm run dev:prototype
```

Use the URL shown in the terminal and add `/board.html` to open the prototype board.

## Build

```bash
npm run build
```

This checks TypeScript and builds the client for production in `dist/`.
