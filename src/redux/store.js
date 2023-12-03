import dialogsPageReducer from "./dialogsPageReducer";
import profilePageReducer from "./profilePageReducer";
import navBarDataReducer from "./NavBarReducer";


let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', like: 15 },
        { id: 2, message: 'It\'s my first post', like: 20 },
        { id: 3, message: 'Hi, how are you?', like: 50 },
        { id: 4, message: 'BlaBla', like: 15 },
        { id: 5, message: 'dada', like: 20 },
        { id: 6, message: 'Ustal\'', like: 50 }
      ],
      newPostText: ''
    },
    dialogsPage: {
      messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Yo!' }
      ],
      dialogsData: [
        { id: 1, name: 'Dimych', img: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg' },
        { id: 2, name: 'Dianito', img: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
        { id: 3, name: 'Valera', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5641-10-07-2021_10-06-06.jpg' },
        { id: 4, name: 'Siroja', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5642-10-07-2021_10-06-06.jpg' },
        { id: 5, name: 'Andrey', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5644-10-07-2021_10-06-06.jpg' }
      ],
      newMessageText: ''
    },
    navBarData: {
      friendList: [
        { id: 1, name: 'Dimych', img: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg' },
        { id: 2, name: 'Dianito', img: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
        { id: 3, name: 'Valera', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5641-10-07-2021_10-06-06.jpg' },
      ]
    }

  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state was changed');
  },
  subscribe(observer) {
    this._callSubscriber = observer;   //Наблюдатель 
  },
  dispatch(action) {

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
    this._state.navBarData = navBarDataReducer(this._state.navBarData, action);

    this._callSubscriber(this._state);

  }
 

}

export default store;
window.store = store;