import React from "react";
import styles from "./../Navbar.module.css"



const FriendList = (props) => {
    return <div className={styles.thread}>
           
    <div className={styles.pic}>
        <img src={props.img} />
    </div>
    <div className={styles.dialog + ' ' + styles.active}>
        <div className={styles.name}>{props.name}</div> 
    </div>
</div>
}



export default FriendList;