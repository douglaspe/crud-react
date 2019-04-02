import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUsers, faPen, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

library.add(faHome, faUsers, faPen, faTrash, faHeart);

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
