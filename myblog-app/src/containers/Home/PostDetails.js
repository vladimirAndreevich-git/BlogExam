import React, {Component} from 'react';
import axios from '../../axios-connection';

class PostDetails extends Component {
    state = {
        post: []    
    };

    componentDidMountMount() {
        let id = this.props.match.params.id
        console.log(id)
        axios.get(`/posts/${id}.json`).then((response) => {

            

            this.setState({ post : response.data });
        }).then(()=>{
            console.log(this.state.post);
        }).catch(error => {
            console.log(error);
        });
        console.log(this.state.post.id);
    }

    render() {
        return(
            <div className="container">
                <div className="Post justify-content-center align-items-center">
                    <div>Date of create: {this.state.post.dateOfCreate}</div>
                    <div>Title: {this.state.post.title}</div>
                    <div>Description: {this.state.post.description}</div>
                </div>
            </div>
        );
    }
}

export default PostDetails;