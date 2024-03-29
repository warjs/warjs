import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import getLocale from '../getLocale.js';
import styles from '../styles.css';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Components
import WpNavbar from './navbar.js';
import WpPost from './post.js';
import WpMenu from './menu.js';
import WpHome from './home.js';
import WpPage from './page.js';
import WpCategories from './categories.js';
import WpCategory from './category.js';
import WpBreadcrumbs from './breadcrumbs.js';
import WpTable from '../blocks/table.js';
const classNames = require('classnames');


export default class WpDecorator extends Component {
		
	constructor(props) {
		super(props);
		this.props = props;
		this.lang = getLocale();
	}


	render() {
		const { classes } = this.props;
		console.log(classes)
		return (
			<div className={ classes.decorator }>
			<Router>
				<WpNavbar theme={ this.props.theme } classes={ classes }>
					<WpMenu classes={ classes } />
					<Typography>
						<Link className={styles.navbar_link} to='/home/list:1'>{ this.lang.HOME.toUpperCase() }</Link>
					</Typography>
				</WpNavbar>
				<WpBreadcrumbs classes={ classes }/>
				<Grid className={ styles.grid_container } container spaces={ 8 }>
					<Grid className={ styles.subHeader } item xs={ 12 } sm={ 3 }>
						<WpCategories classes={ classes } />
					</Grid>
					<Grid item xs={ 12 } sm={ 6 }>
						<Route path='/home' component={WpHome} />
						<Route path='/post:id' component={WpPost} />
						<Route path='/page:id' component={WpPage} />
						<Route path='/category:id' component={WpCategory} />
					</Grid>
					<Grid item sm={3}></Grid>
				</Grid>
			</Router>
			</div>
		);
	}
}

