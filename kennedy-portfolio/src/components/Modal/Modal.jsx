import React from "react";
import styles from "./Modal.module.css";
import { getImageUrl } from "../../utils";

export const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // do not show anything if its not open
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modalcontent}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>

          <iframe
            src={getImageUrl("resume/KennedyCastillonJimenezResume.pdf")}
            width="100%"
            height="500px"
            className={styles.iframe}
          ></iframe>
          <a
            href={getImageUrl("resume/KennedyCastillonJimenezResume.pdf")}
            download
            className={styles.downloadbtn}
          >
            Download
          </a>
        </div>
      </div>
    </>
  );
};
