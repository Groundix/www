import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (<div className={styles.scroll}>

    <ProfileInfo />
    <MyPosts postData={props.profilePage.postData}
      newPostText={props.profilePage.newPostText}
      dispatch ={props.dispatch} />


  </div>
  )
}

export default Profile;