import React from "react";

function Navbar() {
    return (
        <>
            <nav class="sidebar">
        <div class="admin-logo">
            <h2>Admin</h2>
        </div>
        <ul class="admin-menu">
            <li class="menu-item">
                <i class="fas fa-home"></i><span>Dashboard</span>
            </li>
            <li class="menu-item">
                <i class="fas fa-file-alt"></i><span>Posts</span>
            </li>
            <li class="menu-item">
                <i class="fas fa-image"></i><span>Media</span>
            </li>
            <li class="menu-item">
                <i class="fas fa-users"></i><span>Users</span>
            </li>
            <li class="menu-item">
                <i class="fas fa-cog"></i><span>Settings</span>
            </li>
        </ul>
    </nav>
        </>
    )
}

export default Navbar;