import React from 'react';


class Splash extends React.Component {

    render () {
        return (
            <div className="splash">
                <img className="background-pic" src={window.splashBackground} />
                <p></p>
            </div>
        )   
    }
}

export default Splash;