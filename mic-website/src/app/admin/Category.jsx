// Categories.jsx
import './CategoryStyle.css'

function Category() {
    return (
        <div class="wrap">
    <h1 class="wp-heading-inline">Categories</h1>
    <a href="/posts" class="page-title-action">Back to Posts</a>
    
    <div class="category-management">
      <div class="postbox">
        <div class="postbox-header">
          <h2>Add New Category</h2>
        </div>
        <div class="inside">
          <form>
            <div class="form-field">
              <label for="category-name">Name</label>
              <input type="text" id="category-name" placeholder="Sample Name" />
            </div>
            <div class="form-field">
              <label for="category-slug">Slug</label>
              <input type="text" id="category-slug" placeholder="sample-slug" />
            </div>
            <button type="submit" class="button button-primary">Add New Category</button>
            <button type="button" class="button">Cancel</button>
          </form>
        </div>
      </div>

      <div class="tablenav top">
        <div class="alignleft actions bulkactions">
          <select>
            <option value="">Bulk Actions</option>
            <option value="delete">Delete</option>
          </select>
          <button type="button" class="button action">Apply</button>
        </div>
      </div>

      <table class="wp-list-table widefat fixed striped">
        <thead>
          <tr>
            <th class="check-column">
              <input type="checkbox" />
            </th>
            <th class="column-name">Name</th>
            <th class="column-slug">Slug</th>
            <th class="column-posts">Count</th>
            <th class="column-actions">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="check-column">
              <input type="checkbox" />
            </th>
            <td class="column-name"><strong>News</strong></td>
            <td class="column-slug">news</td>
            <td class="column-posts">15</td>
            <td class="column-actions">
              <button type="button" class="button">Edit</button>
              <button type="button" class="button">Delete</button>
            </td>
          </tr>
          <tr>
            <th class="check-column">
              <input type="checkbox" />
            </th>
            <td class="column-name"><strong>Tutorials</strong></td>
            <td class="column-slug">tutorials</td>
            <td class="column-posts">28</td>
            <td class="column-actions">
              <button type="button" class="button">Edit</button>
              <button type="button" class="button">Delete</button>
            </td>
          </tr>
          <tr>
            <th class="check-column">
              <input type="checkbox" />
            </th>
            <td class="column-name"><strong>Uncategorized</strong></td>
            <td class="column-slug">uncategorized</td>
            <td class="column-posts">42</td>
            <td class="column-actions">
              <button type="button" class="button">Edit</button>
              <button type="button" class="button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

    )
    

}

export default Category;