import React from 'react';
import Showcase from './Showcase'
import FeaturedPosts from './FeaturedPosts'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Showcase/>
                <FeaturedPosts/>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
