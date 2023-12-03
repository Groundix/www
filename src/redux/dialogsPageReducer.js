const ON_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = { 
  dialogsData: [
    { id: 1, name: 'Dimych', img: 'https://i.pinimg.com/736x/67/e1/8e/67e18ea46fdafd1312aee3e7a8a12672.jpg' },
    { id: 2, name: 'Dianito', img: 'https://cdn.freelance.ru/images/att/1575043_900_600.png' },
    { id: 3, name: 'Valera', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5641-10-07-2021_10-06-06.jpg' },
    { id: 4, name: 'Siroja', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5642-10-07-2021_10-06-06.jpg' },
    { id: 5, name: 'Andrey', img: 'https://promoname.ru/wp-content/uploads/2023/08/photo_5644-10-07-2021_10-06-06.jpg' }
  ],
  newMessageText: ''

}
const dialogsPageReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessageX = {
                id: 7,
                message: state.newMessageText,
                like: 0
            };
            state.messageData.push(newMessageX);
            state.newMessageText = '';
            return state;

        case ON_MESSAGE_CHANGE:   
        state.newMessageText = action.newText;
        return state;
        default:
            return state;
    }

}

export const onMessageChangeActionCreator = (text) => {
    return {
      type: ON_MESSAGE_CHANGE,
      newText: text
    }
  }
  
  export const sendMessageActionCreator = () => { 
    return {
      type: SEND_MESSAGE
    }
  }

export default dialogsPageReducer;