import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import { doesExists } from "../tools";
import Aside from "./Aside";

class Article extends Component {
    Proptypes = {
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        text: PropTypes.string.isRequired,
        information: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            text: PropTypes.string,
            list: PropTypes.arrayOf(PropTypes.string),
        })),
    };

    render() {
        return <article>
            <div className="mainArticlePart">
                <h3>{this.props.title}</h3>
                {doesExists(this.props.subtitle) ? <h4>{this.props.subtitle}</h4> : ''}
                <ReactMarkdown>{this.props.text}</ReactMarkdown>
            </div>
            <Aside children={this.props.information}/>
        </article>
    }
}

export default Article;