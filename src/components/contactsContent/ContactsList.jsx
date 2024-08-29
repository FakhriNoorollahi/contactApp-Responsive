import React from "react";
import styles from "./contactsList.module.css";
import { CiEdit, CiRead, CiTrash } from "react-icons/ci";

function ContactsList() {
  return (
    <div>
      <h3>Contact List (3)</h3>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>First/Last Name</th>
              <th>Phone number</th>
              <th>Address e-mail</th>
              <th>Details</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <span></span>
                <span>jhon star</span>
              </td>
              <td>258526943</td>
              <td>sdfghj@jdf</td>
              <td>
                <button>
                  <CiRead />
                </button>
              </td>
              <td>
                <div className={styles.buttons}>
                  <button>
                    <CiTrash />
                  </button>
                  <button>
                    <CiEdit />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContactsList;
