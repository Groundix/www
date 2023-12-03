import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";


const MyPosts = (props) => {


  let postsElements = props.postData.map((p => <Post message={p.message} like={p.like} />))

  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch(addPostActionCreator());

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return <div className={styles.content}>
    <div className={styles.postBlock}>
      <textarea className={styles.writeMessage} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />

      <button className={styles.button} onClick={addPost}><span class="text" >Add post</span></button>
      <button className={styles.button}><span class="text">Remove post</span></button>
    </div>
    <div className={styles.message}>
      {postsElements}

    </div>
  </div>
}

export default MyPosts;