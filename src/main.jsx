import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// State Management
import { Provider } from 'react-redux';
import store from './context/store';


createRoot(document.querySelector('#root'))
  .render(
    <Provider store={store}>
      <App />
    </Provider>
  );
