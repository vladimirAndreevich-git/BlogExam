import React  from "react";
import "./Post.css";
import 'bootstrap/dist/css/bootstrap.css';

class Post extends React.Component {
    // readMoreHendler = () => {
    //     const paramsOfQuery = [];
    //     paramsOfQuery.push('id=' + this.props.id);
    //     console.log(this.props.id);
    //     paramsOfQuery.push('title=' + this.props.title);
    //     paramsOfQuery.push('description=' +this.props.desctription);
    //     paramsOfQuery.push('dateOfCreate=' + this.props.dateOfCreacte);

    //     const pathString = paramsOfQuery.join('&');
    //     this.props.history.push({
    //         pahtname: "/posts/:id",
    //         search: '?' + pathString
    //     });
    //     console.log(this.props.id);
    // }

    render() {
        return(
            <div className="Post justify-content-center align-items-center">
                <div>Date of creating post: {this.props.dateOfCreacte}</div>
                <div>Title {this.props.title}</div>
                <div>
                    <button
                     className="OrderButton"
                     onClick={this.props.click}
                     >
                         To learn more...
                     </button>
                </div>
            </div>
        );
    }
    
}

    

export default Post;