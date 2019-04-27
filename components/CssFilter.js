import React, {Fragment} from 'react';

class CssFilter extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var filter = this.props.filter;
		return (
			<Fragment>{filter.name}({filter.value}{filter.type}) </Fragment>
		);
	}
}

export default CssFilter;