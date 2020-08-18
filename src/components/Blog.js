import React from 'react';
import { Card, Col, Row } from 'reactstrap'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: ''
        };
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.blog)
    }
    handleChange = (e) => {
        const blog = { ...this.state.blog }
        blog[e.target.name] = e.target.value
        this.setState({ blog })
    }
    render() {
        return (
            <div className='showcase-full'>
                <div className='container'>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card className='mt-5' style={{ minWidth: '600px' }}>
                                <div class="card-header card-custom-title">
                                    Create New Blog
              </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Blog Title</label>
                                        <input
                                            type="text"
                                            name='title'
                                            class="form-control w-75 m-auto"
                                            id="title"
                                            aria-describedby="emailHelp"
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Blog Description</label>
                                        <textarea
                                            class="form-control w-75 m-auto"
                                            name='description'
                                            id="description"
                                            rows="3"
                                            onChange={this.handleChange}
                                        >
                                        </textarea>
                                    </div>
                                    <button type="submit" class="btn btn-prime mb-4 mx-4">Submit</button>
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

Blog.propTypes = {};

export default Blog;
