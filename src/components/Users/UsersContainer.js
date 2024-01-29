import { connect } from 'react-redux';
import {followActionCreator, unfollowActionCreator,setUsersActionCreator, setCurrentPageActionCreator,  setUsersTotalCountActionCreator} from '../../redux/usersPageReducer';
import Users from './Users';



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            console.log('Follow button clicked for user ID:', userId);
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            console.log('Unfollow button clicked for user ID:', userId);
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountActionCreator(totalCount));
        }
    };
};



const ConnectedUsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default ConnectedUsersContainer;