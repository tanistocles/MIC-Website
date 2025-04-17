"use client";
// components/AddNewPage.jsx
import { Editor } from '@tinymce/tinymce-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faImage } from '@fortawesome/free-solid-svg-icons';
import styles from './AddNewPageStyle.module.css';

const AddNewPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add New Page</h1>
      <div className={styles.pageForm}>
        <form>
          {/* Title Input */}
          <div className={styles.titleSection}>
            <input
              type="text"
              placeholder="Page Title"
              className={styles.titleInput}
              required
            />
          </div>

          {/* Content Editor */}
          <div className={styles.editorSection}>
            <Editor
              apiKey="lvnj10b6n3kpc1bnub1q8c16tjx6lclynrrzsy0kyg9vqwrx"
              init={{
                height: 500,
                width: 1200,
                menubar: true,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | ' +
                  'alignleft aligncenter alignright | ' +
                  'bullist numlist outdent indent | help',
                content_style:
                  'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              }}
            />
          </div>

          {/* Sidebar */}
          <div className={styles.sidebar}>
            {/* Featured Image */}
            <div className={styles.sidebarSection}>
              <h3>Featured Image</h3>
              <div className={styles.uploadSection}>
                <input
                  type="file"
                  accept="image/*"
                  className={styles.fileInput}
                />
                <button type="button" className={styles.uploadButton}>
                  <FontAwesomeIcon icon={faImage} /> Set Featured Image
                </button>
              </div>
              {/* Static preview placeholder */}
              <div className={styles.imagePreview}>
                <img src="#" alt="Preview" />
                <button type="button" className={styles.removeButton}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>

            {/* Publish Settings */}
            <div className={styles.sidebarSection}>
              <h3>Publish</h3>
              <div className={styles.statusSection}>
                <label>Status:</label>
                <select className={styles.statusSelect}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
              <button type="submit" className={styles.submitButton}>
                Save Page
              </button>
            </div>
          </div>

          {/* Error Message Placeholder */}
          <div className={styles.errorMessage}>Error Message</div>
        </form>
      </div>
    </div>
  );
};

export default AddNewPage;
