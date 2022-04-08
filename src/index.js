import React from 'react';
import "../node_modules/@mdi/font/css/materialdesignicons.min.css";
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import App from './App';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);