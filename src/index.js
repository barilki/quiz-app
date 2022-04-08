import React from 'react';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);