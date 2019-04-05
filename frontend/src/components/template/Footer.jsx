import './Footer.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () =>
    <footer className="footer">
        <span>
            Desenvolvido com <FontAwesomeIcon icon="heart" className="text-danger" /> 
            <strong> React</strong>
        </span>
    </footer>    
