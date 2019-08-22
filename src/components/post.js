import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import getLocale from '../getLocale.js';
import styles from '../styles.css';
import getFontSize from "../getFontSize.js";
import { withRouter } from 'react-router-dom';

// Components
import WpApi2 from './newApi.js';

class WpPost extends Component {
	
	constructor(props) {
		super(props);
		this.props = props;
		this.storages = props.storages;
		this.home = (this.props.home)? 'HOME_POST' : 'POST_FOR_ID';
		this.lang = getLocale();
	}
	
	getPostId() {
		const id = window.location.href.match(/\d+$/);
		return (id)? parseInt(id[0]) : -1;
	}

	render() {
		this.id = (this.props.id)? this.props.id : this.getPostId();
		const element = (data, html) => {
			let title, content;
			if (data !== undefined) {
				title = data.title;
				content = data.content;
			}
			else {
				title = 404;
				content = this.lang.NO_CONTENT;
			}
			const fontSize = getFontSize(content);
			return (
				<div className={styles.post}>
					<Typography variant="h6" align="center">{ title }</Typography>
					<Typography variant={fontSize}>{ html(content) }</Typography>
				</div>
			);
		};
		return (
			<div className={styles.post}>
				<WpApi2 
					get={this.home}
					item={this.id}
					element={element}
				/>
			</div>
		);
	}
}

export default withRouter(WpPost);
