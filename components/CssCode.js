import React from 'react';
import CssFilter from './CssFilter';
 class CssCode extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {

		console.log(this.props.styleFilters);
		if(this.props.styleFilters){
		var filters = this.props.styleFilters.map(function(filter){
				return (<CssFilter filter={filter} key={`css-filter-panel-${filter.id}`} />)
			})
		}
		return (
			<div id='code-block'>
				
				<code> 

					figure 
					{`\{\0

\t position:relative;
 `}
<br />
	{`\t`} -webkit-filter: {filters};
	<br />
	filter: {filters};
	<br />
	{'\}\0'}
	<br />
	<br />
	figure::before{`\{\0 `}

				{'\}\0'}
					
				</code>

			</div>
		);
	}
}
export default CssCode;