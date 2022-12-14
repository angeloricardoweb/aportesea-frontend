import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "swiper/css/bundle";
import './styles/index.scss'
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
)
