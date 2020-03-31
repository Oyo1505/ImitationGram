import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Timeline from './TimeLine';



class ImitationGramApp extends React.Component {

    render() {
        return (
            <div id="imitation-app">
           	 <div style={{ height: "5vh" }} className="container valign-wrapper">
				<Header  />
                <Timeline />
				</div>	
			</div>
        );
    }
}



export default ImitationGramApp;