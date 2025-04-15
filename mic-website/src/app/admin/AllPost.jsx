import styles from './AllPostStyle.module.css';

function AllPost() {
  return (
    <>
      <div className={styles.wrap}>
        <h1 className={styles['wp-heading-inline']}>Posts</h1>
        <a href="/posts/new" className={styles['page-title-action']}>Add New</a>

        <div className={styles.tablenav + ' top'}>
          <div className="alignleft actions">
            <select className="post-status-filter">
              <option value="all">All Statuses</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="trash">Trash</option>
            </select>

            <select className="category-filter">
              <option value="all">All</option>
              <option value="uncategorized">Uncategorized</option>
              <option value="tutorial">Tutorial</option>
              <option value="news">News</option>
            </select>

            <button className={styles.button}>Filter</button>
          </div>

          <div className={styles['search-box']}>
            <input type="search" placeholder="Search posts..." />
            <button className={styles.button}>Search</button>
          </div>
        </div>

        <div className={styles.tablenav + ' top'}>
          <div className={"alignleft actions " + styles.bulkactions}>
            <select id="bulk-action-selector">
              <option value="-1">Bulk Actions</option>
              <option value="edit">Edit</option>
              <option value="trash">Move to Trash</option>
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
            <button className={styles.button + ' action'}>Apply</button>
          </div>

          <div className={styles['tablenav-pages']}>
            <span className={styles['displaying-num']}>2 items</span>
            <span className="pagination-links">
              <button className={styles.button} disabled>←</button>
              <span className="current-page">Page 1 of 1</span>
              <button className={styles.button} disabled>→</button>
            </span>
          </div>
        </div>

        <table className={styles['wp-list-table'] + ' widefat fixed striped posts'}>
          <thead>
            <tr>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <th className={styles['column-title']}>Title</th>
              <th className="column-author">Author</th>
              <th className="column-categories">Categories</th>
              <th className="column-tags">Tags</th>
              <th className="column-date">Date</th>
              <th className="column-status">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles['status-published']}>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <td className={styles['column-title']}>
                <strong><a href="/posts/edit/1">Hello World</a></strong>
                <div className={styles['row-actions']}>
                  <span className="edit"><a href="/posts/edit/1">Edit</a> | </span>
                  <span className="trash"><button>Trash</button> | </span>
                  <span className="view"><a href="/blog/1" target="_blank" rel="noopener noreferrer">View</a></span>
                </div>
              </td>
              <td className="column-author">Admin</td>
              <td className="column-categories">Uncategorized</td>
              <td className="column-tags">welcome</td>
              <td className="column-date">2025-04-14</td>
              <td className="column-status"><span className="post-status published">Published</span></td>
            </tr>
            <tr className={styles['status-draft']}>
              <th className={styles['check-column']}><input type="checkbox" /></th>
              <td className={styles['column-title']}>
                <strong><a href="/posts/edit/2">Getting Started with React</a></strong>
                <div className={styles['row-actions']}>
                  <span className="edit"><a href="/posts/edit/2">Edit</a> | </span>
                  <span className="trash"><button>Trash</button> | </span>
                  <span className="view"><a href="/blog/2" target="_blank" rel="noopener noreferrer">View</a></span>
                </div>
              </td>
              <td className="column-author">Admin</td>
              <td className="column-categories">Tutorial</td>
              <td className="column-tags">react, javascript</td>
              <td className="column-date">2025-04-14</td>
              <td className="column-status"><span className="post-status draft">Draft</span></td>
            </tr>
          </tbody>
        </table>

        <div className={styles.tablenav + ' bottom'}>
          <div className={"alignleft actions " + styles.bulkactions}>
            <select id="bulk-action-selector-bottom">
              <option value="-1">Bulk Actions</option>
              <option value="edit">Edit</option>
              <option value="trash">Move to Trash</option>
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
            <button className={styles.button + ' action'}>Apply</button>
          </div>

          <div className={styles['tablenav-pages']}>
            <span className={styles['displaying-num']}>2 items</span>
            <span className="pagination-links">
              <button className={styles.button} disabled>←</button>
              <span className="current-page">Page 1 of 1</span>
              <button className={styles.button} disabled>→</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPost;
