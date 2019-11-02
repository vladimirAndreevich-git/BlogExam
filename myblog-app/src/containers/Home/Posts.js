import React from 'react';
import axios from "../../axios-connection";
import Post from "../../components/Post/Post";
import 'bootstrap/dist/css/bootstrap.css';

class Posts extends React.Component {
    state = {
        posts: [],
        readMoreHandler: null
    };

    

    componentDidMount() {
        axios.get('/posts.json').then((response) => {
            let data = Object.values(response.data)
            const keys = Object.keys(response.data);
            for(let i=0;i<keys.length; i++)
            {
                data[i].id = keys[i];
            }
            this.setState({ posts : data });
        }).then(()=>{
            console.log(this.state.posts);
        }).catch(error => {
            console.log(error);
        });
    }

    readMoreHandler = id => {
        console.log(id);
        this.props.setState({selectedPostId: id});
        this.props.history.push({
            pathName: `/posts/${id}`
        });
    }
    

    render() {
        return(
            <div className="container">
                {this.state.posts.map(post => {
                    return(
                        <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        dateOfCreate={post.dateOfCreate}
                        click={() => this.readMoreHendler(post.id)}
                        />
                    );
                })}
            </div>
        );
    }
}
export default Posts;