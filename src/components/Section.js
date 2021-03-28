import { Component } from 'react';
import PropTypes from 'prop-types';
import { doesExists } from "../tools";
import Article from "./Article";

class Section extends Component {
    Proptypes = {
        title: PropTypes.string.isRequired,
        articles: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            subtitle: PropTypes.string,
            text: PropTypes.string,
            information: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                text: PropTypes.string,
                list: PropTypes.arrayOf(PropTypes.string),
            })),
        })),
    };

    render() {
        return <section>
            <h2>{this.props.title}</h2>
            {
                doesExists(this.props.articles) && this.props.articles.length > 0 ?
                    this.props.articles.map((article, index) => <Article {...article} key={index}/>) :
                    ''
            }
        </section>;
    };
}

export default Section;