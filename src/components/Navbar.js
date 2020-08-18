import React from 'react';
import logo from '../assests/images/Blog-icon.png'
import { Link } from 'react-router-dom'
import userImage from '../assests/images/user2.jpeg'
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        };
    }
    handleLogout = () => {
        localStorage.removeItem('token')
        window.location('/')
    }
    render() {
        const user = this.props.user
        console.log(user)

        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand logo" href="/"><span className='prime-color'>
                        <img className='logo-img' src={logo} alt='log' />Alog</span>Blog</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/home">Home </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            {
                                (user) &&
                                <li class="nav-item">
                                    <a class="nav-link" href="/blog">My Blog</a>
                                </li>
                            }

                        </ul>
                        <form class="form-inline my-2 my-lg-0">

                            {(!user) &&
                                <React.Fragment>
                                    <Link to='/login' class="btn btn-outline-prime mx-2 my-2 my-sm-0" type="submit">Register</Link>
                                    <Link to='/login' class="btn btn-outline-prime mx-2 my-2 my-sm-0" type="submit">Login</Link>
                                </React.Fragment>

                            }
                            {(user) &&
                                <React.Fragment>
                                    <Link to='/account' className='user-name'><img className='user-avatar' src={userImage} alt='' ></img>{user.name.toUpperCase()}</Link>
                                    <button
                                        onClick={this.handleLogout}
                                        class="btn btn-prime mx-2 my-2 my-sm-0"
                                        type="submit"
                                    >Logout</button>
                                </React.Fragment>

                            }
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}

Navbar.propTypes = {};

export default Navbar;
