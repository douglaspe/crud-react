import './Nav.scss'
import React from 'react'
import NavItem from './NavItem'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" link="/" text="Início" />
            <NavItem icon="users" link="/users" text="Usuários" />
        </nav>
    </aside>