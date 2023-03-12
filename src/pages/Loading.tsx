import React from 'react'

import logo from '../images/loading.gif';

const Loading = () => {
    return (
        <section className="loading flex-centered">
            <img className="loading__logo" src={logo} alt="loading logo" />
            <p className="loading__body blinking">
                Loading data for you..
            </p>
        </section>
    );
}

export default Loading;