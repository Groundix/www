import React from "react";
import styles from "./ProfileInfo.module.css";



const ProfileInfo = (props) => {
  return (<div className={styles.container}>
    <div className={styles.infoBar}>
      <div className={styles.media}>

        <div className={styles.avatar}>
          <img src='https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/11/12/1386da4d-1371-405e-ab32-5077d43f76ba_a6043c1c.jpg?itok=JCYikXAu&v=1636702371' alt='Avatar' />
        </div>
        <h2>Denis Stoico</h2>

      </div>
      <div className={styles.profileCardtxt}><div className={styles.profession}>Front-end Developer from</div> <strong>Moldova</strong>
        <div class="profileCardLoc">
          <span class="profile-card-loc__icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18 9C18 11.973 15.8377 14.441 13 14.917V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V14.917C8.16229 14.441 6 11.973 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9ZM12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span class="profile-card-loc__txt">
            Kazan, Russia
          </span>
        </div>

      </div>

      <div className={styles.socialCards}>
        <ul>
          <li>
            <a className={styles.facebook} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-facebook" aria-hidden="true"><svg width="40"
                height="40"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="facebook">
                <path fill-rule="evenodd"
                  clip-rule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" fill="currentColor">
                </path></svg></i>
            </a>
          </li>
          <li>
            <a className={styles.instagram} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-instagram" aria-hidden="true"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z" fill="currentColor" />
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="currentColor" />
              </svg></i>
            </a>
          </li>
          <li>
            <a className={styles.facebook} href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <i class="fa fa-facebook" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
              </svg></i>
            </a>
          </li>


        </ul>


      </div>

    </div>



  </div>






  )
}

export default ProfileInfo;