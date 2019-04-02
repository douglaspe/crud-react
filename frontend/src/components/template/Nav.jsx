import './Nav.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                {/* Refatorar! */}
                <FontAwesomeIcon icon="home" /> Início
            </Link>
            <Link to="/users">
                <FontAwesomeIcon icon="users" /> Usuários
            </Link>
        </nav>
    </aside>