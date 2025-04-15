"use client";
import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styles from './NewPostStyle.module.css';

const NewPost = () => {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    status: 'draft',
    categories: [],
    tags: [],
    featuredImage: null
  });

  const [isPublishing, setIsPublishing] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  // Handle image upload for TinyMCE
  const handleEditorImageUpload = async (blobInfo, progress) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('file', blobInfo.blob(), blobInfo.filename());

      fetch('/api/upload', { // Your upload endpoint
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.location) {
          resolve(data.location);
        } else {
          reject('Image upload failed');
        }
      })
      .catch(() => reject('Upload failed'));
    });
  };

  // Featured image upload
  const handleFeaturedImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (upload) => {
        setImagePreview(upload.target.result);
        setPostData(prev => ({
          ...prev,
          featuredImage: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setPostData(prev => ({
      ...prev,
      featuredImage: null
    }));
    fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPublishing(true);

    // Get final content from editor
    if (editorRef.current) {
      setPostData(prev => ({
        ...prev,
        content: editorRef.current.getContent()
      }));
    }

    // Prepare FormData for submission
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('status', postData.status);
    postData.categories.forEach(cat => formData.append('categories[]', cat));
    postData.tags.forEach(tag => formData.append('tags[]', tag));
    if (postData.featuredImage) {
      formData.append('featured_image', postData.featuredImage);
    }

    // Submit to API
    fetch('/api/posts', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(() => {
      // Redirect on success
      window.location.href = '/posts';
    })
    .catch(error => {
      console.error('Error:', error);
      setIsPublishing(false);
    });
  };

  return (
    <div className={styles.wrap}>
  <h1 className="wp-heading-inline">Add New Post</h1>
  <button to="/posts" className="page-title-action">Back to Posts</button>
  
  <form onSubmit={handleSubmit} className="post-form">
    {/* Post Title */}
    <div className={styles.postbox}>
      <div className="postbox-header">
        <h2>Title</h2>
      </div>
      <div className="inside">
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          placeholder="Enter post title"
          className={styles["post-title-input-wide"]}
          required
        />
      </div>
    </div>

    {/* TinyMCE Editor */}
    <div className={styles.postbox}>
      <div className="postbox-header">
        <h2>Content</h2>
      </div>
      <div className="inside">
        <Editor
          apiKey="lvnj10b6n3kpc1bnub1q8c16tjx6lclynrrzsy0kyg9vqwrx"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={postData.content}
          init={{
            height: 500,
            menubar: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help | image',
            images_upload_handler: handleEditorImageUpload,
            content_style:
              'body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; font-size: 14px; }'
          }}
        />
      </div>
    </div>

    {/* Sidebar */}
    <div className="postbox-container">
      <div className="postbox-side">
        {/* Featured Image */}
        <div className={styles.postbox}>
          <div className="postbox-header">
            <h2>Featured Image</h2>
          </div>
          <div className="inside">
            <div className={styles["featured-image-upload"]}>
              {imagePreview ? (
                <div className={styles["image-preview-container"]}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className={styles["image-preview"]}
                  />
                  <button
                    type="button"
                    className={`button ${styles["remove-image-button"]}`}
                    onClick={handleRemoveImage}
                  >
                    Remove Image
                  </button>
                </div>
              ) : (
                <div className={styles["upload-area"]}>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFeaturedImageUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="featured-image-upload"
                  />
                  <button
                    htmlFor="featured-image-upload"
                    className={`button ${styles["upload-button"]}`}
                  >
                    Set Featured Image
                  </button>
                  <p className={styles["upload-hint"]}>
                    Recommended size: 1200x630 pixels
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Publish Box */}
        <div className={styles.postbox}>
          <div className="postbox-header">
            <h2>Publish</h2>
          </div>
          <div className="inside">
            <div className="submitbox">
              <div className="misc-pub-section">
                <label>Status:</label>
                <select
                  name="status"
                  value={postData.status}
                  onChange={(e) =>
                    setPostData({ ...postData, status: e.target.value })
                  }
                  className="post-status-select"
                >
                  <option value="draft">Draft</option>
                  <option value="publish">Published</option>
                  <option value="pending">Pending Review</option>
                </select>
              </div>
              <div className="misc-pub-section">
                <button
                  type="submit"
                  className="button button-primary button-large"
                  disabled={isPublishing}
                >
                  {isPublishing ? (
                    <>
                      <span className={styles.spinner}></span>
                      Publishing...
                    </>
                  ) : (
                    'Publish'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories and Tags boxes would go here */}
      </div>
    </div>
  </form>
</div>

  );
};

export default NewPost;