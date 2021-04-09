import React from 'react';
import config from '../resources/config.json';
import links from '../resources/links.json';

const axios = require('axios');

export default function Resources() {
    return <React.Fragment>
        {
            links.map(link =>
                axios.get('http://api.linkpreview.net/?key=' + config.linkPreviewKey + '&q=' + link)
            )
        }
    </React.Fragment>;
}