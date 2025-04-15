"use client";

// MediaLibrary.jsx
import React, { useState } from 'react';

const MediaLibrary = () => {
  // Mock data - replace with actual API calls
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      title: 'sunset.jpg',
      type: 'image',
      url: 'https://via.placeholder.com/300x200',
      uploaded: '2023-10-01',
      dimensions: '300×200',
      size: '45 KB'
    },
    {
      id: 2,
      title: 'presentation.pdf',
      type: 'document',
      url: '#',
      uploaded: '2023-09-28',
      dimensions: '-',
      size: '2.4 MB'
    },
    {
      id: 3,
      title: 'product-video.mp4',
      type: 'video',
      url: '#',
      uploaded: '2023-09-25',
      dimensions: '1920×1080',
      size: '15.2 MB'
    },
    // Add more media items...
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);

  // Filter media items based on search
  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Bulk actions
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
    // Add other bulk actions as needed
  };

  const handleDelete = (itemId) => {
    setMediaItems(mediaItems.filter(item => item.id !== itemId));
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setCurrentFile(file);
      
      // Create preview if image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (upload) => {
          // Add to media library
          const newId = Math.max(...mediaItems.map(item => item.id), 0) + 1;
          const newItem = {
            id: newId,
            title: file.name,
            type: 'image',
            url: upload.target.result,
            uploaded: new Date().toISOString().split('T')[0],
            dimensions: '-', // Would calculate from actual image
            size: `${(file.size / 1024).toFixed(1)} KB`
          };
          
          setMediaItems([...mediaItems, newItem]);
          setUploadModalOpen(false);
        };
        reader.readAsDataURL(file);
      } else {
        // Handle non-image upload
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
    <div className="wrap">
      <h1 className="wp-heading-inline">Media Library</h1>
      <button 
        className="page-title-action"
        onClick={() => setUploadModalOpen(true)}
      >
        Add New
      </button>
      
      {/* View Mode Toggle */}
      <div className="view-mode-toggle">
        <button
          className={`button ${viewMode === 'grid' ? 'active' : ''}`}
          onClick={() => setViewMode('grid')}
        >
          <i className="fas fa-th"></i> Grid
        </button>
        <button
          className={`button ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          <i className="fas fa-list"></i> List
        </button>
      </div>
      
      {/* Search and Bulk Actions */}
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
      
      {/* Media Display */}
      {viewMode === 'grid' ? (
        <div className="media-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <div 
                key={item.id} 
                className={`media-item ${selectedItems.includes(item.id) ? 'selected' : ''}`}
                onClick={() => handleSelectItem(item.id)}
              >
                <div className="media-thumbnail">
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.title} />
                  ) : (
                    <div className="media-icon">
                      <i className={`fas fa-file-${item.type === 'video' ? 'video' : 'alt'}`}></i>
                    </div>
                  )}
                  {selectedItems.includes(item.id) && (
                    <div className="selected-checkbox">
                      <i className="fas fa-check"></i>
                    </div>
                  )}
                </div>
                <div className="media-info">
                  <div className="media-title">{item.title}</div>
                  <div className="media-details">
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
                    <div className="media-list-item">
                      {item.type === 'image' ? (
                        <img src={item.url} alt={item.title} className="media-list-thumbnail" />
                      ) : (
                        <div className="media-list-icon">
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
      
      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="media-modal">
          <div className="media-modal-content">
            <div className="media-modal-header">
              <h2>Upload Files</h2>
              <button 
                className="media-modal-close"
                onClick={() => setUploadModalOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="media-modal-body">
              <div className="upload-area">
                <input 
                  type="file" 
                  id="media-upload" 
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <label htmlFor="media-upload" className="upload-instructions">
                  <i className="fas fa-cloud-upload-alt"></i>
                  <p>Drag files here or click to select</p>
                  <button className="button button-primary">Select Files</button>
                </label>
                {currentFile && (
                  <div className="upload-preview">
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