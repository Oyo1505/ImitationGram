import React from 'react';
import PropTypes from 'prop-types';
import Timeline from './TimeLine';
import Header from './Header';



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