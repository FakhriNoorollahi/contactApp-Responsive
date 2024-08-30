import React from "react";
import Modal from "../modal/Modal";
import styles from "./contactDetal.module.css";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

function ContactDetail({ title, open, onClose, contact }) {
  const { name, email, phone, address } = contact;

  return (
    <Modal title={title} open={open} onClose={onClose}>
      <div className={styles.details}>
        <div className={styles.image}>{name.at(0).toUpperCase()}</div>
        <p className={styles.name}>{name}</p>
        <div className={styles.information}>
          <div className={styles.info}>
            <p>{email}</p>
            <span>
              <CiMail />
            </span>
          </div>
          <div className={styles.info}>
            <p>{phone ? phone : "_______"}</p>
            <span>
              {" "}
              <CiPhone />
            </span>
          </div>
          <div className={styles.info}>
            <p>{address ? address : "_______"}</p>
            <span>
              <CiLocationOn />
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ContactDetail;
