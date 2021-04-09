import React from 'react';
import config from '../resources/config.json';

const axios = require('axios');

export default function Resources() {
    return <React.Fragment>
        {
            this.state.links.map(link =>
                axios.get('http://api.linkpreview.net/?key=' + config.linkPreviewKey + '&q=' + link)
            )
        }
    </React.Fragment>;
}