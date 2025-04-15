"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEdit, faTrash, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './AllUsersStyle.module.css';

const AllUsers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Users</h1>
        <Link href="/users/new" className={styles.newUserButton}>
          <FontAwesomeIcon icon={faPlus} /> Add New
        </Link>
      </div>

      {/* Filters and Search */}
      <div className={styles.controls}>
        <div className={styles.filterGroup}>
          <select className={styles.filterSelect}>
            <option value="all">All Roles</option>
            <option value="administrator">Administrator</option>
            <option value="editor">Editor</option>
            <option value="author">Author</option>
            <option value="subscriber">Subscriber</option>
          </select>
        </div>

        <div className={styles.searchGroup}>
          <div className={styles.searchBox}>
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            <input type="search" placeholder="Search users..." />
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <div className={styles.bulkActions}>
        <select className={styles.bulkSelect} defaultValue="">
          <option value="" disabled>Bulk Actions</option>
          <option value="delete">Delete</option>
          <option value="change_role">Change Role</option>
        </select>
        <button className={styles.applyButton}>Apply</button>
        <span className={styles.selectedCount}>0 items selected</span>
      </div>

      {/* Users Table */}
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th className={styles.checkColumn}>
              <input type="checkbox" />
            </th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Posts</th>
            <th>Registered</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.checkColumn}>
              <input type="checkbox" />
            </td>
            <td className={styles.usernameCell}>
              <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
              admin
            </td>
            <td>admin@example.com</td>
            <td>
              <span className={`${styles.role} ${styles.administrator}`}>
                administrator
              </span>
            </td>
            <td>42</td>
            <td>2023-01-15</td>
            <td className={styles.actionsCell}>
              <Link href="/users/edit/1" className={styles.actionButton}>
                <FontAwesomeIcon icon={faEdit} />
              </Link>
              <button className={styles.actionButton}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

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

export default AllUsers;
