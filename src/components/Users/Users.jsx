import React from "react";
import styles from "./Users.module.css";
import axios from 'axios';
import avatar from '../../assets/Images/avatar.jpg';

class Users extends React.Component {

    componentDidMount() {
        this.fetchUsers(this.props.currentPage);
    }

    onPageChanges = (pageNumber) => {
        if (pageNumber === "prev" && this.props.currentPage > 1) {
            this.props.setCurrentPage(this.props.currentPage - 1);
        } else if (pageNumber === "next" && this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this.props.setCurrentPage(this.props.currentPage + 1);
        } else {
            this.props.setCurrentPage(pageNumber);
        }

        this.fetchUsers(pageNumber);
    }

    fetchUsers = (page) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const maxDisplayedPages = 10; // Максимальное количество отображаемых страниц

        let pages = [];
        if (pagesCount <= maxDisplayedPages) {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }
        } else {
            const startPage = Math.max(1, this.props.currentPage - Math.floor(maxDisplayedPages / 2));
            const endPage = Math.min(pagesCount, startPage + maxDisplayedPages - 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
        }

        return (
            <div className={styles.usersList}>
                <div className={styles.pagination}>
                    <a onClick={() => this.onPageChanges(1)}>&laquo;&laquo;</a>
                    <a onClick={() => this.onPageChanges("prev")}>&laquo;</a>
                    {pages.map(p => (
                        <a
                            key={p}
                            className={this.props.currentPage === p && styles.active}
                            onClick={() => this.onPageChanges(p)}
                        >
                            {p}
                        </a>
                    ))}
                    <a onClick={() => this.onPageChanges("next")}>&raquo;</a>
                    <a onClick={() => this.onPageChanges(pagesCount)}>&raquo;&raquo;</a>
                </div>
                {this.props.users.map(u => (
                    <div key={u.id} className={styles.thread}>
                        <span>
                            <div className={styles.pic}>
                                <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar" />
                            </div>
                        </span>
                        <span>
                            <div>
                                {u.followed ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button> : <button onClick={() => { this.props.unfollow(u.id) }}>UnFollow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div className={styles.name}>{u.name}</div>
                                <div className={styles.time}>{u.status}</div>
                            </span>
                            <span>
                                {/* <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div> */}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Users;
