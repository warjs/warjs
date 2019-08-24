import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class WpTable extends Component {
  
	constructor(props) {
		super(props);
		this.props = props;
	}

	getRows( head ) {
		this.head = head;
		const result = [];
		const { rows } = this.props;
		for (let i = 0; rows[i]; i ++) {
			const TableElement = ( head ) ? TableHead : TableBody;
			this.h = ( head ) ? 'head' : '';
			this.i = i;
			if ( ( this.head && this.i === 0 ) || ( !this.head && this.i !== 0 ) ) {
				result.push(
					<TableElement key={ `row-${ i }-${ this.h }` }>
						<TableRow>
							{ this.getCells( rows[i] ) }
						</TableRow>
					</TableElement>
				);
			}
		}
		return result;
	}

	getCells( row ) {
		const result = [];
		for ( let index = 0; row[index]; index ++ ) {
			result.push(
				<TableCell key={ `cell-${index}${ this.h }` } align="right">{ row[index] }</TableCell>
			)
		}
		if ( result.length > 0 ) {
			return result;
		}
	}

	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<Table 
					className={classes.table}
				>
					{ this.getRows( true ) }  
					{ this.getRows() }
				</Table>
			</Paper>
		);
	}
}

WpTable.propTypes = {
	classes: PropTypes.object.isRequired,
	rows: PropTypes.array.isRequired
}

export default WpTable;
