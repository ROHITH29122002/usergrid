import React from 'react'
import styles from './User.module.css'


function User({user}) {
  return (
    <div className={styles.user_container}>
        <div>
            <img className={styles.user_img} src={user.avatar} alt="avatar"/>
        </div>
        <div className={styles.details_container}>
            <h2>{user.first_name}</h2>
            <h2>{user.last_name}</h2>
            <h2>{user.email}</h2>
        </div>
    </div>
  )
}

export default User