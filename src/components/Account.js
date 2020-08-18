import React from 'react';
import { Row, Col, Card } from 'reactstrap'
import { Link} from 'react-router-dom'

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='showcase-full'>
                <div className='container '>
                    <Row>
                        <Col>
                            <Card className='mt-5' >
                                <div class="card-header card-custom-title">
                                    Profile
                                </div>
                                <p>Update your Account Details</p>
                                <Link to='/profile' type="submit" class="btn btn-prime mb-4 mx-4">My Profile</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-5' >
                                <div class="card-header card-custom-title">
                                    Manage Blog
                                </div>
                                <p> Update or Delete Existing Blog</p>
                                <Link to='/manageblog' type="submit" class="btn btn-prime mb-4 mx-4">Manage</Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-5' >
                                <div class="card-header card-custom-title">
                                    Create New Blog
                                </div>
                                <p>Ready to post new Blog?</p>
                                <Link to='/blog' type="submit" class="btn btn-prime mb-4 mx-4">Create</Link>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Account.propTypes = {};

export default Account;
