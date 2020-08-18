import React from 'react';
import { Row, Col, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import registerService from '../services/registerService'



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: '',
                password2: '',
                name: ''
            },
        };
    }

    handleChange = (e) => {
        const user = { ...this.state.user }
        user[e.target.name] = e.target.value
        this.setState({ user })
    }
    onSumbit = async (e) => {
        e.preventDefault()
        try {
            const { name, email, password, password2 } = this.state.user
            if (name === '') { return console.log('Name is Required') }
            if (email === '') { return console.log('Email is Required') }
            if (password === '') { return console.log('Password is Required') }
            if (password2 === '') { return console.log('Password does Not Match') }
            // Password Match
            if (password !== password2) { return console.log('Password does Not Match') }

            const res = await registerService(this.state.user)
            localStorage.setItem('token', res.headers['x-auth-token'])
            this.props.history.push('/')


        } catch (error) {
            this.setState({ error })
        }
    }
    // handleBlur = () => {
    //     if (this.state.user.password !== this.state.user.password2) {
    //         // this.setState({ errMsg: ' Password Do Not match' })
    //         console.log('Password Do Not Match')
    //     }
    // }
    render() {
        return (
            <div className='showcase-full'>
                <div className='container '>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className='mt-5' style={{ minWidth: '600px' }}>
                                <div class="card-header card-custom-title">
                                    Register
                </div>
                                <form onSubmit={this.onSumbit}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name</label>
                                        <input
                                            type="text"
                                            class="form-control w-75 m-auto"
                                            id="name"
                                            name='name'
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Name"
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email </label>
                                        <input
                                            type="email"
                                            name='email'
                                            class="form-control w-75 m-auto"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email"
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input
                                            type="password"
                                            name='password'
                                            class="form-control w-75 m-auto"
                                            id="password"
                                            placeholder="Password"
                                            onChange={this.handleChange}

                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Confirm Password</label>
                                        <input
                                            type="password"
                                            name='password2'
                                            class="form-control w-75 m-auto"
                                            id="password2"
                                            placeholder="Confrim Password"
                                            onChange={this.handleChange}
                                            onBlur={this.handleBlur}
                                        />
                                    </div>

                                    <button type="submit" class="btn btn-prime mb-4 mx-4">Register</button>
                                    <Link to='/login' type="button" class="btn btn-outline-prime mb-4">Login</Link>
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

Register.propTypes = {};

export default Register;
