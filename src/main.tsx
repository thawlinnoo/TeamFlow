import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Unable to start TeamFlow: element with ID "root" was not found.');
}

const root = createRoot(rootElement);
root.render(<App />);
