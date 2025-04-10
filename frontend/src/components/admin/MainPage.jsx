import React from "react";

function MainPage() {
    return (
        <>
            <main class="main-content">
        <div class="top-nav">
            <h1>Dashboard</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search..."/>
            </div>
            <div class="user-profile">
                <div class="avatar"></div>
                <span>Admin User</span>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>
        <div class="widgets-grid">
            <div class="widget">
                <h2>Quick Stats</h2>
                <p>Posts: 12</p>
                <p>Users: 5</p>
                <p>Comments: 23</p>
            </div>

            <div class="widget">
                <h2>Recent Posts</h2>
                <table class="post-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sample Post 1</td>
                            <td>Admin</td>
                            <td>2024-03-20</td>
                        </tr>
                        <tr>
                            <td>Sample Post 2</td>
                            <td>Editor</td>
                            <td>2024-03-19</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="widget">
                <h2>System Info</h2>
                <p>Version: 1.0.0</p>
                <p>Theme: Default</p>
                <p>Storage: 64MB / 1GB</p>
            </div>
        </div>
    </main>
        </>
    )
}
export default MainPage;