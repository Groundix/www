import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // Проверяем, существует ли массив props.postData
  if (!props.postData) {
    return <div>No posts available</div>;
  }

  let postsElements = props.postData.map((p) => <Post message={p.message} like={p.like} />);

  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.content}>
      <div className={styles.postBlock}>
        <textarea className={styles.writeMessage} onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        <button className={styles.button} onClick={onAddPost}><span className="text">Add post</span></button>
        <button className={styles.button}><span className="text">Remove post</span></button>
      </div>
      <div className={styles.message}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;