import React, { Component } from 'react';
import { analyzeUrl } from '../helper.js';
import styles from '../styles.css';

// Components
import WpApi2 from './newApi.js';

export default class WpPage extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
		this.id = analyzeUrl('page:');
		const element = (data, html) => {
			return (
				<div className={styles.page}>{data.title}{html(data.content)}</div>
			);
		}
    return (
      <div>
				<WpApi2
					get={'PAGE_FOR_ID'}
					item={this.id}
					element={element}
				/>
			</div>
    );
  }
}

