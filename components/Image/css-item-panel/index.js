import React, {Fragment} from 'react';

class CssFilter extends React.Component {

	render() {
		var filter = this.props.filter;
		return (
			<Fragment>{filter.name}({filter.value}{filter.type}) </Fragment>
		);
	}
}

export default CssFilter;