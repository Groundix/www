const FOLLOW =  'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS =  'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const  SET_TOTAL_USERS_COUNT = ' SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

export const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            }
        case SET_USERS: {
            return { ...state, users: action.users };
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage };
        }

        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count };
        }

        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });


export const unfollowActionCreator= (userId) => ({ type: UNFOLLOW, userId });

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setUsersTotalCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export default usersPageReducer;
