import React from "react";
import Modal from "../modal/Modal";
import styles from "./contactDetal.module.css";
import { HiBriefcase, HiPhone } from "react-icons/hi2";
import { HiLocationMarker, HiMail } from "react-icons/hi";

function ContactDetail({ open, onClose, contact }) {
  const { name, email, phone, address, job } = contact;

  return (
    <Modal title={name} open={open} onClose={onClose}>
      <div className={styles.details}>
        <div className={styles.image}>{name.at(0).toUpperCase()}</div>
        <p className={styles.name}>{name}</p>
        <div className={styles.information}>
          <InfoContact text={email} icon={<HiMail />} />
          <InfoContact text={phone ? phone : "_______"} icon={<HiPhone />} />
          <InfoContact text={job ? job : "_________"} icon={<HiBriefcase />} />
          <InfoContact
            text={address ? address : "_________"}
            icon={<HiLocationMarker />}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ContactDetail;

function InfoContact({ text, icon }) {
  return (
    <div className={styles.info}>
      <p>{text}</p>
      <span>{icon}</span>
    </div>
  );
}
