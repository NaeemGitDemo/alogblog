import React from 'react';
import { Link } from 'react-router-dom'

class Showcase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='showcase' >
                <div className='showcase-content'>
                    <h1>A Log To Write Blog</h1>
                    <p>Pick your Pen and Glasses</p>

                    <Link to='/' className='btn btn-outline-prime'>
                        Jump-In
                       </Link>
                </div>
            </div>
        );
    }
}

Showcase.propTypes = {};

export default Showcase;
