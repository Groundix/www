
const ON_MESSAGE_CHANGE = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = { 
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

}
const dialogsPageReducer = (state = initialState, action) => {
  switch(action.type){
      case SEND_MESSAGE:
          let newMessageX = {
              id: 7,
              message: state.newMessageText,
              like: 0
          };
           return {
            ...state,
            messageData: [...state.messageData, newMessageX], // Изменено dialogsData на messageData
            newMessageText: ''
           };
      case ON_MESSAGE_CHANGE:   
      return{
       ...state,
       newMessageText: action.newText
      }
     
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