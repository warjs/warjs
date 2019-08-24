import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles.css';


class WpLink extends Component {

  constructor( props ) {
    super( props );
    this.props = props;
  }

  render() {
    const { to, body } = this.props;
		let userClasses = this.props.classes;
		userClasses.link = ( userClasses.link ) ? userClasses.link : 'wprdefault'; 
		const classes = {
			[ userClasses.link ]: true,
			[ styles.link ]: true
		}
    return (
      <Link className={ styles.link } to={ to }>{ body } </Link>
    );
  }
}

WpLink.propTypes = {
  to: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
	classes: PropTypes.string.isRequired
};

export default WordpressLink;
