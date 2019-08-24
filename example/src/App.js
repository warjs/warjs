import React, { Component } from 'react';
import { WpDecorator } from 'reactlibrary';
import { withStyles } from '@material-ui/core/styles';

const useClasses = {
	decorator: 'dsaa343',
	navbar: 'gfgfh2',
	breadcrumbs: 'fdf34353434sdfd'
}

const styles = {
	[ useClasses.decorator ]: {
		//color: "yellow"
	},
	[ useClasses.navbar ]: {
		//height: "500px"
	},
	[ useClasses.breadcrumbs ]: {
		//height: "500px"
	}
};


class App extends Component {
  
	constructor(props) {
		super(props);
		this.props = props;
	}
	render () {
		const propClasses = this.props.classes;
		const classes = {
			decorator: propClasses[ useClasses.decorator ],
			navbar: propClasses[ useClasses.navbar ],
			breadcrumbs: propClasses[ useClasses.breadcrumbs ]
		};
    return (
      <WpDecorator classes={ classes } />
    );
  }
}

export default withStyles(styles)(App)

