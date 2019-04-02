import './Header.scss'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => 
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <FontAwesomeIcon icon={`${props.icon}`} />
            <p className="lead text-muted">{props.subtitle}</p>
        </h1>
    </header>