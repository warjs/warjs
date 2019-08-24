import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
const request = require('request');


const allPages = 'ALL_PAGES';
const allPosts = 'ALL_POSTS';
const allCategories = 'ALL_CATEGORIES';
const pagesList = 'PAGES_LIST';
const postsList = 'POSTS_LIST';
const categoriesList = 'CATEGORIES_LIST';
const postForId = 'POST_FOR_ID';
const pageForId = 'PAGE_FOR_ID';
const categoryForId = 'CATEGORY_FOR_ID';
const allLists = 'ALL_LISTS';
const homePost = 'HOME_POST';

class WpApi2 extends Component {
	
	constructor(props) {
		super(props);
		this.props = props;
		this.origin = window.location.origin;
		this.state = {
			ready: false,
			data: {}
		};
	}

	getPost = (home) => {
		const { item } = this.props;
		const fileName = (home)? 'post_home.json' : `post_${item}.json`;
		const link = `${this.origin}/storage/posts/${fileName}`;
		const result = this.requestGet(link);
		return result;
	}

	getCategory = () => {
		const { item } = this.props;
		const link = `${this.origin}/storage/categories/category_${item}.json`;
		const result = this.requestGet(link);
		return result;
	}

	getPage = () => {
		const { item } = this.props;
		const link = `${this.origin}/storage/pages/page_${item}.json`;
		const result = this.requestGet(link);
		return result;
	};

	getList = (selector) => {
		const { item } = this.props;
		const link = `${this.origin}/storage/${selector}.json`;
		const result = this.requestGet(link);
		return result;
	}

	requestGet(link) {
		const res = new Promise((resolve, reject) => {
			request(link, (error, response, body) => {
				if (error) {
					reject(error);
				}
				this.setState((state, props) => {
					if (state.data !== body) {
						return {data: body};
					}
				})
				resolve(body);
			});
		});
	}

	dangerousHTML(content) {
		return <sup dangerouslySetInnerHTML={{__html: content.toString("utf-8")}} />;
	}

	selectRequest() {
		const { get } = this.props;
		this.rt = {};
		switch(get) {
			case pageForId:
				this.rt = this.getPage();
				break;
			case postForId:
				this.rt = this.getPost();
				break;
			case homePost:
				this.rt = this.getPost(true);
				break;
			case postsList:
				this.rt = this.getList('posts');
				break;
			case pagesList:
				this.rt = this.getList('pages');
				break;
			case categoriesList:
				this.rt = this.getList('categories');
				break;
			case categoryForId:
				this.rt = this.getCategory();
				break;
			default:
				throw `Default parameter get ${get}`;
		}
	}

	componentDidUpdate() {
		this.selectRequest();
	}

	componentDidMount() {
		this.selectRequest()
	}

	render() {
		const Progress = () => {
			return (
				<React.Fragment>
					<CircularProgress />
				</React.Fragment>
			)
		}
		return (
			<div>
				{ (typeof this.state.data === 'string')? this.props.element(JSON.parse(this.state.data), this.dangerousHTML) : <Progress /> } </div>
		);
	}
}

WpApi2.propTypes = {
	get: PropTypes.string.isRequired,
	item: PropTypes.number,
};

export default withRouter(WpApi2);
