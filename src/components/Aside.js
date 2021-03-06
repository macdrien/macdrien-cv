import {Component} from 'react';
import PropTypes from 'prop-types';
import {doesExists} from "../tools";

import ReactMarkdown from "react-markdown";

import './Aside.css';

class Aside extends Component {
    PropTypes = {
        children: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            list: PropTypes.arrayOf(PropTypes.string),
        })).isRequired,
    };

    buildTextBlock(element, key, isFirst = false) {
        return <div
            className={`asideSection ${isFirst ? 'firstAsideSection' : ''}`}
            key={key}
        >
            <h5 className='asideTitle'>{element.title}</h5>
            <ReactMarkdown className='asideContent'>{element.text}</ReactMarkdown>
        </div>;
    }

    buildListBlock(element, key, isFirst = false) {
        return <div
            className={`asideSection asideList ${isFirst ? 'firstAsideSection' : ''}`}
            key={key}
        >
            <h5 className='asideTitle asideListTitle'>{element.title}</h5>
            <div className='asideContent asideListContent'>
                <ul>
                    {element.list.map((element, index) => <li key={index}>- {element}</li>)}
                </ul>
            </div>
        </div>;
    }

    render() {
        return <aside>
            <h4>Informations</h4>

            <div className='subSections'>
                {this.props.children.map((child, index) => {
                    if (doesExists(child.text))
                        return this.buildTextBlock(child, index, index === 0);
                    else if (doesExists(child.list))
                        return this.buildListBlock(child, index, index === 0);
                    else
                        return '';
                })}
            </div>
        </aside>
    };
}

export default Aside;