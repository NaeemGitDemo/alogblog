import React from 'react';
import { Card, Row, Col, CardTitle } from 'reactstrap'
import loginService from '../services/loginService'
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onSubmit = async (e) => {
        e.preventDefault()
        const user = await loginService(this.state.email, this.state.password)
        localStorage.setItem('token', user.data)
        this.props.history.push('/')
    }
    handleInputEmailChange = (e) => {
        const email = e.target.value
        this.setState({ email })

    }
    handleInputPasswordChange = (e) => {
        const password = e.target.value
        this.setState({ password })
    }
    render() {
        return (
            <div className='showcase-full'>
                <div className='container'>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className='mt-5' style={{ minWidth: '400px' }}>
                                <div class="card-header card-custom-title">
                                    Login
                      </div>
                                <form onSubmit={this.onSubmit}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email"
                                            class="form-control w-75 m-auto"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            onChange={this.handleInputEmailChange}
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control w-75 m-auto" id="exampleInputPassword1" />
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"
                                            onChange={this.handleInputPasswordChange}
                                        />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-prime mb-4 mx-4" >Login</button>
                                    <Link to='/register' type="button" class="btn btn-outline-prime mb-4">Register</Link>
                                </form>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        );
    }
}

Login.propTypes = {};

export default Login;
