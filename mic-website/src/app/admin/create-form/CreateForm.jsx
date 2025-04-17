"use client";
// components/CreateNewForm.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './CreateFormStyle.module.css';

const CreateNewForm = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Create New Form</h1>

      <form className={styles.formContainer}>
        <div className={styles.mainContent}>
          {/* Title Input */}
          <div className={styles.formSection}>
            <label>Form Title *</label>
            <input
              type="text"
              className={styles.titleInput}
              required
            />
          </div>

          {/* Content Editor */}
          <div className={styles.formSection}>
            <label>Form Content *</label>
            <textarea
              className={styles.contentEditor}
              required
              rows="15"
            />
          </div>

          {/* Template Selection */}
          <div className={styles.formSection}>
            <label>Form Template</label>
            <select className={styles.templateSelect}>
              <option value="default">Default Template</option>
              <option value="landing-page">Landing Page</option>
              <option value="contact-form">Contact Form</option>
              <option value="survey-form">Survey Form</option>
            </select>
          </div>

          {/* Static error message placeholder */}
          <div className={styles.errorMessage}>Error message goes here</div>
        </div>

        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Publish Settings */}
          <div className={styles.sidebarSection}>
            <h3>Publish</h3>
            <div className={styles.statusControl}>
              <label>Status:</label>
              <select className={styles.statusSelect}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <div className={styles.scheduleControl}>
              <label>
                <FontAwesomeIcon icon={faCalendarAlt} /> Schedule Date
              </label>
              <input
                type="datetime-local"
                className={styles.dateInput}
              />
            </div>
          </div>

          {/* Categories */}
          <div className={styles.sidebarSection}>
            <h3>Categories</h3>
            <div className={styles.categoryList}>
              {['Community', 'Charity', 'Education', 'Registration'].map(category => (
                <label key={category} className={styles.categoryItem}>
                  <input
                    type="checkbox"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>

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
                <FontAwesomeIcon icon={faUpload} /> Set Featured Image
              </button>
            </div>

            {/* Optional static preview block */}
            <div className={styles.imagePreview}>
              <img src="#" alt="Preview" />
              <button type="button" className={styles.removeButton}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Publish Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewForm;
