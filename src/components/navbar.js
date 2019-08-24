import React, { Component } from 'react';
import getLocale from '../getLocale.js';
import styles from '../styles.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// Components
import WpMenu from './menu.js';
import WpLink from './link.js';

export default class WpNavbar extends Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.lang = getLocale();
	}

	render() {
		const position = (this.props.position)? this.props.position : 'static';
		const color = (this.props.color)? this.props.color : 'primary';
		const { classes } = this.props;
		const { theme } = this.props;
		const classList = `${ styles.navbar_root } ${ classes.navbar }`;
		return (
			<AppBar className={ classList } position="fixed" color={this.props.color}>
				<Toolbar>
					{ this.props.children }
				</Toolbar>
			</AppBar>
		);
	}
}
