"use client";
import styles from './AddNewFileStyle.module.css';

const AddNewFile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Upload New File</h2>
        <button className={styles.closeButton}>
          {/* <FontAwesomeIcon icon={faTimes} /> */}
        </button>
      </div>

      <div className={styles.uploadArea}>
        <input
          type="file"
          className={styles.fileInput}
          accept=".jpg,.jpeg,.png,.pdf"
        />

        <div className={styles.uploadContent}>
          {/* <FontAwesomeIcon icon={faCloudUploadAlt} className={styles.uploadIcon} /> */}
          <p className={styles.instructions}>
            Drag files here or click to select
          </p>

          <div className={styles.fileInfo}>
            <span>example.jpg</span>
            <span>2.45 MB</span>
          </div>
        </div>
      </div>

      <div className={styles.previewContainer}>
        <img
          src="preview-url.jpg"
          alt="File preview"
          className={styles.previewImage}
        />
      </div>

      <p className={styles.errorMessage}>Error message goes here</p>

      <div className={styles.buttonGroup}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.uploadButton}>Upload File</button>
      </div>
    </div>
  );
};

export default AddNewFile;
