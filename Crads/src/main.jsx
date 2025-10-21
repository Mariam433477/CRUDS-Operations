 
import { createRoot } from 'react-dom/client'
 
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { Provider } from 'react-redux';
import MainLayout from './Layout/MainLayout';
import { store } from './store/index';

createRoot(document.getElementById('root')).render(
 <Provider store={store}> <MainLayout/></Provider>
  
  
)
