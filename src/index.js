import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'

const RootComponent = () => {
  return (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootComponent />);
