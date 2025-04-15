"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faEdit, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './AllPagesStyle.module.css';

const AllPages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>All Pages</h1>
        <Link href="/pages/new" className={styles.newPageButton}>
          <FontAwesomeIcon icon={faPlus} /> Add New
        </Link>
      </div>

      {/* Filters and Search */}
      <div className={styles.controls}>
        <div className={styles.filterGroup}>
          <select className={styles.filterSelect}>
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="trash">Trash</option>
          </select>
        </div>

        <div className={styles.searchGroup}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input type="search" placeholder="Search pages..." />
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className={styles.bulkActions}>
        <select className={styles.bulkSelect} defaultValue="">
          <option value="" disabled>Bulk Actions</option>
          <option value="trash">Move to Trash</option>
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
        </select>
        <button className={styles.applyButton}>Apply</button>
        <span className={styles.selectedCount}>0 items selected</span>
      </div>

      {/* Pages Table */}
      <table className={styles.pagesTable}>
        <thead>
          <tr>
            <th className={styles.checkColumn}>
              <input type="checkbox" />
            </th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Template</th>
            <th>Last Modified</th>
            <th>Views</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.checkColumn}>
              <input type="checkbox" />
            </td>
            <td className={styles.titleCell}>
              <FontAwesomeIcon icon={faFile} className={styles.pageIcon} />
              <Link href="/pages/edit/1" className={styles.pageTitle}>Home Page</Link>
              <span className={styles.pageSlug}>/home</span>
            </td>
            <td>Admin</td>
            <td>
              <span className={`${styles.status} ${styles.published}`}>published</span>
            </td>
            <td>Default</td>
            <td>2023-10-01</td>
            <td>1,500</td>
            <td className={styles.actionsCell}>
              <Link href="/pages/edit/1" className={styles.actionButton}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <button className={styles.actionButton}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.paginationButton} disabled>Previous</button>
        <span className={styles.pageInfo}>Page 1 of 1</span>
        <button className={styles.paginationButton} disabled>Next</button>
      </div>
    </div>
  );
};

export default AllPages;
