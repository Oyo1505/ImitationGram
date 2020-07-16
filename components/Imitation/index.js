import React from 'react';
import Timeline from './TimeLine';
import Header from './Header';

class ImitationGramApp extends React.Component {

    render() {
        return (
            <div id="imitation-app">
           	 <div style={{ height: "5vh" }} className="container-imitation valign-wrapper">
				<Header  />
                <Timeline />
				</div>	
			</div>
        );
    }
}



export default ImitationGramApp;