import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/core/store/store';
import {
  UsersView
} from './app/features/users-view.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}>
    <UsersView/>
  </Provider>
);