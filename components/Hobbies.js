import React, {Fragment, Component } from 'react';
import HobbiesItems from './HobbiesItems';

class Hobbies extends Component {
    render() {
        return (
        	<Fragment>
        	 <p className="meta-title">Mes passions</p>
            <div className="hobbies">

				<HobbiesItems />
			</div>
			</Fragment>
        );
    }
}
export default Hobbies