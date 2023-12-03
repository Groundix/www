import React from "react";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (<div className={styles.scroll}>

    <ProfileInfo />
    <MyPostsContainer 
  />  


  </div>
  )
}

export default Profile;