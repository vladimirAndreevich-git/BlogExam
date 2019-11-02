import React from "react";
import "./CreatingPost.css";
import axios from "../../axios-connection";

class CreatingPost extends React.Component {
  state = {
    postDescriptionValue: "",
    postTitleValue: "",
    currentId: 0,
    posts: []
  };

  componentDidMount() {
    axios
      .get(".json")
      .then(response => {
          if(response.data){
            const getPosts = response.data.posts;
            const getId = response.data.currentId;
            this.setState({ posts: getPosts });
            this.setState({ currentId: getId });
          }        
      }).catch(error => {
        console.log(error);
      });
  }

  inputPostDescription = event => {
    const inputValue = event.target.value;
    this.setState({ postDescriptionValue: inputValue });
  };

  inputPostTitle = event => {
    const inputValue = event.target.value;
    this.setState({ postTitleValue: inputValue });
  };

  addNewPost = () => {
    const descriptionValue = this.state.postDescriptionValue;
    const titleValue = this.state.postTitleValue;    

    let postId = ++this.state.currentId;
    const date = this.getDateToString();

    const newPost = {
      creationDate: date,
      description: descriptionValue,
      title: titleValue,
      id: postId
    };
    const allPosts = this.state.posts;
    allPosts.push(newPost);


    const json = {
        currentId: postId,
        posts: allPosts
    }
    console.log('postId ' + postId)
    axios.put(".json", json);
    window.location.href = '/posts';
  };

  getDateToString() {
    const date = new Date();
    var stringDate =
      date.getDate() +
      "." +
      date.getMonth() +
      "." +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes();
    return stringDate;
  }

  render() {
    return (
      <div className="CreactingPost">
        <div>
          <b>Title</b>
          <input className="" type="text" onChange={this.inputPostTitle} />
        </div>
        <div>
          <b>Body</b>
          <textarea
            className=""
            type="text"
            onChange={this.inputPostDescription}
          />
        </div>

        <button onClick={this.addNewPost}>Add post</button>
      </div>
    );
  }
}

export default CreatingPost;
