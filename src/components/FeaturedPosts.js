import React from 'react';
import { Row, Col, Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link} from 'react-router-dom'
import blog1 from '../assests/images/blog1.jpeg'
import blog2 from '../assests/images/blog2.jpeg'
import blog3 from '../assests/images/blog3.jpeg'
import user1 from '../assests/images/user1.jpeg'
import user2 from '../assests/images/user2.jpeg'
import user3 from '../assests/images/user3.jpeg'


class FeaturedPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='container'>
                <Row>
                    <h4 className='sub-header'>Featured Post</h4>
                </Row>
                <hr></hr>
                <Row>
                    <Col>
                        <Card>
                            <CardImg className='custom-card-image' top width="100%" src={blog1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle ><Link to='/blogpost/1234'className='post-title'><h4>Man On The Mars</h4></Link></CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                    <div className='card-bottom'>
                                        <img className='avatar' src={user1} alt='user' />
                                        <p>John Doe
                                             <br></br>
                                        <small className='text-muted'>Posted: Aug 16 2020</small>
                                        </p>
                                        <div>
                                        BookmarkIcon
                                        </div>
                                    </div>
                                    <small className="text-muted">Last updated 5 days ago</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg className='custom-card-image' top width="100%" src={blog2} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><Link className='post-title'><h4>Increase Of Junk Food Use</h4></Link></CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                <div className='card-bottom'>
                                <img className='avatar' src={user2} alt='user' />
                                        <p>Julie Mark
                                        <br></br>
                                        <small className='text-muted'>Posted: Aug 16 2020</small>
                                        </p>
                                       
                                        <div>
                                            BookmarkIcon
                                            
                                           
                                </div>
                                    </div>
                                  
                                    <small className="text-muted"> Last Updated Few days ago</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg className='custom-card-image' top width="100%" src={blog3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><Link className='post-title'><h4>Enviornment A Serious Issue</h4></Link></CardTitle>
                                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                                <CardText>
                                <div className='card-bottom'>
                                <img className='avatar' src={user3} alt='user' />
                                <p>Steven Simpson
                                     <br></br>
                                <small className='text-muted'>Posted: Aug 16 2020</small>
                                </p>
                                <div>
                                BookmarkIcon
                                </div>
                            </div>
                                    <small className="text-muted">Last updated 3 days ago</small>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}

FeaturedPosts.propTypes = {};

export default FeaturedPosts;
