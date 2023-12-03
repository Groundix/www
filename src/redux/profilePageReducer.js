const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', like: 15 },
    { id: 2, message: 'It\'s my first post', like: 20 },
    { id: 3, message: 'Hi, how are you?', like: 50 },
    { id: 4, message: 'BlaBla', like: 15 },
    { id: 5, message: 'dada', like: 20 },
    { id: 6, message: 'Ustal\'', like: 50 }
  ],
  newPostText: ''
};

export const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newMessageX = {
        id: 7,
        message: state.newPostText,
        like: 0
      };
      // Создаем новый массив postData с добавленным сообщением
      return {
        ...state,
        postData: [...state.postData, newMessageX],
        newPostText: '' // Очищаем newPostText
      };

    case UPDATE_NEW_POST_TEXT:
      // Создаем новый объект с обновленным newPostText
      return {
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export default profilePageReducer;
