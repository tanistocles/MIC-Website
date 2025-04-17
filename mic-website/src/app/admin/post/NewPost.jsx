"use client";
import { Editor } from '@tinymce/tinymce-react';
import styles from './NewPostStyle.module.css';

const NewPost = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Post</h1>
      
      <form className={styles.postForm}>
        {/* Title Input */}
        <div className={styles.formGroup}>
          <div>
          <input
              type="text"
              placeholder="Post Title"
              className={styles.titleInput}
              required
            />
          </div>
          {/* Content Editor */}
            <div className={styles.editorContainer}>
              <Editor
                apiKey="lvnj10b6n3kpc1bnub1q8c16tjx6lclynrrzsy0kyg9vqwrx"
                initialValue=""
                init={{
                  height: 700,
                  width: 1000,
                  menubar: true,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
        </div>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Featured Image */}
          <div className={styles.sidebarSection}>
            <h3>Featured Image</h3>
            <div className={styles.uploadArea}>
              <input
                type="file"
                accept="image/*"
                className={styles.fileInput}
              />
              <button
                type="button"
                className={styles.uploadButton}
              >
                Set Featured Image
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className={styles.sidebarSection}>
            <h3>Categories</h3>
            <div className={styles.categoryList}>
              {['Comminity', 'Charity', 'Education', 'Training'].map(category => (
                <label key={category} className={styles.categoryLabel}>
                  <input type="checkbox" />
                  {category}
                </label>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className={styles.sidebarSection}>
            <h3>Tags</h3>
            <input
              type="text"
              placeholder="Separate tags with commas"
              className={styles.tagsInput}
            />
          </div>

          {/* Publish Options */}
          <div className={styles.sidebarSection}>
            <h3>Publish</h3>
            <select className={styles.statusSelect}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <button
              type="submit"
              className={styles.submitButton}
            >
              Save Post
            </button>
          </div>
        </div>

        <p className={styles.errorMessage}>Error message goes here</p>
      </form>
    </div>
  );
};

export default NewPost;
