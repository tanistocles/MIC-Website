"use client";
import React, { useState } from 'react';
import styles from './LibraryStyle.module.css';

const MediaLibrary = () => {
  const [mediaItems, setMediaItems] = useState([
    // Mock items...
  ]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const bulkActions = [
    { value: 'delete', label: 'Delete Permanently' },
    { value: 'download', label: 'Download' }
  ];

  const handleSelectAll = (e) => {
    setSelectedItems(e.target.checked ? filteredItems.map(item => item.id) : []);
  };

  const handleSelectItem = (itemId) => {
    setSelectedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleBulkAction = () => {
    const action = document.getElementById('bulk-action-selector').value;
    if (action === 'delete') {
      setMediaItems(mediaItems.filter(item => !selectedItems.includes(item.id)));
      setSelectedItems([]);
    }
  };

  const handleDelete = (itemId) => {
    setMediaItems(mediaItems.filter(item => item.id !== itemId));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setCurrentFile(file);

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          const newId = Math.max(...mediaItems.map(item => item.id), 0) + 1;
          const newItem = {
            id: newId,
            title: file.name,
            type: 'image',
            url: upload.target.result,
            uploaded: new Date().toISOString().split('T')[0],
            dimensions: '-',
            size: `${(file.size / 1024).toFixed(1)} KB`
          };

          setMediaItems([...mediaItems, newItem]);
          setUploadModalOpen(false);
        };
        reader.readAsDataURL(file);
      } else {
        const newId = Math.max(...mediaItems.map(item => item.id), 0) + 1;
        const newItem = {
          id: newId,
          title: file.name,
          type: file.type.split('/')[0] || 'document',
          url: '#',
          uploaded: new Date().toISOString().split('T')[0],
          dimensions: '-',
          size: `${(file.size / 1024).toFixed(1)} KB`
        };

        setMediaItems([...mediaItems, newItem]);
        setUploadModalOpen(false);
      }
    }
  };

  return (
    <div className={styles.wrap}>
      <h1 className="wp-heading-inline">Media Library</h1>
      <button
        className="page-title-action"
        onClick={() => setUploadModalOpen(true)}
      >
        Add New
      </button>

      <div className={styles['view-mode-toggle']}>
        <button
          className={`button ${viewMode === 'grid' ? styles.active : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <i className="fas fa-th"></i> Grid
        </button>
        <button
          className={`button ${viewMode === 'list' ? styles.active : ''}`}
          onClick={() => setViewMode('list')}
        >
          <i className="fas fa-list"></i> List
        </button>
      </div>

      <div className="tablenav top">
        <div className="alignleft actions bulkactions">
          <select id="bulk-action-selector">
            <option value="-1">Bulk Actions</option>
            {bulkActions.map(action => (
              <option key={action.value} value={action.value}>{action.label}</option>
            ))}
          </select>
          <button
            className="button action"
            onClick={handleBulkAction}
            disabled={selectedItems.length === 0}
          >
            Apply
          </button>
        </div>

        <div className="search-box">
          <input
            type="search"
            placeholder="Search media..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="button">Search</button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className={styles['media-grid']}>
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div
                key={item.id}
                className={`${styles['media-item']} ${selectedItems.includes(item.id) ? styles.selected : ''}`}
                onClick={() => handleSelectItem(item.id)}
              >
                <div className={styles['media-thumbnail']}>
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.title} />
                  ) : (
                    <div className={styles['media-icon']}>
                      <i className={`fas fa-file-${item.type === 'video' ? 'video' : 'alt'}`}></i>
                    </div>
                  )}
                  {selectedItems.includes(item.id) && (
                    <div className={styles['selected-checkbox']}>
                      <i className="fas fa-check"></i>
                    </div>
                  )}
                </div>
                <div className={styles['media-info']}>
                  <div className={styles['media-title']}>{item.title}</div>
                  <div className={styles['media-details']}>
                    {item.dimensions && <span>{item.dimensions}</span>}
                    <span>{item.size}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-items">No media items found.</div>
          )}
        </div>
      ) : (
        <table className="wp-list-table widefat fixed striped media">
          <thead>
            <tr>
              <th className="check-column">
                <input
                  type="checkbox"
                  checked={selectedItems.length === filteredItems.length && filteredItems.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="column-title">File</th>
              <th className="column-author">Author</th>
              <th className="column-date">Uploaded</th>
              <th className="column-dimensions">Dimensions</th>
              <th className="column-size">Size</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map(item => (
                <tr key={item.id}>
                  <th className="check-column">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => handleSelectItem(item.id)}
                    />
                  </th>
                  <td className="column-title">
                    <div className={styles['media-list-item']}>
                      {item.type === 'image' ? (
                        <img src={item.url} alt={item.title} className={styles['media-list-thumbnail']} />
                      ) : (
                        <div className={styles['media-list-icon']}>
                          <i className={`fas fa-file-${item.type === 'video' ? 'video' : 'alt'}`}></i>
                        </div>
                      )}
                      <div>
                        <strong>{item.title}</strong>
                        <div className="row-actions">
                          <span className="edit">
                            <a href="#">Edit</a> |
                          </span>
                          <span className="delete">
                            <button onClick={() => handleDelete(item.id)}>Delete Permanently</button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="column-author">Admin</td>
                  <td className="column-date">{item.uploaded}</td>
                  <td className="column-dimensions">{item.dimensions}</td>
                  <td className="column-size">{item.size}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-items">
                  No media items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {uploadModalOpen && (
        <div className={styles['media-modal']}>
          <div className={styles['media-modal-content']}>
            <div className={styles['media-modal-header']}>
              <h2>Upload Files</h2>
              <button
                className={styles['media-modal-close']}
                onClick={() => setUploadModalOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className={styles['media-modal-body']}>
              <div className={styles['upload-area']}>
                <input
                  type="file"
                  id="media-upload"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="media-upload" className={styles['upload-instructions']}>
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag files here or click to select</p>
                  <button className="button button-primary">Select Files</button>
                </label>
                {currentFile && (
                  <div className={styles['upload-preview']}>
                    <p>Selected: {currentFile.name}</p>
                    <p>Size: {(currentFile.size / 1024).toFixed(1)} KB</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;
