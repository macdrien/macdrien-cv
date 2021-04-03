import React from 'react';
import {Link} from 'react-router-dom';
import pdfIcon from '../images/pdf_icon.png';
import PropTypes from 'prop-types';

import './Menu.css';

export default class Menu extends React.Component {
    PropTypes = {
        openCVModal: PropTypes.func.isRequired,
    };

    render() {
        return <nav>
            <ul>
                <li><Link to='/'>Acceuil</Link></li>
            </ul>
            <div onClick={this.props.openCVModal}>
                <img src={pdfIcon} alt='PDF icon to my CV'/>
            </div>
        </nav>;
    }
}