import React from "react";
import styles from "./Card.module.css"

// images

import phone_ico from "./Assets/phone_ico.svg"
import email_ico from "./Assets/email_ico.svg"

const Card = ({ name, phone, email }) => {

    return (
        <>
           <div className={styles.card}>
                <h2>{name}</h2>
                <div className={styles.infornation_block}>
                    <div className={styles.content_block}>
                        <img src={phone_ico} />
                        <span className={styles.info_text}>{phone}</span>
                    </div>
                    <div className={styles.content_block}>
                        <img src={email_ico} />
                        <span className={styles.info_text}>{email}</span>
                    </div>
                </div>
           </div>
        </>
    )

}

export default Card;