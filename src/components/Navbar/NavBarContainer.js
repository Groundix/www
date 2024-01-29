import { connect } from 'react-redux';
import Navbar from './Navbar'; // Путь к вашему файлу Navbar.jsx

// Эта функция будет использована для получения данных из state
const mapStateToProps = (state) => {
   
  return {
    state,
    state: state.navBarData,
  };
}

// Эта функция будет использована для создания функций-обработчиков событий
const mapDispatchToProps = (dispatch) => {
  return {
   
  };
}

// Создаем контейнерную компоненту с помощью connect
const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;
