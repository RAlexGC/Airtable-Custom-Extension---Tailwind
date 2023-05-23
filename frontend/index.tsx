import {initializeBlock} from '@airtable/blocks/ui';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/index.scss';
import './styles/tailwind.css';
import App from './components/App';

initializeBlock(() => <App/>);