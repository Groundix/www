import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.postHeader}>
      <img src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/11/12/1386da4d-1371-405e-ab32-5077d43f76ba_a6043c1c.jpg?itok=JCYikXAu&v=1636702371' alt='Avatar' />
        </div>
      
      <div className={styles.post}>
        <h4> &nbsp; {props.message} </h4>
        </div>  
      <div className={styles.bottom}>
         Likes: {props.like}
      </div>
   
    </div>
  )
}

export default Post;