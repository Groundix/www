// В MyPostsContainer.jsx
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData, // Поправлено на postData
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    },
  }
}

const ConnectedMyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default ConnectedMyPostContainer;
