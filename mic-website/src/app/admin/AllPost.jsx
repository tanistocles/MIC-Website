import './AllPostStyle.css'

function AllPost() {
  return(
    <>
      <div class="wrap">
    <h1 class="wp-heading-inline">Posts</h1>
    <a href="/posts/new" class="page-title-action">Add New</a>

    <div class="tablenav top">
      <div class="alignleft actions">
        <select class="post-status-filter">
          <option value="all">All Statuses</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
          <option value="trash">Trash</option>
        </select>

        <select class="category-filter">
          <option value="all">All</option>
          <option value="uncategorized">Uncategorized</option>
          <option value="tutorial">Tutorial</option>
          <option value="news">News</option>
        </select>

        <button class="button">Filter</button>
      </div>

      <div class="search-box">
        <input type="search" placeholder="Search posts..."/>
        <button class="button">Search</button>
      </div>
    </div>
    <div class="tablenav top">
      <div class="alignleft actions bulkactions">
        <select id="bulk-action-selector">
          <option value="-1">Bulk Actions</option>
          <option value="edit">Edit</option>
          <option value="trash">Move to Trash</option>
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
        </select>
        <button class="button action">Apply</button>
      </div>

      <div class="tablenav-pages">
        <span class="displaying-num">2 items</span>
        <span class="pagination-links">
          <button class="button" disabled>←</button>
          <span class="current-page">Page 1 of 1</span>
          <button class="button" disabled>→</button>
        </span>
      </div>
    </div>

    <table class="wp-list-table widefat fixed striped posts">
      <thead>
        <tr>
          <th class="check-column"><input type="checkbox"/></th>
          <th class="column-title">Title</th>
          <th class="column-author">Author</th>
          <th class="column-categories">Categories</th>
          <th class="column-tags">Tags</th>
          <th class="column-date">Date</th>
          <th class="column-status">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr class="status-published">
          <th class="check-column"><input type="checkbox"/></th>
          <td class="column-title">
            <strong><a href="/posts/edit/1">Hello World</a></strong>
            <div class="row-actions">
              <span class="edit"><a href="/posts/edit/1">Edit</a> | </span>
              <span class="trash"><button>Trash</button> | </span>
              <span class="view"><a href="/blog/1" target="_blank" rel="noopener noreferrer">View</a></span>
            </div>
          </td>
          <td class="column-author">Admin</td>
          <td class="column-categories">Uncategorized</td>
          <td class="column-tags">welcome</td>
          <td class="column-date">2025-04-14</td>
          <td class="column-status"><span class="post-status published">Published</span></td>
        </tr>
        <tr class="status-draft">
          <th class="check-column"><input type="checkbox"/></th>
          <td class="column-title">
            <strong><a href="/posts/edit/2">Getting Started with React</a></strong>
            <div class="row-actions">
              <span class="edit"><a href="/posts/edit/2">Edit</a> | </span>
              <span class="trash"><button>Trash</button> | </span>
              <span class="view"><a href="/blog/2" target="_blank" rel="noopener noreferrer">View</a></span>
            </div>
          </td>
          <td class="column-author">Admin</td>
          <td class="column-categories">Tutorial</td>
          <td class="column-tags">react, javascript</td>
          <td class="column-date">2025-04-14</td>
          <td class="column-status"><span class="post-status draft">Draft</span></td>
        </tr>
      </tbody>
    </table>

    <div class="tablenav bottom">
      <div class="alignleft actions bulkactions">
        <select id="bulk-action-selector-bottom">
          <option value="-1">Bulk Actions</option>
          <option value="edit">Edit</option>
          <option value="trash">Move to Trash</option>
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
        </select>
        <button class="button action">Apply</button>
      </div>

      <div class="tablenav-pages">
        <span class="displaying-num">2 items</span>
        <span class="pagination-links">
          <button class="button" disabled>←</button>
          <span class="current-page">Page 1 of 1</span>
          <button class="button" disabled>→</button>
        </span>
      </div>
    </div>
  </div>
    </>
  )
}
export default AllPost;