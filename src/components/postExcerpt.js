import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import styles from '../styles.css';
import getLocale from '../getLocale.js';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

// Components
import WpApi2 from './newApi.js';


export default class WpPostExcerpt extends Component {
	
	constructor(props) {
		super(props);
		this.props = props;
		this.iconMore = <ExpandMoreIcon onClick={ this.getFull } />;
		this.iconLess = <ExpandLessIcon onClick={ this.getExcerpt } />;
		this.state = {
			full: false,
			iconTop : this.iconMore,
			iconBottom : ''
		};
		this.storages = props.storages;
		this.id = props.id;
		this.lang = getLocale();
	}

	getExcerpt = () => {
		this.setState( { full: false } );
		this.setState( { iconTop: this.iconMore } );
		this.setState( { iconBottom: '' } );
	}

	getFull = () => {
		this.setState( { full: true } );
		this.setState( { iconTop: this.iconLess } );
		this.setState( { iconBottom: this.iconLess } );
	};

	render() {
		const element = (data, html) => {
			let title, content, fullContent;
			if (data !== undefined) {
				title = data.title;
				content = data.excerpt.replace( '[&hellip;]', '...' );
				fullContent = data.content;
			}
			else {
				title = 404;
				content = this.lang.NO_CONTENT;
			}
			return (
				<div>
					<Link className={ styles.link } to={ `/post:${this.id}` }><Typography variant="h6">{ title }  { this.state.iconTop }</Typography></Link>
					<Typography>{ this.state.full? html(fullContent) : html(content) }{ this.state.iconBottom }</Typography>
				</div>
			);
		};
		return (
			<div>
				<WpApi2 
					get={ 'POST_FOR_ID' }
					item={ this.id }
					element={ element }
				/>
			</div>
		);
	}
}

WpPostExcerpt.propTypes = {
	id: PropTypes.number.isRequired,
};
