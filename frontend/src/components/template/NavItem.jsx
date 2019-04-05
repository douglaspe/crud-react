import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => 
    <Link to={props.link}>
        <FontAwesomeIcon icon={props.icon} /> {props.text}
    </Link>