"use client"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './AllPostStyle.module.css';

const AllPosts = () => {
  // Mock data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Getting Started with Next.js',
      author: 'Admin',
      categories: ['Tutorial'],
      status: 'published',
      date: '16-04-2025',
      views: 1500
    },
  ]);

  const [selectedPosts, setSelectedPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const postsPerPage = 10;

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || 
                          post.categories.includes(filterCategory);
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Bulk actions
  const bulkActions = [
    { value: 'trash', label: 'Move to Trash' },
    { value: 'publish', label: 'Publish' },
    { value: 'draft', label: 'Draft' }
  ];

  const handleBulkAction = (action) => {
    switch(action) {
      case 'trash':
        setPosts(posts.filter(post => !selectedPosts.includes(post.id)));
        break;
      case 'publish':
        setPosts(posts.map(post => 
          selectedPosts.includes(post.id) ? {...post, status: 'published'} : post
        ));
        break;
      case 'draft':
        setPosts(posts.map(post => 
          selectedPosts.includes(post.id) ? {...post, status: 'draft'} : post
        ));
        break;
      default:
        break;
    }
    setSelectedPosts([]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Posts</h1>
        <Link href="/posts/new" className={styles.newPostButton}>
          Add New
        </Link>
      </div>

      <div className={styles.filters}>
        <select 
          className={styles.filterSelect}
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="trash">Trash</option>
        </select>

        <select
          className={styles.filterSelect}
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Tutorial">Tutorial</option>
          <option value="News">News</option>
        </select>

        <div className={styles.searchBox}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.bulkActions}>
        <select 
          className={styles.bulkSelect}
          onChange={(e) => handleBulkAction(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>Bulk Actions</option>
          {bulkActions.map(action => (
            <option key={action.value} value={action.value}>{action.label}</option>
          ))}
        </select>
        <button 
          className={styles.applyButton}
          disabled={selectedPosts.length === 0}
        >
          Apply
        </button>
        <span className={styles.selectedCount}>
          {selectedPosts.length} items selected
        </span>
      </div>

      <table className={styles.postsTable}>
        <thead>
          <tr>
            <th className={styles.checkColumn}>
              <input 
                type="checkbox" 
                checked={selectedPosts.length === currentPosts.length}
                onChange={(e) => 
                  setSelectedPosts(e.target.checked ? currentPosts.map(p => p.id) : [])
                }
              />
            </th>
            <th className={styles.titleColumn}>Title</th>
            <th>Author</th>
            <th>Categories</th>
            <th>Status</th>
            <th>Date</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map(post => (
            <tr key={post.id}>
              <td className={styles.checkColumn}>
                <input 
                  type="checkbox" 
                  checked={selectedPosts.includes(post.id)}
                  onChange={() => setSelectedPosts(prev => 
                    prev.includes(post.id) 
                      ? prev.filter(id => id !== post.id) 
                      : [...prev, post.id]
                  )}
                />
              </td>
              <td className={styles.titleCell}>
                <FontAwesomeIcon icon={faFileAlt} className={styles.postIcon} />
                {post.title}
              </td>
              <td>{post.author}</td>
              <td>{post.categories.join(', ')}</td>
              <td>
                <span className={`${styles.status} ${styles[post.status]}`}>
                  {post.status}
                </span>
              </td>
              <td>{post.date}</td>
              <td>{post.views.toLocaleString()}</td>
              <td className={styles.actionsCell}>
                <Link href={`/posts/edit/${post.id}`} className={styles.actionLink}>
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
                <button 
                  className={styles.actionButton}
                  onClick={() => handleDelete(post.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPosts;