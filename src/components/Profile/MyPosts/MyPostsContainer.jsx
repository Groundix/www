import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.profilePage.postData);
  const newPostText = useSelector(state => state.profilePage.newPostText);

  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postData={posts}
      newPostText={newPostText}
    />
  );
};

export default MyPostsContainer;
