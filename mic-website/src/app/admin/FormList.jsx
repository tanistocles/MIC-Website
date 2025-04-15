"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faSearch, faPlus, faCopy } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './FormListStyle.module.css';

const FormList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Forms</h1>
        <Link href="/forms/new" className={styles.newFormButton}>
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
            <input type="search" placeholder="Search forms..." />
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className={styles.bulkActions}>
        <select className={styles.bulkSelect} defaultValue="">
          <option value="" disabled>Bulk Actions</option>
          <option value="trash">Move to Trash</option>
          <option value="delete">Delete Permanently</option>
          <option value="duplicate">Duplicate</option>
        </select>
        <button className={styles.applyButton}>Apply</button>
        <span className={styles.selectedCount}>0 items selected</span>
      </div>

      {/* Forms Table */}
      <table className={styles.formsTable}>
        <thead>
          <tr>
            <th className={styles.checkColumn}>
              <input type="checkbox" />
            </th>
            <th>Title</th>
            <th>Shortcode</th>
            <th>Author</th>
            <th>Entries</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.checkColumn}>
              <input type="checkbox" />
            </td>
            <td className={styles.titleCell}>
              <Link href="/forms/edit/1" className={styles.formTitle}>
                Contact Form
              </Link>
            </td>
            <td className={styles.shortcodeCell}>
              <span className={styles.shortcode}>[form id="1"]</span>
              <button className={styles.copyButton}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </td>
            <td>Admin</td>
            <td>42</td>
            <td>
              <span className={`${styles.status} ${styles.published}`}>published</span>
            </td>
            <td>2023-10-01</td>
            <td className={styles.actionsCell}>
              <Link href="/forms/edit/1" className={styles.actionButton}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <button className={styles.actionButton}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
          {/* More rows can go here... */}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button className={styles.paginationButton} disabled>
          Previous
        </button>
        <span className={styles.pageInfo}>Page 1 of 1</span>
        <button className={styles.paginationButton} disabled>
          Next
        </button>
      </div>
    </div>
  );
};

export default FormList;
