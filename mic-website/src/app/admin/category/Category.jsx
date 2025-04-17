import styles from './CategoryStyle.module.css';

function Category() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles['wp-heading-inline']}>Categories</h1>
      <a href="/posts" className={styles['page-title-action']}>Back to Posts</a>

      <div className={styles['category-management']}>
        <div className={styles.postbox}>
          <div className={styles['postbox-header']}>
            <h2>Add New Category</h2>
          </div>
          <div className={styles.inside}>
            <form>
              <div className={styles['form-field']}>
                <label htmlFor="category-name">Name</label>
                <input type="text" id="category-name" placeholder="Sample Name" />
              </div>
              <div className={styles['form-field']}>
                <label htmlFor="category-slug">Slug</label>
                <input type="text" id="category-slug" placeholder="sample-slug" />
              </div>
              <button type="submit" className={`${styles.button} ${styles['button-primary']}`}>Add New Category</button>
              <button type="button" className={styles.button}>Cancel</button>
            </form>
          </div>
        </div>

        <div className={styles.tablenav}>
          <div className={styles.bulkactions}>
            <select>
              <option value="">Bulk Actions</option>
              <option value="delete">Delete</option>
            </select>
            <button type="button" className={styles.button}>Apply</button>
          </div>
        </div>

        <table className={styles['wp-list-table']}>
          <thead>
            <tr>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <th className={styles['column-name']}>Name</th>
              <th className={styles['column-slug']}>Slug</th>
              <th className={styles['column-posts']}>Count</th>
              <th className={styles['column-actions']}>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <td className={styles['column-name']}><strong>Community</strong></td>
              <td className={styles['column-slug']}>community</td>
              <td className={styles['column-posts']}>15</td>
              <td className={styles['column-actions']}>
                <button type="button" className={styles.button}>Edit</button>
                <button type="button" className={styles.button}>Delete</button>
              </td>
            </tr>
            <tr>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <td className={styles['column-name']}><strong>Education</strong></td>
              <td className={styles['column-slug']}>education</td>
              <td className={styles['column-posts']}>28</td>
              <td className={styles['column-actions']}>
                <button type="button" className={styles.button}>Edit</button>
                <button type="button" className={styles.button}>Delete</button>
              </td>
            </tr>
            <tr>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <td className={styles['column-name']}><strong>Uncategorized</strong></td>
              <td className={styles['column-slug']}>uncategorized</td>
              <td className={styles['column-posts']}>42</td>
              <td className={styles['column-actions']}>
                <button type="button" className={styles.button}>Edit</button>
                <button type="button" className={styles.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
