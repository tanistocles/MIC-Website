"use client";
// components/AddNewUser.jsx
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './AddUserStyle.module.css';

const AddNewUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('subscriber');
  const [profileImage, setProfileImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (upload) => {
      setProfileImage(upload.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('User created successfully!');
      // Reset form
      setUsername('');
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
      setProfileImage(null);
      setRole('subscriber');
    } catch (err) {
      setError('Failed to create user. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Add New User</h1>
      
      <form onSubmit={handleSubmit} className={styles.userForm}>
        <div className={styles.mainContent}>
          <div className={styles.formRow}>
            <label>Username *</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.textInput}
              required
            />
          </div>

          <div className={styles.formRow}>
            <label>Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.textInput}
              required
            />
          </div>

          <div className={styles.nameFields}>
            <div className={styles.formRow}>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.textInput}
              />
            </div>
            <div className={styles.formRow}>
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={styles.textInput}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <label>Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.textInput}
              required
            />
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>

        <div className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3>Role</h3>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.roleSelect}
            >
              <option value="administrator">Administrator</option>
              <option value="editor">Editor</option>
              <option value="author">Author</option>
              <option value="contributor">Contributor</option>
              <option value="subscriber">Subscriber</option>
            </select>
          </div>

          <div className={styles.sidebarSection}>
            <h3>Profile Picture</h3>
            {profileImage ? (
              <div className={styles.imagePreview}>
                <img src={profileImage} alt="Preview" />
                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={handleRemoveImage}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            ) : (
              <div className={styles.uploadSection}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className={styles.fileInput}
                />
                <button
                  type="button"
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current.click()}
                >
                  <FontAwesomeIcon icon={faUpload} /> Upload Image
                </button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating User...' : 'Add New User'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewUser;