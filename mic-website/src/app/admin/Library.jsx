"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList, faTrash, faDownload, faUpload } from '@fortawesome/free-solid-svg-icons';
import styles from './LibraryStyle.module.css';

const Library = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Media Library</h1>
        <button className={styles.uploadButton}>
          <FontAwesomeIcon icon={faUpload} /> Add New
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.viewToggle}>
          <button className={`${styles.viewButton} ${styles.active}`}>
            <FontAwesomeIcon icon={faTh} /> Grid
          </button>
          <button className={styles.viewButton}>
            <FontAwesomeIcon icon={faList} /> List
          </button>
        </div>

        <div className={styles.searchBox}>
          <input type="search" placeholder="Search media..." />
        </div>
      </div>

      <div className={styles.bulkActions}>
        <select defaultValue="">
          <option value="" disabled>Bulk Actions</option>
          <option value="delete">Delete</option>
          <option value="download">Download</option>
        </select>
        <button className={styles.applyButton}>Apply</button>
        <span className={styles.selectedCount}>0 items selected</span>
      </div>

      {/* Static Grid View */}
      <div className={styles.gridView}>
        <div className={styles.gridItem}>
          <img src="/placeholder.jpg" alt="sunset.jpg" className={styles.thumbnail} />
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>sunset.jpg</span>
            <span className={styles.itemSize}>2.4 MB</span>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img src="/placeholder.jpg" alt="sunset.jpg" className={styles.thumbnail} />
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>sunset.jpg</span>
            <span className={styles.itemSize}>2.4 MB</span>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img src="/placeholder.jpg" alt="sunset.jpg" className={styles.thumbnail} />
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>sunset.jpg</span>
            <span className={styles.itemSize}>2.4 MB</span>
          </div>
        </div>
        <div className={styles.gridItem}>
          <img src="/placeholder.jpg" alt="sunset.jpg" className={styles.thumbnail} />
          <div className={styles.itemInfo}>
            <span className={styles.itemName}>sunset.jpg</span>
            <span className={styles.itemSize}>2.4 MB</span>
          </div>
        </div>
        {/* Add more static grid items here if needed */}
      </div>

      {/* Optional Static Modal (hidden by default) */}
      {/*
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <button className={styles.closeButton}>&times;</button>
          <h2>Upload Files</h2>
          <div className={styles.uploadArea}>
            <p>Drag files here or click to upload</p>
            <input type="file" multiple />
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default Library;
