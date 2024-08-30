import React from "react";
import Modal from "../modal/Modal";
import styles from "./contactDetal.module.css";

import { HiBriefcase, HiPhone } from "react-icons/hi2";
import { HiLocationMarker, HiMail } from "react-icons/hi";

function ContactDetail({ title, open, onClose, contact }) {
  const { name, email, phone, address, job } = contact;

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <div className={styles.details}>
        <div className={styles.image}>{name.at(0).toUpperCase()}</div>
        <p className={styles.name}>{name}</p>
        <div className={styles.information}>
          <div className={styles.info}>
            <p>{email}</p>
            <span>
              <HiMail />
            </span>
          </div>
          <div className={styles.info}>
            <p>{phone ? phone : "_______"}</p>
            <span>
              {" "}
              <HiPhone />
            </span>
          </div>
          <div className={styles.info}>
            <p>{job ? job : "_________"}</p>
            <span>
              <HiBriefcase />
            </span>
          </div>
          <div className={styles.info}>
            <p>{address ? address : "_________"}</p>
            <span>
              <HiLocationMarker />
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ContactDetail;
